import axios from "axios";
// import { cookies } from "next/headers"; // For server-side authentication

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});



// Request Interceptor for server-side requests
axiosInstance.interceptors.request.use(
  async (config) => {
    // Only modify requests on the server side
    if (typeof window === "undefined") {
      const { cookies } = await import("next/headers");

      const cookieStore = await cookies();
      // const accessToken = cookieStore.get("access_token")?.value;
      // console.log({accessToken});
      
      
      // Get all cookies and format them for the Cookie header
      const allCookies = cookieStore.getAll();
      const cookieString = allCookies.map(c => `${c.name}=${c.value}`).join('; ');

      if (cookieString) {
        config.headers.Cookie = cookieString;
      }

    }
    
    return config;
  },
  (error) => {
    console.error('API Error:', {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message
    });
    return Promise.reject(error);
  }
);


const PROTECTED_API_ROUTES = [
  {url: "/accounts/protected/", method: "GET"},

  {url: "/bookings/", method: "GET"},
  {url: "/bookings/create/", method: "POST"},
  {url: "/bookings/<int:pk>/", method: "GET"},
  {url: "/bookings/<int:pk>/update/", method: "PATCH"},
  {url: "/bookings/<int:pk>/delete/", method: "DELETE"},

  {url: "/services/", method: "GET"},
  {url: "/services/create/", method: "POST"},
  {url: "/services/<int:pk>/", method: "GET"},
  {url: "/services/<int:pk>/update/", method: "PATCH"},
  {url: "/services/<int:pk>/delete/", method: "DELETE"},
  
  // Add on service
  {url: "/services/addon-services/create/", method: "POST"},
  {url: "/services/addon-services/<int:pk>/delete/", method: "DELETE"},
  {url: "/services/addon-services/<int:pk>/update/", method: "PUT"},

  // Service feature
  {url: "/services/service-features/create/", method: "POST"},
  {url: "/services/service-features/<int:pk>delete/", method: "DELETE"},
  {url: "/services/service-features/<int:pk>update/", method: "PUT"},

    // Vehicle Types
    {url: "/services/vehicle-types/create/", method: "POST"},
    {url: "/services/vehicle-types/<int:pk>delete/", method: "DELETE"},
    {url: "/services/vehicle-types/<int:pk>update/", method: "PUT"},

  
  {url: "/payments/create-payment-intent/", method: "POST"},
  

  ];

// Helper function to check if a request matches any protected route
const isProtectedRoute = (url: string, method: string) => {
  return PROTECTED_API_ROUTES.some(route => {
    // Convert the URL pattern to a regex (handle dynamic segments like <int:pk>)
    const urlPattern = route.url.replace(/<.*?>/g, '[^/]+');
    const urlRegex = new RegExp(`^${urlPattern}$`);
    
    return urlRegex.test(url) && route.method.toUpperCase() === method.toUpperCase();
  });
};


// Flag to prevent multiple refresh token requests
let isRefreshing = false;
let failedRequestsQueue: { resolve: (value?: unknown) => void; reject: (reason?: unknown) => void }[] = [];

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const requestUrl = new URL(originalRequest.url, originalRequest.baseURL).pathname;
    const isProtected = isProtectedRoute(requestUrl, originalRequest.method);

    // Check if the error is due to an expired access token (401 Unauthorized)
    if ( isProtected && error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If a refresh token request is already in progress, queue the failed request
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({ resolve, reject });
        })
          .then(() => {
            // Retry the original request after the token is refreshed
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      // Mark the original request as retried
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Attempt to refresh the access token
        const refreshResponse = await axiosInstance.post("/accounts/refresh-token/");

        // Check if the refresh token request was successful (status code 200)
        if (refreshResponse.status === 200) {
          // Retry the original request
          const retryResponse = await axiosInstance(originalRequest);

          // Resolve all queued requests with the new access token
          failedRequestsQueue.forEach(({ resolve }) => resolve());
          failedRequestsQueue = [];

          return retryResponse;
        } else {
          // If the refresh token request was not successful, throw an error
          throw new Error("Refresh token request failed");
          // Logout and redirect
        }
      } catch (refreshError) {
        // If the refresh token is invalid, clear the queue and redirect to login
        failedRequestsQueue.forEach(({ reject }) => reject(refreshError));
        failedRequestsQueue = [];

        // Redirect to login or handle the error
        // window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // For other errors, reject the promise
    return Promise.reject(error);
  }
);


export default axiosInstance;

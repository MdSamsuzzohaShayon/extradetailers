import axios from "axios";
// import { cookies } from "next/headers"; // For server-side authentication

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
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
    
    console.log('Request:', config.url);
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



// Flag to prevent multiple refresh token requests
let isRefreshing = false;
let failedRequestsQueue: { resolve: (value?: unknown) => void; reject: (reason?: unknown) => void }[] = [];

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired access token (401 Unauthorized)
    if (error.response?.status === 401 && !originalRequest._retry) {
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

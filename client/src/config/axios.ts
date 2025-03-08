import axios from "axios";
// import { cookies } from "next/headers"; // For server-side authentication

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    /*
    if (typeof window === "undefined") {
      // Server-side: Use cookies for authentication
      const token = cookies().get("token")?.value;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } else {
      // Client-side: Use localStorage for authentication
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    */
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;

import axiosInstance from "@/config/axios";

export const signupUser = async (userData: FormData) => {
    const response = await axiosInstance.post("/accounts/signup/", userData);
    return response.data;
};

export const signinUser = async (userData: FormData) => {
  const response = await axiosInstance.post("/accounts/login/", userData);
  return response.data;
};


// Server component 
export async function validateUser(token?: string) {
    if (!token) {
      return {
        message: "❌ Invalid request. No token provided.",
        isError: true,
      };
    }
  
    try {
      const response = await axiosInstance.post(`/accounts/validate-user/`, { token });
  
      if (response.status === 200) {
        // Success, trigger redirection after a message
        return {
          message: "✅ User successfully validated! Redirecting...",
          isError: false,
        };
      }
  
      return {
        message: "❌ Unexpected response. Please try again.",
        isError: true,
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } catch (error: never) {
      console.error("Validation failed:", error.response?.data || error.message);
  
      let errorMessage = "An unknown error occurred. Please try again.";
  
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = "❌ Invalid or expired token. Please try again.";
        } else if (error.response.status === 500) {
          errorMessage = "⚠️ Server error. Please try again later.";
        }
      }
  
      return {
        message: errorMessage,
        isError: true,
      };
    }
  }
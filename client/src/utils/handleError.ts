import { IAPIError } from "@/types";
import { AxiosError } from "axios";

export function handleApiError(error: IAPIError): string {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const errorMessage = error.response?.data?.error || error.response?.data?.message || error.message;

    if (errorMessage) {
      return `Error ${status}: ${errorMessage}`;
    }

    switch (status) {
      case 400:
        return "Error 400: Bad Request - Please check your input.";
      case 401:
        return "Error 401: Unauthorized - Invalid credentials or session expired.";
      case 403:
        return "Error 403: Forbidden - You don't have permission.";
      case 404:
        return "Error 404: Not Found - The requested resource does not exist.";
      case 500:
        return "Error 500: Server Error - Please try again later.";
      default:
        return `Error ${status || "Unknown"}: An unexpected error occurred.`;
    }
  }

  return "An unexpected error occurred. Please try again.";
}

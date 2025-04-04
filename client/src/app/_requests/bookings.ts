import axiosInstance from "@/config/axios";
import { IAPIError, IBooking } from "@/types";
import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const bookingsOptions = {
  queryKey: ["bookings"] as const,
  queryFn: async (): Promise<IBooking[]> => {
    try {
      const response = await axiosInstance.get("/bookings/");
      
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<IAPIError>;
      
      // Handle different error scenarios
      if (axiosError.response) {
        // Server responded with a status code outside 2xx
        const errorMessage = axiosError.response.data?.message || 
                            `Server responded with ${axiosError.response.status}`;
        throw new Error(errorMessage);
      } else if (axiosError.request) {
        // Request was made but no response received
        throw new Error("Network error - no response received from server");
      } else {
        // Something happened in setting up the request
        throw new Error("Failed to setup booking request");
      }
    }
  },
};



async function deleteBooking(serviceId: number) {
  const response = await axiosInstance.delete(`/bookings/${serviceId}/delete/`);
  return response.data;
}

export function deleteBookingOptions(queryClient: QueryClient): Record<string, unknown> {
  return {
    mutationFn: deleteBooking,
    onSuccess: () => {
      console.log("Booking deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["bookings"] }); // ✅ Refetch bookings list
    },
    onError: (error: never) => {
      console.error("Create Booking Error:", error);
    },
  }
}
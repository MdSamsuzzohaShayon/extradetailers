import axiosInstance from "@/config/axios";
import { IService } from "@/types";
import { QueryClient } from "@tanstack/react-query";


export const servicesOptions = {
  queryKey: ["services"],
  queryFn: async (): Promise<IService[]> => {
    try {
      const response = await axiosInstance.get("/services/");
      return response.data;
    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      throw new Error(error?.response?.data?.message || "Failed to fetch services.");
    }
  },
};



async function createService(formData: FormData) {
  const response = await axiosInstance.post("/services/create/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
  return response.data;
}

export function createServiceOptions(queryClient: QueryClient): Record<string, unknown>{
  return {
          mutationFn: createService,
          onSuccess: () => {
              console.log("Service created successfully!");
              queryClient.invalidateQueries({ queryKey: ["services"] }); // ✅ Refetch services list
          },
          onError: (error: never) => {
              console.error("Create Service Error:", error);
              new Error(error);
          },
      }
}


async function deleteService(serviceId: number) {
  const response = await axiosInstance.delete(`/services/${serviceId}/delete/`);
  return response.data;
}

export function deleteServiceOptions(queryClient: QueryClient): Record<string, unknown>{
  return {
          mutationFn: deleteService,
          onSuccess: () => {
              console.log("Service deleted successfully!");
              queryClient.invalidateQueries({ queryKey: ["services"] }); // ✅ Refetch services list
          },
          onError: (error: never) => {
              console.error("Create Service Error:", error);
          },
      }
}
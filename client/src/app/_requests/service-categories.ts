import axiosInstance from "@/config/axios";
import { useMessage } from "@/lib/ToastProvider";
import { IServiceCategory } from "@/types";
import { handleApiError } from "@/utils/handleError";
import { QueryClient } from "@tanstack/react-query";


export const serviceCategoriesOptions = {
  queryKey: ["serviceCategories"],
  queryFn: async (): Promise<IServiceCategory[]> => {
    try {
      const response = await axiosInstance.get("/services/service-categories/");
      return response.data;
    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      throw new Error(error?.response?.data?.message || "Failed to fetch serviceCategories.");
    }
  },
};



async function createServiceCategory(formData: FormData) {
  const response = await axiosInstance.post("/serviceCategories/create/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
  return response.data;
}

export function useCreateServiceCategoryOptions(queryClient: QueryClient): Record<string, unknown>{
    const { setMessage } = useMessage();
  return {
          mutationFn: createServiceCategory,
          onSuccess: () => {
              console.log("ServiceCategory created successfully!");
              queryClient.invalidateQueries({ queryKey: ["serviceCategories"] }); // ✅ Refetch serviceCategories list
          },
          onError: (error: never) => {
              console.error("Create ServiceCategory Error:", error);
              const errorMessage = handleApiError(error);
              setMessage({ error: true, text: errorMessage });
          },
      }
}


async function deleteServiceCategory(addOnServiceId: number) {
  const response = await axiosInstance.delete(`/serviceCategories/${addOnServiceId}/delete/`);
  return response.data;
}

export function deleteServiceCategoryOptions(queryClient: QueryClient): Record<string, unknown>{
  return {
          mutationFn: deleteServiceCategory,
          onSuccess: () => {
              console.log("ServiceCategory deleted successfully!");
              queryClient.invalidateQueries({ queryKey: ["serviceCategories"] }); // ✅ Refetch serviceCategories list
          },
          onError: (error: never) => {
              console.error("Create ServiceCategory Error:", error);
          },
      }
}
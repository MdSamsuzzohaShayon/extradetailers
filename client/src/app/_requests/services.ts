import axiosInstance from "@/config/axios";

export async function getServices() {
  const response = await axiosInstance.get("/services/");
  return response.data;
}

export async function createService(formData: FormData) {
  const response = await axiosInstance.post("/services/create/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true, // ✅ Ensure cookies are sent
  });
  return response.data;
}
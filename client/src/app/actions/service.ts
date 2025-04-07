"use server";

import axiosInstance from "@/config/axios";

export const createService = async (formData: FormData) => {
    for (const [k, v] of formData.entries()) {
        console.log(`${k}: ${v}`);
    }
    console.log("Form data: ", formData.entries());
    
    const response = await axiosInstance.post("/services/create/", formData);
    return response.data;
};

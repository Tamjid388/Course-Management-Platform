import axiosInstance from "@/axiosInstance/axiosInstance";

export const CurrentUser = async () => {
  try {
    const response = await axiosInstance.get("users/me"); 
    return response.data;
  } catch (error) {
    console.log("Fetch current user error");
    
    throw error;
  }
};
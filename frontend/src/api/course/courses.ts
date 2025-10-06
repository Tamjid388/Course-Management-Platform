import axiosInstance from "@/axiosInstance/axiosInstance";
import axiosInstancePrivate from "@/axiosInstance/axiosInstance"; // বা public instance যদি token দরকার না হয়

export const fetchCourses = async () => {
  try {
    const response = await axiosInstance.get(
      "courses?populate[module][populate][0]=videos"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};


export const fetchCourseById = async (id: string) => {
  const response = await axiosInstance.get(
    `courses/${id}?populate[module][populate][0]=videos`
  );
  return response.data.data;
};

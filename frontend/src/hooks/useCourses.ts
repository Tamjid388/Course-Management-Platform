
import { fetchCourseById, fetchCourses } from "@/api/course/courses"
import { useQuery } from "@tanstack/react-query"



export const useCourses=()=>{
    return useQuery({
        queryKey:['courses'],
        queryFn:fetchCourses
    })
}

export const useCourseById = (id: string) => {
  return useQuery({
    queryKey: ["course", id],
    queryFn: () => fetchCourseById(id),
  });
};
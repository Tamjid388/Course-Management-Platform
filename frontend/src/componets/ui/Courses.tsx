"use client"

import { useCourses } from "@/hooks/useCourses";
import { useCurrentUser } from "@/hooks/useCurrenuser";
import { Course, Module } from "@/types/course";
import { useRouter } from "next/navigation";


export default function Courses() {
      const {data:allcourse}=useCourses()
      const { data: user } = useCurrentUser();
  const router = useRouter();
  const handleViewMore = (id: string) => {
    if (!user) {
      router.push("/login");
      return;
    }
    router.push(`/courses/${id}`);
  };

  return (
      <div className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
    <div className="text-center mb-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Our <span className="text-purple-600">Courses</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">
          Explore courses crafted to elevate your skills and career growth
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allcourse?.data.map((course: Course) => (
          <div
            key={course.id}
            className="border border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:border-purple-400 transition-all duration-300 bg-white p-6 flex flex-col justify-between"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-purple-600 line-clamp-2">{course.title}</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-1">
              <span className="font-semibold">Instructor:</span> {course.instructor}
            </p>
<p className="text-gray-600 text-sm sm:text-base mb-1">
                  <span className="font-semibold">Category:</span> {course.category}
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-1">
                  <span className="font-semibold">Level:</span> {course.level}
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  <span className="font-semibold">Modules:</span>{" "}
                  {course.module.length}
                </p>
          
            {/* Modules */}
            <div>
            <button
                onClick={() => handleViewMore(course.documentId)}
                className="btn btn-neutral w-full"
              >
                View More
              </button>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

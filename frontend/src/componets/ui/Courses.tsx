"use client"

import { useCourses } from "@/hooks/useCourses";
import { Course, Module } from "@/types/course";
import Link from "next/link";

export default function Courses() {
      const {data:allcourse}=useCourses()
  console.log(allcourse);

  return (
      <div className="py-8 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allcourse?.data.map((course: Course) => (
          <div
            key={course.id}
            className="border rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-purple-600">{course.title}</h2>
            <p className="text-gray-600 mb-2">
              Instructor: {course.instructor}
            </p>
            <p className="text-gray-600 mb-2">Category: {course.category}</p>
            <p className="text-gray-600 mb-2">Level: {course.level}</p>
            <h3 className="text-gray-600 mb-2">{course.module.length} Module</h3>
          
            {/* Modules */}
            <div>
              <Link
              href={`/courses/${course.documentId}`}
              className="btn btn-neutral">
                View More
              </Link>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

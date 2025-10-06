"use client"
import { useCourseById } from '@/hooks/useCourses';
import { Module } from '@/types/course';
import { useParams } from 'next/navigation'
import React from 'react'

export default function Coursedetails() {
    const params=useParams();
    const documentId=params.documentId as string
    console.log(documentId);
    const { data: course, isPending, error } = useCourseById(documentId);
    console.log(course);

    if(isPending){
      return <span className="loading loading-dots loading-xl"></span>
    }
  return (
    <div className='py-8'>
    <div className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-purple-600">{course.title}</h1>
      <p className="mb-2"><strong>Instructor:</strong> {course.instructor}</p>
      <p className="mb-2"><strong>Category:</strong> {course.category}</p>
      <p className="mb-2"><strong>Level:</strong> {course.level}</p>
      <p className="mb-4"><strong>Price:</strong> ${course.price}</p>

      {/* {course.cover.length > 0 && (
        <img
          src={course.cover[0].children[1]?.url}
          alt={course.title}
          className="mb-6 rounded-lg shadow "
        />
      )} */}

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description:</h2>
        {course.description.map((block, idx) => (
          <p className='font-semibold text-gray-500' key={idx}>
            {block.children.map((child, i) => child.text).join("")}
          </p>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Modules:</h2>
        {course.module.map((mod:Module,idx:string) => (
          <div key={mod.documentId} className="mb-4 p-4 border rounded">
            <h3 className="font-bold mb-2 text-xl">Module:{idx+1} {mod.title}</h3>
            <div className="mb-2 font-semibold">
              {mod.description.map((block, idx) => (
                <p key={idx}>
                  {block.children.map((child) => child.text).join("")}
                </p>
              ))}
            </div>
            <div>
              <button className='btn rounded-2xl btn-outline'>View More</button>
            </div>
            {/* {mod.videos.length > 0 && (
              <ul className="list-disc pl-5">
                {mod.videos.map((vid) => (
                  <li key={vid.documentId}>
                    <a
                      href={vid.videoUrl[0].children[1]?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {vid.title} ({vid.duration})
                    </a>
                  </li>
                ))}
              </ul>
            )} */}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

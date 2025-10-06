"use client"
import { useCourseById } from '@/hooks/useCourses';
import { Module, RichTextBlock } from '@/types/course';
import { useParams } from 'next/navigation'
import React from 'react'
import ReactPlayer from 'react-player'

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
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-purple-600">{course.title}</h1>
      <p className="mb-2"><strong>Instructor:</strong> {course.instructor}</p>
      <p className="mb-2"><strong>Category:</strong> {course.category}</p>
      <p className="mb-2"><strong>Level:</strong> {course.level}</p>
      

      {/* {course.cover.length > 0 && (
        <img
          src={course.cover[0].children[1]?.url}
          alt={course.title}
          className="mb-6 rounded-lg shadow "
        />
      )} */}

      <div className="mb-6">
        <h2 className="md:text-2xl font-bold mb-2">Description:</h2>
        {course.description.map((block:RichTextBlock, idx:number) => (
          <p className='font-semibold text-gray-500' key={idx}>
            {block.children.map((child, i) => child.text).join("")}
          </p>
        ))}
      </div>

      <div>
        <h2 className="md:text-2xl font-bold mb-4">Modules:</h2>
        {course.module.map((mod:Module,idx:string) => (
          <div key={mod.documentId} className="mb-4 p-4 border border-gray-300 rounded-2xl">
            <h3 className="font-bold mb-2 text-xl">Module:{idx+1} {mod.title}</h3>
            <div className="mb-2 font-semibold">
              {mod.description.map((block, idx) => (
                <p key={idx}>
                  {block.children.map((child) => child.text).join("")}
                </p>
              ))}
            </div>
         
      {mod.videos.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 mt-4">
    {mod.videos.map((vid) => {
      const videoUrl = vid.videoUrl[0]?.children[1]?.url;
      console.log(videoUrl);
      return (
        <div
          key={vid.documentId}
          className="border border-gray-300 rounded-lg
           shadow hover:shadow-lg transition p-2 flex flex-col"
        >
          {/* Video preview */}
          {videoUrl ? (
       <div className='' style={{ aspectRatio: '16/9' }}>
          <ReactPlayer className='' src={videoUrl} width="100%"

    height="100%" controls />
       </div>
          ) : (
            <div className="h-32 bg-gray-200 rounded-md mb-2 flex items-center justify-center">
              <span className="text-gray-500">No Video</span>
            </div>
          )}

          {/* Video info */}
          <h4 className="font-semibold text-lg mb-1">{vid.title}</h4>
          <p className="text-gray-500 text-sm">Duration: {vid.duration}</p>
        </div>
      );
    })}
  </div>
)}

          </div>
        ))}
      </div>
    </div>
    
    </div>
  )
}

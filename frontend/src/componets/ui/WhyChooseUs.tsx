import { Award, BookOpen, Globe, ShieldCheck, UsersRound, Zap } from 'lucide-react'
import React from 'react'

export default function WhyChooseUs() {
    const features=[
        {
            icon:<BookOpen  size={45} strokeWidth={2.5}/>,
            heading:"Expert-Led Courses",
            subheading:"Learn from industry professionals with real-world experience",
        },
        {
            icon:<UsersRound  size={45} strokeWidth={2.5}/>,
            heading:"Community Support",
            subheading:"Join a thriving community of learners and mentors",
        },
        {
            icon:<Award  size={45} strokeWidth={2.5}/>,
            heading:"Certificates",
            subheading:"Earn recognized certificates upon course completion",
        },
        {
            icon:<Zap  size={45} strokeWidth={2.5}/>,
            heading:"Fast Learning",
            subheading:"Optimized content for efficient skill acquisition",
        },
        {
            icon:<ShieldCheck  size={45} strokeWidth={2.5}/>,
            heading:"Secure Platform",
            subheading:"Your data and progress are always protected",
        },
        {
            icon:<Globe size={45} strokeWidth={2.5} />,
            heading:"Learn Anywhere",
            subheading:"Access courses from any device, anytime",
        },
    ]
  return (
    <div className='pt-16 flex flex-col px-4 sm:px-6 lg:px-12  max-w-7xl mx-auto'>

   <div className="text-center mb-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Why Choose <span className="text-purple-600">LearnHub?</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">
         Everything you need to accelerate your learning journey
        </p>
      </div>
   <div className=' grid  md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {
        features.map((feature,idx)=>
        <div className='border border-gray-200 hover:border-purple-400 shadow-md p-6 rounded-2xl' key={idx}>
            <h1 className=''>{feature.icon}</h1>
            <h1 className='text-lg sm:text-xl font-semibold mb-2 text-gray-800'>{feature.heading}</h1>
            <h1 className='text-sm sm:text-base text-gray-600'>{feature.subheading}</h1>
        </div>)
    }
   </div>
    </div>
  )
}

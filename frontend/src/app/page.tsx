"use client"
import Banner from "@/componets/ui/Banner";
import Courses from "@/componets/ui/Courses";
import WhyChooseUs from "@/componets/ui/WhyChooseUs";
import { useCourses } from "@/hooks/useCourses";
import Image from "next/image";

export default function Home() {

  return (
    <div className="bg-white">
      <Banner />
      <WhyChooseUs/>
      <Courses/>
    </div>
  );
}

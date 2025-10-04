import Banner from "@/componets/ui/Banner";
import WhyChooseUs from "@/componets/ui/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <WhyChooseUs/>
    </div>
  );
}

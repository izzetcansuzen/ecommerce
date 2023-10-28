"use client";
import Image from "next/image";
import profileImg from "../public/images/profile.png";
import IphoneImg from "../public/images/iphone.webp";
import { Carousel } from "flowbite-react";
export default function Home() {
  return (
    <div className="w-full h-[400px]">
      <Carousel>
        <div className="w-full h-full bg-blue-500 relative">
          <Image
            className="w-full h-full object-cover"
            alt="image 1"
            src={IphoneImg}
          ></Image>
          <button className="absolute bottom-5 left-5 z-10 text-xl p-2 font-bold bg-[#7367F0] text-white rounded-md">
            View More
          </button>
        </div>
        <div className="w-full h-full bg-blue-500 relative">
          <Image
            className="w-full h-full object-cover"
            alt="image 1"
            src={IphoneImg}
          ></Image>
          <button className="absolute bottom-5 left-5 z-10 text-xl p-2 font-bold bg-[#7367F0] text-white rounded-md">
            View More
          </button>
        </div>
      </Carousel>
    </div>
  );
}

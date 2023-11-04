"use client";
import Image from "next/image";
import profileImg from "../public/images/profile.png";
import IphoneImg from "../public/images/iphone.webp";
import { Button, Carousel, Rating } from "flowbite-react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="w-full h-[400px] mb-4">
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
          <div className="w-full h-full bg-blue-500 relative">
            <Image
              className="w-full h-full object-cover"
              alt="image 1"
              src={profileImg}
            ></Image>
            <button className="absolute bottom-5 left-5 z-10 text-xl p-2 font-bold bg-[#7367F0] text-white rounded-md">
              View More
            </button>
          </div>
        </Carousel>
      </div>
      <div>
        <h2 className="font-bold text-xl md:text-2xl">Best Products</h2>
        <div className="w-[155px] bg-[#25293C] rounded-md relative md:w-[200px] md:h-full">
          <div className="w-full h-[130px] overflow-hidden rounded-tl-md rounded-tr-md mb-1">
            <Image
              src="/images/profile.png"
              alt="Product Image"
              width={500}
              height={10}
              className="object-cover"
            ></Image>
          </div>
          <div className="p-1 flex flex-col gap-2 h-full">
            <div className="flex flex-col">
              <div className="text-white text-[12px] md:text-[22px]">
                Iphone 12
              </div>
              <div className="text-gray-500 text-[10px] md:text-[12px]">
                Apple
              </div>
            </div>
            <Rating>
              <Rating.Star />
              <p className="text-[10px] text-white md:text-[12px]">4.95</p>
              <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
              <a
                className="text-[10px] font-medium text-white underline hover:no-underline dark:text-white"
                href="#"
              >
                <p>73 reviews</p>
              </a>
            </Rating>
            <div className="text-[12px] text-white md:text-[20px]">$299</div>
          </div>
          <Link href="/product/iphone-12">
            <Button className="sticky bottom-0 left-0 text-[10px] w-full h-[25px] rounded-md rounded-tl-none rounded-tr-none bg-[#7367F0] enabled:hover:bg-[#7367F0] focus:ring-0 border-none focus:bg-[#7367F0] outline-none">
              Add To Cart
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

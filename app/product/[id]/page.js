"use client";

import Image from "next/image";
import IphoneImg from "@/public/images/iphone.webp";
import { Button, Carousel, Rating, Table } from "flowbite-react";

export default function Product({ params }) {
  console.log(params.id);
  return (
    <div className="grid gap-2">
      <Carousel className="h-[250px] rounded-none">
        <div className="w-full h-full bg-blue-500 relative rounded-none">
          <Image
            className="w-full h-full object-cover rounded-none"
            alt="image 1"
            src={IphoneImg}
          ></Image>
        </div>
        <div className="w-full h-full bg-blue-500 relative">
          <Image
            className="w-full h-full object-cover"
            alt="image 1"
            src={IphoneImg}
          ></Image>
        </div>
      </Carousel>
      <div>
        <h1 className="font-bold text-2xl">Iphone 12</h1>
        <div className="text-gray-500 text-[12px]">Apple</div>
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            4.95 out of 5
          </p>
        </Rating>
        <div>
          <h1 className="font-bold text-xl mt-3">Colors</h1>
          <div className="flex gap-2">
            <div className="bg-white shadow-8xl p-2 w-20 rounded-md grid grid-cols-2 items-center">
              <div className="rounded-full bg-red-500 w-5 h-5 "></div>
              <h4 className="text-black font-bold">Red</h4>
            </div>
            <div className="bg-white shadow-8xl p-2 w-20 rounded-md grid grid-cols-2 items-center">
              <div className="rounded-full bg-blue-500 w-5 h-5 "></div>
              <h4 className="text-black font-bold">Blue</h4>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-xl mt-3">Product Information</h1>
      <div className="w-full h-full overflow-auto shadow-2xl ">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Capability</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                RAM
              </Table.Cell>
              <Table.Cell>15GB</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Storage
              </Table.Cell>
              <Table.Cell>126GB</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-[#7367F0] p-2 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-white">$499</span>
          <span className="text-[#ADFF86] font-bold">1 Day Cargo</span>
        </div>
        <Button className="bg-[#25293C] focus:ring-0 enabled:focus:ring-0 focus:bg-[#25293C] enabled:hover:bg-[#25293C]">
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

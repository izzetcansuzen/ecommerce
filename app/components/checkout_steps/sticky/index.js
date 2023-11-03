import { Button } from "flowbite-react";

export default function Sticky() {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-[#7367F0] p-2 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-white">$499</span>
        <span className="text-[#ADFF86] font-bold">1 Day Cargo</span>
      </div>
      <Button className="bg-[#25293C] focus:ring-0 enabled:focus:ring-0 focus:bg-[#25293C] enabled:hover:bg-[#25293C]">
        Checkout
      </Button>
    </div>
  );
}

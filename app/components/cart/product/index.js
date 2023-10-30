import Image from "next/image";
import ProductImage from "@/public/images/profile.png";

export default function Product() {
  return (
    <div className="mt-5">
      <div>
        <div className="w-full rounded-md grid grid-cols-[5rem_1fr] gap-4">
          <div className="w-20">
            <Image
              src={ProductImage}
              alt="Product Image"
              className="rounded-md"
            ></Image>
          </div>
          <div className="flex gap-20">
            <div className="grid">
              <h2 className="font-bold text-2xl">Iphone 12</h2>
              <span className="text-xs">Apple</span>
              <div className="bg-white shadow-8xl p-2 w-20 rounded-md grid grid-cols-2 items-center">
                <div className="rounded-full bg-red-500 w-5 h-5 "></div>
                <h4 className="text-black font-bold">Red</h4>
              </div>
            </div>
            <div className="font-bold text-2xl self-center">$499</div>
          </div>
        </div>
      </div>
    </div>
  );
}

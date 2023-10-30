import {
  MdOutlineLocalShipping,
  MdOutlinePayments,
  MdOutlineShoppingCart,
} from "react-icons/md";
export default function Progressbar({ step }) {
  return (
    <div className="grid grid-cols-[1fr_1fr_40px]">
      <div className="relative">
        <div
          className={`w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center before:w-full before:h-2 before:rounded before:absolute before:left-5 before:bottom-[30%] before:transform before:translate-y-[-50%] before:-z-10 ${
            step === "1" || step === "2" || step === "3"
              ? "before:bg-blue-500"
              : "before:bg-gray-300"
          }`}
        >
          <MdOutlineShoppingCart size={20} color="white" />
        </div>
      </div>
      <div className="relative">
        <div
          className={`w-10 h-10  rounded-full flex justify-center items-center before:w-full before:h-2 before:rounded before:absolute before:left-5 before:bottom-[30%] before:transform before:translate-y-[-50%] before:-z-10 ${
            step === "2" || step === "3"
              ? "before:bg-blue-500 bg-blue-500"
              : "before:bg-gray-500 bg-gray-500"
          }`}
        >
          <MdOutlineLocalShipping size={20} color="white" />
        </div>
      </div>
      <div className="relative">
        <div
          className={`w-10 h-10 rounded-full flex justify-center items-center ${
            step === "3" ? "bg-blue-500" : "bg-gray-500"
          }`}
        >
          <MdOutlinePayments size={20} color="white" />
        </div>
      </div>
    </div>
  );
}

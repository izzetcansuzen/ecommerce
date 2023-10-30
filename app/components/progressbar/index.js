export default function Progressbar({ step }) {
  return (
    <div className="grid grid-cols-[1fr_1fr_40px]">
      <div className="relative">
        <div
          className={`w-10 h-10 bg-gray-200 rounded-full before:w-full before:h-2 before:rounded before:absolute before:left-5 before:bottom-[30%] before:transform before:translate-y-[-50%] before:-z-10 ${
            step === "1" || step === "2"
              ? "before:bg-blue-500"
              : "before:bg-gray-300"
          }`}
        ></div>
      </div>
      <div className="relative">
        <div
          className={`w-10 h-10 bg-gray-200 rounded-full before:w-full before:h-2 before:rounded before:absolute before:left-5 before:bottom-[30%] before:transform before:translate-y-[-50%] before:-z-10 ${
            step === "2" ? "before:bg-blue-500" : "before:bg-gray-300"
          }`}
        ></div>
      </div>
      <div className="relative">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}

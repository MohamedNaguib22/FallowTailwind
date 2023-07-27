import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Acc = (props) => {
  const [acr, SetAcr] = useState(false);
  const handelAcr = () => {
    SetAcr(!acr);
  };
  return (
    <div
      onClick={handelAcr}
      className=" border-b border-solid border-black  w-full lg:w-[80%] max-w-full mb-5"
    >
      <div className="flex justify-between items-center  ">
        <h1
          className={`flex items-center transition-all duration-[0.3s] hover:text-blue-500 cursor-pointer text-[24px] font-medium ${
            acr ? "text-blue-500" : "text-black"
          }`}
        >
          <span
            className={`mr-[20px]  font-medium text-[25px] transition-all duration-[0.3s] pl-[2px] flex justify-center items-center w-[45px] rounded-full h-[45px] ${
              acr ? "text-white bg-black" : "text-black bg-blue-100"
            }`}
          >
            {props.num}
          </span>
          {props.head}
        </h1>
        <FaChevronDown
          className={`cursor-pointer mr-20  transition-all duration-[0.3s] text-black font-medium ${
            acr ? "rotate-[0deg]" : "rotate-[-90deg]"
          } ${acr ? "rotate-[0deg]" : "rotate-[-90deg]"}`}
          size={16}
        />
      </div>
      <p
        className={` overflow-hidden  mt-[25px] transition-all duration-[0.3s] text-black text-[18px] font-medium px-5 border-t  border-black/50 ${
          acr ? "max-h-auto opacity-[1] py-7" : "max-h-0 opacity-0"
        }`}
      >
        {props.Phead}
      </p>
    </div>
  );
};

export default Acc;

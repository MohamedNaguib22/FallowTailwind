import { FaLongArrowAltRight } from "react-icons/fa";
import Btn from "../../../Data/Btn/Btn";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Skills = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div
      className="Skills bg-cover bg-no-repeat  h-auto py-[105px] bg-[center_center]"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:ml-[130px] gap-[20px] lg:gap-[60px] lg:text-start text-center justify-between items-center">
          <div className="text-white font-bold text-[40px] w-full lg:w-[60%]">
            <h1>Hire Me As A Product Design Great Skills Elite.</h1>
          </div>
          <div className="flex flex-col gap-[50px] text-white font-semibold">
            <p className="text-[30px]">
              I am product designer, who are excited about unique ideas and
              help.
            </p>
            <Btn>
              <span className="text-[18px] font-medium ">D</span>
              <span className="text-[18px] font-medium ">o</span>
              <span className="text-[18px] font-medium ">w</span>
              <span className="text-[18px] font-medium ">n</span>
              <span className="text-[18px] font-medium ">l</span>
              <span className="text-[18px] font-medium ">o </span>
              <span className="text-[18px] font-medium ">a</span>
              <span className="text-[18px] font-medium ">d</span>
              <span className="text-[18px] font-medium "> C</span>
              <span className="text-[18px] font-medium ">V</span>
              <span>
                <FaLongArrowAltRight
                  size={20}
                  className="inline-block mt-[-4px] ml-2"
                />
              </span>
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

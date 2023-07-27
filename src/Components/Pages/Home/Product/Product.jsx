import HeroProduct from "../../../../assets/img/Fallow02.webp";
import LogoPro from "../../../../assets/img/Fallow11.png";
import Fallow10 from "../../../../assets/img/Fallow10.png";
import Vector from "../../../../assets/img/Vector-6-1.png";
import Vector2 from "../../../../assets/img/Vector-2999.png";
import { FaBehance, FaGithub, FaLinkedinIn, FaSkype } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
const Product = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="ProductBg bg-cover bg-no-repeat w-full h0auto pb-[80px]  mt-1">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 pt-[100px] gap-[80px]">
          <div
            className="col-span-2 relative"
            data-aos-duration="1500"
            data-aos="fade-right"
          >
            <img src={HeroProduct} />
            <img
              src={Fallow10}
              className="absolute top-[32%] left-[70%] w-[130px] lg:w-[180px] animate-[moveRight_3s_ease-in-out_infinite] "
            />
            <div className="absolute bg-white p-[18px] flex justify-between gap-2 items-center w-[270px] h-[80px] bottom-[2%] left-[54%] translate-x-[-50%] rounded-lg">
              <div className="w-[50px] h-[50px] my-auto bg-blue-200 flex justify-center items-center rounded-full hover:bg-blue-600 group transition-all duration-[0.3s]">
                <FaSkype
                  size={25}
                  className="text-blue-600 transition-all duration-[0.3s] group-hover:text-white"
                />
              </div>
              <div className="w-[50px] h-[50px] my-auto bg-blue-200 flex justify-center items-center rounded-full hover:bg-blue-600 group transition-all duration-[0.3s]">
                <FaLinkedinIn
                  size={25}
                  className="text-blue-600 transition-all duration-[0.3s] group-hover:text-white"
                />
              </div>
              <div className="w-[50px] h-[50px] my-auto bg-blue-200 flex justify-center items-center rounded-full hover:bg-blue-600 group transition-all duration-[0.3s]">
                <FaBehance
                  size={25}
                  className="text-blue-600 transition-all duration-[0.3s] group-hover:text-white"
                />
              </div>
              <div className="w-[50px] h-[50px] my-auto bg-blue-200 flex justify-center items-center rounded-full hover:bg-blue-600 group transition-all duration-[0.3s]">
                <FaGithub
                  size={25}
                  className="text-blue-600 transition-all duration-[0.3s] group-hover:text-white"
                />
              </div>
            </div>
          </div>
          <div
            className="text-center lg:text-start col-span-2 lg:mt-[0] mt-[-70px]"
            data-aos-duration="1500"
            data-aos="fade-left"
          >
            <h1 className="text-black text-[26px] lg:text-[53px] font-bold mb-7 relative z-10">
              My Journey As A Product Designer
              <img
                className="absolute right-[3%] top-[3%] lg:block hidden z-[-1]"
                src={Vector}
              />
              <img
                className="absolute right-[3%] top-[70%] lg:hidden block z-[-1] px-16"
                src={Vector2}
              />
            </h1>
            <p className="text-[16px] font-medium w-full lg:w-[80%] mb-7">
              Hello there! My name is Robert Elisc. I am a web designer &
              developer, and I’m very passionate and dedicated to my work. With
              20 years experience as a professional a graphic designer,
            </p>
            <div className="px-2 lg:px-0">
              <div className="relative">
                <div className="text-base font-medium text-black mb-2 text-[20px]">
                  JavaScript
                </div>
                <div className="text-base font-medium text-black mb-2 text-[20px] absolute top-0 left-[68%]">
                  70%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 shadow-lg">
                <div
                  className="bg-black h-1.5 rounded-full"
                  style={{ width: "70%" }}
                  
                />
              </div>
            </div>
            <div className="px-2 lg:px-0">
              <div className="relative">
                <div className="text-base font-medium text-black mb-2 text-[20px]">
                  Css
                </div>
                <div className="text-base font-medium text-black mb-2 text-[20px] absolute top-0 left-[93%]">
                  95%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 shadow-lg">
                <div
                  className="bg-black h-1.5 rounded-full"
                  style={{ width: "95%" }}
                />
              </div>
            </div>
            <div className="px-2 lg:px-0 mb-[50px]">
              <div className="relative">
                <div className="text-base font-medium text-black mb-2 text-[20px]">
                  React
                </div>
                <div className="text-base font-medium text-black mb-2 text-[20px] absolute top-0 left-[83%]">
                  85%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 shadow-lg">
                <div
                  className="bg-black h-1.5 rounded-full"
                  style={{ width: "70%" }}
                />
              </div>
            </div>
            <div className="mb-5 flex justify-center items-center lg:items-start lg:justify-start">
              <img src={LogoPro} />
            </div>
            <h1 className="text-black font-medium text-[18px]">
              CEO & Founder of QuomodoSoft
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

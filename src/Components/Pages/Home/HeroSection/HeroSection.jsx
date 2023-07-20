import { FaLongArrowAltRight } from "react-icons/fa";
import { BsFillTriangleFill } from "react-icons/bs";
import Hero from "../../../../assets/img/Fallow06.webp";
import Line from "../../../../assets/img/Vector-2999.png";
import Hand from "../../../../assets/img/Fallow04.png";
import Fallow05 from "../../../../assets/img/Fallow05.png";
import Fallow07 from "../../../../assets/img/Fallow07.png";
import Fallow08 from "../../../../assets/img/Fallow08.png";
import { FaPlus } from "react-icons/fa";
import "../../../../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [pop, setPop] = useState(false);
  const handelPop = (e) => {
    setPop(!pop);
    e.target.preventdefault();
  };
  return (
    <>
      <div className="HeroSection lg:h-screen relative bg-cover lg:pt-[150px] pt-[150px] sm:pt-[80px] h-[110vh] overflow-hidden">
        <div className="container">
          <div className=" h-full lg:grid lg:grid-cols-2 items-center ">
            <div
              className="hidden  lg:flex gap-8 flex-col"
              data-aos-duration="1500"
              data-aos="fade-right"
            >
              <h1 className="text-black text-[64px] font-bold relative z-10">
                <img
                  className="animate-[moveRight_3s_ease-in-out_infinite] inline absolute xl:right-[38%] xl:top-[9%] 2xl:right-[44%] 2xl:top-[9%] right-[28%] top-[7%]"
                  src={Hand}
                />
                Hey, I am <br />
                Mohamed Naguib <br />
                Web Developer
                <img src={Line} alt="/" className="absolute top-[90%] z-[-1]" />
              </h1>
              <p className="font-[400] w-[70%] text-[24px] leading-9">
                Agency work with top rated talented people provide qulaity
                services.
              </p>
              <div className="flex gap-8 items-center relative">
                <img
                  src={Fallow05}
                  className="absolute left-[-30%] top-[-15px] animate-[moveRight_3s_ease-in-out_infinite]"
                />
                <button>
                  <a
                    href="/#"
                    className="text-white bg-blue-600 py-[16px] px-[26px] rounded-lg "
                  >
                    <span className="text-[18px] font-medium ">H</span>
                    <span className="text-[18px] font-medium ">i</span>
                    <span className="text-[18px] font-medium ">r</span>
                    <span className="text-[18px] font-medium ">e</span>
                    <span className="text-[18px] font-medium "> M</span>
                    <span className="text-[18px] font-medium ">e </span>
                    <span>
                      <FaLongArrowAltRight size={20} className="inline" />
                    </span>
                  </a>
                </button>
                <button onClick={() => handelPop()}>
                  <div className="flex items-center gap-5">
                    <div className=" border-[1px] rounded-full border-blue-400 w-[50px] h-[50px] relative">
                      <BsFillTriangleFill
                        className="text-blue-600 rotate-[30deg] absolute top-2 left-3 "
                        size={25}
                      />
                    </div>
                    <div>
                      <p className="text-black text-[18px] font-[500] ">
                        Watch Video
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div
              className="relative"
              data-aos-duration="1500"
              data-aos="fade-left"
            >
              <img src={Hero} alt="/" className="max-w-full h-auto Hero " />
              <img
                className="absolute top-[58%] left-[9%]"
                src={Fallow07}
                alt="/"
              />
              <img
                className="absolute bottom-[-0%] right-[10%] animate-[moveRight_3s_ease-in-out_infinite]"
                src={Fallow08}
                alt="/"
              />
            </div>
            <div
              className="text-center flex flex-col gap-3 justify-center items-center lg:hidden"
              data-aos-duration="1500"
              data-aos="fade-right"
            >
              <h1 className="text-black text-[35px] font-bold relative z-10">
                Hey, I am <br />{" "}
                <img
                  className="inline absolute right-[0%] top-[0%] animate-[moveRight_3s_ease-in-out_infinite]"
                  src={Hand}
                />
                Mohamed Naguib <br />
                Web Developer
                <img src={Line} alt="/" className="absolute top-[90%] z-[-1]" />
              </h1>
              <p className="font-[400] w-[70%] text-[20px] leading-9">
                Agency work with top rated talented people provide qulaity
                services.
              </p>
              <div className="flex gap-8 items-center relative">
                <img
                  src={Fallow05}
                  className="absolute left-[-30%] top-[-15px] w-[100px] animate-[moveRight_3s_ease-in-out_infinite]"
                />
                <button>
                  <a
                    href="/#"
                    className="text-white bg-blue-600 py-[16px] px-[26px] rounded-lg "
                  >
                    <span className="text-[18px] font-medium ">H</span>
                    <span className="text-[18px] font-medium ">i</span>
                    <span className="text-[18px] font-medium ">r</span>
                    <span className="text-[18px] font-medium ">e</span>
                    <span className="text-[18px] font-medium "> M</span>
                    <span className="text-[18px] font-medium ">e </span>
                    <span>
                      <FaLongArrowAltRight size={20} className="inline" />
                    </span>
                  </a>
                </button>
                <button>
                  <a href="/#">
                    <div className="flex items-center gap-5">
                      <div className=" border-[1px] rounded-full border-blue-400 w-[50px] h-[50px] relative">
                        <BsFillTriangleFill
                          className="text-blue-600 rotate-[30deg] absolute top-2 left-3 "
                          size={25}
                        />
                      </div>
                      <div>
                        <p className="text-black text-[18px] font-[500] ">
                          Watch Video
                        </p>
                      </div>
                    </div>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`transition-all  duration-[0.s] overflow-hidden ${
          pop ? " opacity-[1] visible " : " opacity-0 invisible"
        }`}
      >
        <FaPlus
          className="rotate-45 text-blue-800 fixed top-[19%] left-[78%] z-[558] cursor-pointer"
          size={36}
          onClick={() => handelPop()}
        />
        <iframe
          className="fixed translate-y-[-50%] z-[555] w-[900px] h-[500px] top-[50%] left-[50%] translate-x-[-50%] max-w-[90%] "
          src="https://www.youtube.com/embed/AydRIuLy9FU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="fixed top-0 left-0 w-full min-h-screen z-[554] bg-black/50 overflow-hidden"></div>
      </div>
    </>
  );
};

export default HeroSection;

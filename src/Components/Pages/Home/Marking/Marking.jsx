import { FaCheck, FaLongArrowAltRight } from "react-icons/fa";
import Vector2 from "../../../../assets/img/download.png";
import DataNum from "../../../Data/CardNum/DataNum";
import { CardNum } from "../../../Data/CardNum";
const Marking = () => {
  return (
    <section className="bg-gray-100/50">
      <div className="MarkingSection bg-cover w-full min-h-[630px] bg-center"></div>
      <div className="container ">
        <div className=" py-[40px]  px-[65px]  h-[690px] max-w-[1170px] mx-auto  w-[full] bg-cover MarkingBg  mt-[-325px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
            <div className="text-center lg:text-start">
              <h1 className="text-black  text-[40px] xl:text-[53px] font-bold mb-7 relative z-10">
                Marking Significant Achievements
                <img
                  className="absolute lg:left-[30%] lg:top-[38%] top-[40%] left-[20%] w-[60%] lg:w-[80%] z-[-1] px-16"
                  src={Vector2}
                />
              </h1>
              <p className="text-[18px] mb-[50px] font-medium text-gray-500">
                There are many variations of passages of Ipsum available,
                majority have suffered.We put your ideas and thus your wishes
              </p>
              <p className="text-black font-medium mb-[20px] text-[18px]">
                {" "}
                <FaCheck
                  size={20}
                  className="inline text-blue-600 mr-[10px]"
                />{" "}
                Suspe Ndisse Suscipit Sagittis Leo.
              </p>
              <p className="text-black font-medium mb-[20px] text-[18px]">
                {" "}
                <FaCheck
                  size={20}
                  className="inline text-blue-600 mr-[10px]"
                />{" "}
                Entum Estibulum Dignissim Posuere.
              </p>
              <p className="text-black font-medium mb-[50px] text-[18px]">
                {" "}
                <FaCheck
                  size={20}
                  className="inline text-blue-600 mr-[10px]"
                />{" "}
                Rntum Stibulum Pignissim In The Mosuere.
              </p>
              <button >
                <a
                  href="/#"
                  className="text-white bg-blue-600 py-[16px] px-[26px] rounded-lg ">
                  <span className="text-[18px] font-medium ">C</span>
                  <span className="text-[18px] font-medium ">o</span>
                  <span className="text-[18px] font-medium ">n</span>
                  <span className="text-[18px] font-medium ">s</span>
                  <span className="text-[18px] font-medium ">u</span>
                  <span className="text-[18px] font-medium ">l</span>
                  <span className="text-[18px] font-medium ">t</span>
                  <span className="text-[18px] font-medium ">a</span>
                  <span className="text-[18px] font-medium ">t</span>
                  <span className="text-[18px] font-medium ">i</span>
                  <span className="text-[18px] font-medium ">o</span>
                  <span className="text-[18px] font-medium ">n</span>
                  <FaLongArrowAltRight size={20} className="inline" />
                </a>
              </button>
            </div>
            <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 gap-[40px]">
              {DataNum.map((item) => {
                return (
                  <CardNum
                    key={item.id}
                    icon={item.icon}
                    num={item.num}
                    pNum={item.pNum}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marking;

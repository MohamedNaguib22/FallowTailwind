import Vector from "../../../../assets/img/Vector-6-1.png";
import Vector2 from "../../../../assets/img/Vector-2999.png";
import ThreeCard from "../../../Data/DataCard/ThreeCard";
import DataCards from "../../../Data/DataCard/DataCads";
const Exploring = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-[80px] text-center lg:text-start">
          <h1 className="text-black text-[26px] lg:text-[53px] font-bold mb-7 relative z-10">
            Exploring My Design Expertise
            <img
              className="absolute right-[23%] top-[4%] lg:block hidden z-[-1]"
              src={Vector}
            />
            <img
              className="absolute right-[3%] top-[70%] lg:hidden block z-[-1] px-16"
              src={Vector2}
            />
          </h1>
          <p className="text-[20px] font-medium w-full lg:w-[95%] mt-7">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className="px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-[40px] mt-[60px] mb-[100px]">
          {DataCards.map((item) => {
            return (
              <ThreeCard
                key={item.id}
                img={item.img}
                imgTwo={item.imgTwo}
                Hone={item.Hone}
                Pone={item.Pone}
                alt={item.alt}
                link={item.link}
                icon={item.icon}
                className={item.className}
                classNameTwo={item.classNameTwo}
                classNameThree={item.classNameThree}
                classNameFour={item.classNameFour}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exploring;

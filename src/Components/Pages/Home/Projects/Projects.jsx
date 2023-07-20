import Vector from "../../../../assets/img/Vector-6-1.png";
import Vector2 from "../../../../assets/img/Vector-2999.png";
import { Admin, App, DataProjects, Website } from "../../../Data/ProjectsData/DataProjects";
import ProjectsData from "../../../Data/ProjectsData/ProjectsData";
import { useState } from "react";
const Projects = () => {
  const [tab, SetTab] = useState("Tab1");
  const handelTab = (click) => {
    SetTab(click);
  };
  return (
    <div className="container ">
      <div className="flex items-center justify-center text-center mx-auto w-[60%]">
        <h1 className="text-black text-[26px] lg:text-[53px] font-bold mb-7 relative z-10">
          Showcasing My Design Projects And Case Studies
          <img
            className="absolute right-[2%] top-[3%] lg:block hidden z-[-1]"
            src={Vector}
          />
          <img
            className="absolute right-[3%] top-[70%] lg:hidden block z-[-1] px-16"
            src={Vector2}
          />
        </h1>
      </div>
      <ul className="grid grid-cols-2 mb-[30px] lg:grid-cols-4 place-items-center  gap-[40px] w-[60%] mx-auto ">
        <li
          className={` cursor-pointer w-[140px] rounded-lg text-[20px] font-medium h-[50px] flex justify-center items-center ${
            tab === "Tab1"
              ? " bg-blue-600 text-white"
              : "bg-white border-2 border-black text-black hover:bg-blue-600 hover:text-white hover:border-none transition-all duration-[0.6s]"
          }`}
          onClick={() => handelTab("Tab1")}
        >
          All
        </li>
        <li
          onClick={() => handelTab("Tab2")}
          className={`cursor-pointer transition-all duration-[0.6s]   w-[140px] rounded-lg text-[20px] font-medium h-[50px] flex justify-center items-center  ${
            tab === "Tab2"
              ? "bg-blue-600 text-white"
              : " bg-white border-2 border-black text-black hover:bg-blue-600 hover:text-white hover:border-none"
          }`}
        >
          Website
        </li>
        <li
          onClick={() => handelTab("Tab3")}
          className={`cursor-pointer transition-all duration-[0.6s]   w-[140px] rounded-lg text-[20px] font-medium h-[50px] flex justify-center items-center  ${
            tab === "Tab3"
              ? "bg-blue-600 text-white"
              : " bg-white border-2 border-black text-black hover:bg-blue-600 hover:text-white hover:border-none"
          }`}
        >
          App
        </li>
        <li
          onClick={() => handelTab("Tab4")}
          className={`cursor-pointer transition-all duration-[0.6s]   w-[140px] rounded-lg text-[20px] font-medium h-[50px] flex justify-center items-center  ${
            tab === "Tab4"
              ? "bg-blue-600 text-white"
              : " bg-white border-2 border-black text-black hover:bg-blue-600 hover:text-white hover:border-none"
          }`}
        >
          Admin
        </li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[30px]  lg:px-[120px] lg:grid-cols-3 max-w-full">
        {tab === "Tab4"
          ? Admin.map((item) => {
              return (
                <ProjectsData
                  key={item.id}
                  img={item.img}
                  head={item.head}
                  Phead={item.Phead}
                  Btn={item.Btn}
                />
              );
            })
          : tab === "Tab3"
          ? App.map((item) => {
              return (
                <ProjectsData
                  key={item.id}
                  img={item.img}
                  head={item.head}
                  Phead={item.Phead}
                  Btn={item.Btn}
                />
              );
            })
          : tab === "Tab2"
          ? Website.map((item) => {
              return (
                <ProjectsData
                  key={item.id}
                  img={item.img}
                  head={item.head}
                  Phead={item.Phead}
                  Btn={item.Btn}
                />
              );
            })
          : DataProjects.map((item) => {
              return (
                <ProjectsData
                  key={item.id}
                  img={item.img}
                  head={item.head}
                  Phead={item.Phead}
                  Btn={item.Btn}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Projects;

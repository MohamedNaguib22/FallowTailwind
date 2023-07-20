const ProjectsData = (props) => {
  return (
    <div
      data-aos-easing="ease-out-cubic"
      data-aos="zoom-in"
      data-aos-duration="500"
      className="group relative overflow-hidden transition-all before:duration-[0.3s] w-full rounded-lg hover:before:opacity-[1]  before:opacity-0  before:content-[''] before:absolute before:bg-black/80 before:w-[100%]  before:h-full  "
    >
      <img src={props.img} className=" w-full h-auto" alt="Projects" />
      <h1 className="absolute top-[50%] ease-in-out left-[50%] group-hover:top-[30%] w-full text-center transition-all opacity-0 group-hover:opacity-[1] duration-[0.8s] translate-x-[-50%] text-white text-[26px] font-medium ">
        {props.head}
      </h1>
      <h1 className="  absolute top-[50%] ease-in-out left-[50%] group-hover:top-[45%] w-fit text-center transition-all opacity-0 group-hover:opacity-[1] duration-[0.8s] translate-x-[-50%] text-white text-[26px] font-medium ">
        {props.Phead}
      </h1>
      <button className="absolute top-[100%] ease-in-out left-[50%] group-hover:top-[65%]  text-center transition-all opacity-0 group-hover:opacity-[1] duration-[0.8s] translate-x-[-50%] text-white text-[20px] font-medium border-2 border-[#daed1a] w-[160px] hover:border-none hover:bg-[#919c15] hover:text-white rounded-lg h-[60px] ">
        {props.Btn}
      </button>
    </div>
  );
};

export default ProjectsData;

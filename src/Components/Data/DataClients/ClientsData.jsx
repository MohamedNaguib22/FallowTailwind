const ClientsData = (props) => {
  return (
    <div className="bg-white max-w-full w-[620px] rounded-md shadow-sm border border-gray-100 py-[30px] px-[40px] ">
      <div className="flex gap-1 lg:gap-3 text-[22px] text-yellow-400 mb-6">
        <span>{props.icon}</span>
        <span>{props.icon}</span>
        <span>{props.icon}</span>
        <span>{props.icon}</span>
        <span>{props.icon}</span>
      </div>
      <div className="text-gray-500 font-[400] text-[16px] lg:text-[23px] w-full lg:w-[80%] italic mb-9">
        <p>{props.pContent}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div>
            <img src={props.img} alt={props.alt} />
          </div>
          <div>
            <h1 className="text-black font-bold text-[18px] lg:text-[25px]">{props.head}</h1>
            <p className="text-[14px] lg:text-[18px] font-medium text-gray-500">{props.Pead}</p>
          </div>
        </div>
        <div className="lg:pr-[60px] lg:block hidden ">
          <img src={props.imgTwo} alt={props.altTwo} />
        </div>
      </div>
    </div>
  );
};

export default ClientsData;

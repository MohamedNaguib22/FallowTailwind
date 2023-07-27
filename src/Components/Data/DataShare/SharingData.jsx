const SharingData = (props) => {
  return (
    <div className="p-[25px] shadow-sm rounded-lg bg-white overflow-hidden">
      <div className="w-full h-[220px] overflow-hidden object-fit rounded-lg">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="flex gap-[20px] mt-9 mb-9">
        <div className="bg-gray-100 text-gray-500 transition-all duration-[0.3s] hover:text-blue-600 font-medium w-[100px] h-[35px] rounded-lg flex justify-center items-center">
          <a href="/#">{props.link}</a>
        </div>
        <div className="bg-gray-100 text-gray-500 transition-all duration-[0.3s] hover:text-blue-600 font-medium w-[120px] h-[35px] rounded-lg flex justify-center items-center">
          <a href="/#">{props.linkTwo}</a>
        </div>
      </div>
      <div className="text-black font-bold text-[24px] mb-9 transition-all duration-[0.3s] hover:text-blue-600">
        <a href="/#">{props.head}</a>
      </div>
      <div className="text-gray-500 text-[16px] font-semibold gap-3 border-b-2 border-solid border-gray-400 pb-2 w-fit hover:border-blue-600 hover:text-blue-600 transition-all duration-[0.3s]">
        <a
          href="/#"
          className="flex items-center gap-2"
        >
          {props.linkThree}
          <i>{props.icon}</i>
        </a>
      </div>
    </div>
  );
};

export default SharingData;

const CardNum = (props) => {
  return (
    <div className="relative group hover:bg-blue-600 hover:text-white transition-colors duration-[0.3s] rounded-lg border-2  border-gray-200  bg-blue-100 text-center h-fit py-[20px]">
      <div className="mx-auto mt-[-60px] bg-blue-600 w-[80px] h-[80px] rounded-full flex justify-center items-center text-white text-[35px]">{props.icon}</div>
      <h1 className="text-black text-[35px] font-bold group-hover:text-white transition-colors duration-[0.3s]">{props.num}</h1>
      <p className="mb-2 text-black/50 text-[18px] font-medium group-hover:text-white transition-colors duration-[0.3s]">{props.pNum}</p>
    </div>
  );
};

export default CardNum;

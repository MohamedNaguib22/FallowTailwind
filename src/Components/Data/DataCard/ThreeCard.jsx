const ThreeCard = (props) => {
  return (
   
     <div className={`relative mx-auto max-w-full  lg:w-[340px] bg-blue-600 group  px-[30px] py-[15px] text-[18px] shadow-md rounded-lg  ${props.className}`}>
     <img  src={props.imgTwo} className={`absolute transition-all duration-[0.3s] ${props.classNameThree}`  } />
             <div className="w-fit">
               <img className={`w-[80px] bg-center rounded-full p-[15px] mb-[20px] ${props.classNameFour}`} src={props.img}  />
             </div>
             <h1 className="text-[24px] font-[700]  leading-[36px]  mb-[15px] ">
               {props.Hone}
             </h1>
             <p className="font-[500] mb-[25px]">
             {props.Pone}
             </p>
             <a href="/#" className={`flex items-center gap-3 border-b-2 border-solid pb-2 w-fit ${props.classNameTwo}`}>
               {props.link}
               <i>
                 {props.icon}
               </i>
             </a>
     </div>
  )
}

export default ThreeCard
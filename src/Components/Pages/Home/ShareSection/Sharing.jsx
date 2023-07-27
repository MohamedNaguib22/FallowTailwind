import Vector from "../../../../assets/img/Vector-6-1.png";
import { SharingData } from "../../../Data/DataShare";
import { DataSharing } from "../../../Data/DataShare/DataSharing";
const Sharing = () => {
  return (
    <div className="SharingSection bg-cover bg-no-repeat object-cover h-auto py-[100px]">
      <div className="container">
        <h1 className="text-black text-[26px] text-center  lg:w-[70%] w-full mx-auto lg:text-[53px] font-bold mb-7 relative z-10">
          Sharing My Thoughts And Ideas Through Blog Posts
          <img
            className="absolute right-[70%] top-[4%] lg:block hidden z-[-1]"
            src={Vector}
          />
        </h1>
        <div className="grid grid-cols-1 gap-[30px] lg:px-[50px] md:grid-cols-2 lg:grid-cols-3 ">
          {DataSharing.map((item)=>{
            return (
              <div key={item.id} >
                <SharingData
                  {...item}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sharing;

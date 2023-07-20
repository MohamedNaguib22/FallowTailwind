import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
const HeaderNav = () => {
  return (
    <div className="HeaderNav absolute w-full hidden lg:block z-10">
      <div className="flex justify-between items-center container px-2 pt-3 mb-3">
        <div className="flex gap-[25px] ">
          <div className="flex items-center gap-[5px]">
            <FaEnvelope size={13} className="inline text-blue-600" />
            <span className="font-[500] ">help.fallow@gmail.com</span>
          </div>
          <div className="flex items-center gap-[3px]">
            <FaPhoneAlt size={13} className="inline text-blue-600" />
            <span className="font-[500] ">+0100 135 9472</span>
          </div>
        </div>
        <div className="flex gap-[20px] ">
            <FaFacebookF size={15} className="hover:text-blue-600 transition-all delay-100 cursor-pointer" />
            <FaLinkedinIn size={15} className="hover:text-blue-600 transition-all delay-100 cursor-pointer" />
            <FaYoutube size={15} className="hover:text-blue-600 transition-all delay-100 cursor-pointer" />
            <FaTwitter size={15} className="hover:text-blue-600 transition-all delay-100 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;

import {
  FaAngleRight,
  FaBars,
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaLongArrowAltRight,
  FaPhoneAlt,
  FaPlus,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logoNav from "../../../../assets/img/Fallow01.svg";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="Navbar w-full top-2 lg:px-0 px-5 fixed lg:top-[50px] z-[50]">
        <div className="container px-4 p-[16px] rounded-lg bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div>
                <img src={logoNav} alt="/" className="h-full mr-2" />
              </div>
              {/* Navbar */}
              <ul className="hidden lg:flex lg:items-center gap-[35px] ">
                <li className="relative LinkOne" >
                  <a href="/#" className="text-black font-medium text-[18px] ">
                    Home <FaChevronDown className="inline" size={12} />
                    <ul className="Drop absolute top-[56px] left-[-50px] w-[260px] bg-white p-[20px] rounded-lg border-b-blue-600 border-b-[5px] transition-all duration-[0.3s] ">
                      <li className="mb-4 relative group hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px] ">
                        <a href="/">
                          Multipage Home
                          <FaAngleRight className="inline ml-[32px] " />
                          <ul className="absolute top-[20px] right-[-289px] w-[260px] bg-white p-[30px] rounded-lg border-b-blue-600 border-b-[5px] invisible opacity-0 group-hover:opacity-[1] group-hover:visible group-hover:top-[0px] transition-all duration-[0.3s] ">
                            <li className="mb-2  hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px]">
                              <a href="/">
                                Product Designer
                              </a>
                            </li>
                            <li  className="mb-2 hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px]">
                              <a href="/">
                                Ui/Ux Designer
                              </a>
                            </li>
                            <li  className="mb-2 hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px]">
                              <a href="/">
                                Developer
                              </a>
                            </li>
                            <li  className="mb-2 hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px]">
                              <a href="/">
                                Teacher
                              </a>
                            </li>
                            <li  className="mb-2 hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px]">
                              <a href="/">
                                Photographer
                              </a>
                            </li>
                            <li className="hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px]">
                              <a href="/">
                                Lawyer
                              </a>
                            </li>
                          </ul>
                        </a>
                      </li>
                      <li className="group relative hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px]">
                        <a href="/">
                          Onepage Home
                          <FaAngleRight className="inline ml-[40px]" />
                          <ul className="absolute top-[25px] right-[-285px] w-[260px]  bg-white p-[30px] rounded-lg border-b-blue-600 border-b-[5px] invisible opacity-0 group-hover:opacity-[1] group-hover:visible group-hover:top-[10px] transition-all duration-[0.3s]">
                            <li className="mb-2 hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px]">
                              <a href="/">
                                Product Designer
                              </a>
                            </li>
                            <li  className="mb-2 hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px]">
                              <a href="/">
                                Ui/Ux Designer
                              </a>
                            </li>
                            <li  className="hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px]">
                              <a href="/">
                                Developer
                              </a>
                            </li>
                          </ul>
                        </a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-black font-medium text-[18px] ">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-black font-medium text-[18px] ">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-black font-medium text-[18px] ">
                    Pages <FaChevronDown className="inline" size={12} />
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-black font-medium text-[18px] ">
                    Contact Me
                  </a>
                </li>
              </ul>
              {/* Navbar */}
            </div>
            <div className="flex items-center">
              <button
                className="bg-blue-600 p-3 rounded-lg lg:hidden"
                onClick={() => handelNav()}>
                <FaBars size={25} className="text-white" />
              </button>
              <button className="hidden sm:block ml-[70px] ">
                <a
                  href="/#"
                  className="text-white bg-blue-600 py-[16px] px-[26px] rounded-lg ">
                  <span className="text-[18px] font-medium ">L</span>
                  <span className="text-[18px] font-medium ">e</span>
                  <span className="text-[18px] font-medium ">t</span>
                  <span className="text-[18px] font-medium ">`s</span>
                  <span className="text-[18px] font-medium "> T</span>
                  <span className="text-[18px] font-medium ">a</span>
                  <span className="text-[18px] font-medium ">l</span>
                  <span className="text-[18px] font-medium ">k </span>
                  <FaLongArrowAltRight size={20} className="inline" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div
        className={` fixed z-[999] top-0 right-0 lg:right-[-100%] h-screen opacity-[1] lg:opacity-0  overflow-hidden bg-white transition-all delay-[0.5s] ${
          nav ? "w-[380px]" : "w-0"
        } `}>
        <ul className="py-[70px] px-[38px] ">
          <li className="mb-[45px]" onClick={() => handelNav()}>
            <FaPlus className="rotate-45 text-blue-600" size={24} />
          </li>
          <li className="mb-8">
            <img src={logoNav} className="w-[55%] " />
          </li>
          <li className="mb-8">
            <p className="relative text-black text-[18px] before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:bg-gray-300 before:bottom-[-10px]  ">
              Home
            </p>
          </li>
          <li className="mb-8">
            <p className="relative text-black text-[18px] before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:bg-gray-300 before:bottom-[-10px]  ">
              About Me
            </p>
          </li>
          <li className="mb-8">
            <p className="relative text-black text-[18px] before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:bg-gray-300 before:bottom-[-10px]  ">
              Services
            </p>
          </li>
          <li className="mb-8">
            <p className="relative text-black text-[18px] before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:bg-gray-300 before:bottom-[-10px]  ">
              Portfolio
            </p>
          </li>
          <li>
            <p className="relative text-black text-[18px] before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:bg-gray-300 before:bottom-[-10px]  ">
              Contact Me
            </p>
          </li>
        </ul>
        <div className=" px-[38px] ">
          <p className="text-black text-[18px] font-medium mb-5 ">Follow Us</p>
          <div className="flex gap-[20px] mb-6">
            <FaFacebookF
              size={20}
              className="hover:text-blue-600 transition-all delay-100 cursor-pointer"
            />
            <FaLinkedinIn
              size={20}
              className="hover:text-blue-600 transition-all delay-100 cursor-pointer"
            />
            <FaYoutube
              size={20}
              className="hover:text-blue-600 transition-all delay-100 cursor-pointer"
            />
            <FaTwitter
              size={20}
              className="hover:text-blue-600 transition-all delay-100 cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-[10px] mb-6">
            <FaEnvelope size={18} className="inline text-blue-600" />
            <span className="font-[500] ">help.fallow@gmail.com</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaPhoneAlt size={18} className="inline text-blue-600" />
            <span className="font-[500] ">+0100 135 9472</span>
          </div>
        </div>
      </div>
      <div
        className={` fixed z-[998] top-0 right-0 lg:right-[-100%]  h-screen opacity-[1] lg:opacity-0 transition-all overflow-hidden delay-[0.3s] bg-black/50 ${
          nav ? "w-full" : "w-0"
        } `}></div>
    </>
  );
};

export default Navbar;

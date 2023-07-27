import { FaBehance, FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt, FaSkype } from "react-icons/fa";
import Logo from "../../../../assets/img/Fallow42.png";
import { useState } from "react";
const Footer = () => {
  const [link] = useState([
    {
      link: "Home",
      className: "text-blue-600",
    },
    {
      link: "Contact Me",
      className: "hover:text-blue-600 transition-all duration-[0.3s]",
    },
    {
      link: "Pages",
      className: "hover:text-blue-600 transition-all duration-[0.3s]",
    },
    {
      link: "Services",
      className: "hover:text-blue-600 transition-all duration-[0.3s]",
    },
    {
      link: "About Me",
      className: "hover:text-blue-600 transition-all duration-[0.3s]",
    },
  ]);
  const [links] = useState([
    {
      links: "Web Design",
      className: "text-blue-600",
    },
    {
      links: "Brand Strategy",
      className: "hover:text-blue-600 transition-all duration-[0.3s]",
    },
    {
      links: "Product Design",
      className: "hover:text-blue-600 transition-all duration-[0.3s]",
    },
    {
      links: "Web Development",
      className: "hover:text-blue-600 transition-all duration-[0.3s]",
    },
    {
      links: "App Development",
      className: "hover:text-blue-600 transition-all duration-[0.3s]",
    },
  ]);
  return (
    <div className="Footer h-auto bg-no-repeat bg-cover py-[100px] ">
      <div className="container lg:px-[40px]">
        <div className="grid grid-cols-1 gap-[60px] md:grid-cols-2 lg:grid-cols-4 lg:text-start text-center">
          <div className="lg:border-r lg:pr-6 lg:border-gray-600 ">
            <img src={Logo} alt="imgOne" className="mx-auto lg:mx-0" />
            <p className="text-[20px] font-medium text-white my-[30px]">
              We work with a passion of taking challenges and creating new ones
              in advertising sector.
            </p>
            <div className="flex gap-[20px] justify-center items-center lg:justify-start lg:items-center">
              <div className="w-[40px] h-[40px]  my-auto bg-gray-700 flex justify-center group items-center rounded-full hover:bg-blue-600 transition-all duration-[0.3s]">
                <FaSkype
                  size={20}
                  className="text-gray-500  transition-all duration-[0.3s] group-hover:text-white"
                />
              </div>
              <div className="w-[40px] h-[40px] my-auto bg-gray-700 flex justify-center group items-center rounded-full hover:bg-blue-600 transition-all duration-[0.3s]">
                <FaLinkedinIn
                  size={20}
                  className="text-gray-500  transition-all duration-[0.3s] group-hover:text-white"
                />
              </div>
              <div className="w-[40px] h-[40px] my-auto bg-gray-700 flex justify-center group items-center rounded-full hover:bg-blue-600 transition-all duration-[0.3s]">
                <FaBehance
                  size={20}
                  className="text-gray-500  transition-all duration-[0.3s] group-hover:text-white"
                />
              </div>
              <div className="w-[40px] h-[40px] my-auto bg-gray-700 flex justify-center group items-center rounded-full hover:bg-blue-600 transition-all duration-[0.3s]">
                <FaGithub
                  size={20}
                  className="text-gray-500  transition-all duration-[0.3s] group-hover:text-white"
                />
              </div>
            </div>
          </div>
          <div className="lg:border-r w-full mx-auto lg:mx-0 lg:pr-[5px] lg:border-gray-600">
            <h1 className="text-[28px] mb-8 font-bold text-white">Links</h1>
            <ul className="flex flex-col gap-[20px] font-medium text-white text-[18px]">
              {link.map((link) => {
                return (
                  <li key={link}>
                    <a href="/#" className={link.className}>
                      {link.link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:border-r w-full mx-auto lg:mx-0 lg:pr-[5px] lg:border-gray-600">
            <h1 className="text-[28px] mb-8 font-bold text-white">Services</h1>
            <ul className="flex flex-col gap-[20px] font-medium text-white text-[18px]">
              {links.map((links) => {
                return (
                  <li key={links}>
                    <a href="/#" className={links.className}>
                      {links.links}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h1 className="text-[28px] mb-8 font-bold text-white">
              Official info:
            </h1>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <div className="flex items-center mb-[26px] gap-[15px]">
                <FaEnvelope size={24} className="inline text-blue-600" />
                <span className="font-[500] text-[20px] text-gray-200 ">
                  help.fallow@gmail.com
                </span>
              </div>
              <div className="flex items-center mb-[26px] gap-[15px]">
                <FaPhoneAlt size={24} className="inline text-blue-600" />
                <span className="font-[500] text-[20px] text-gray-200 ">
                  +0100 135 9472
                </span>
              </div>
            </div>
            <h1 className="text-[22px] mb-8 font-[400] text-white">
              Subscribe Newsletter
            </h1>
            <form className="flex w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="h-[60px] w-full lg:w-[210px] bg-blue-400/20 pl-[10px] rounded-s-lg border-none outline-none"
              />
              <button className="w-[250px] h-[60px] bg-blue-700 rounded-e-lg text-white font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

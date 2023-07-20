import Svg from "../../../assets/img/Fallow13.svg";
import SvgTwo from "../../../assets/img/Fallow15.svg";
import SvgThree from "../../../assets/img/Fallow16.svg";
import Fallow12 from "../../../assets/img/Fallow12.png";
import { FaArrowRight } from "react-icons/fa";
const DataCards = [
  {
    id: 1,
    img: Svg,
    imgTwo: Fallow12,
    alt: "imgOne",
    Hone: "Brand Strategy & Art Direction",
    Pone: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    link: "Learn More",
    icon: <FaArrowRight />,
    className: "bg-blue-600 text-white",
    classNameTwo: "border-white",
    classNameThree: "absolute bottom-0 right-0 ",
    classNameFour: " bg-[#3C72FB]",
  },
  {
    id: 2,
    img: SvgTwo,
    imgTwo: Fallow12,
    alt: "imgOne",
    Hone: "Website/ App Design UX/ UI Design",
    Pone: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    link: "Learn More",
    icon: <FaArrowRight />,
    className: "bg-white group  text-black hover:bg-blue-600 hover:text-white transition-all duration-[0.3s]",
    classNameTwo: "border-black group-hover:border-white",
    classNameThree: "absolute bottom-12  right-8 group-hover:bottom-0 group-hover:right-0 group-hover:w-[260px] transition-all duration-[0.3s]",
    classNameFour: " bg-[#cad9ff]"
  },
  {
    id: 1,
    img: SvgThree,
    imgTwo: Fallow12,
    alt: "imgOne",
    Hone: "Marketing & Content Creation",
    Pone: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    link: "Learn More",
    icon: <FaArrowRight />,
    className: "bg-white group text-black hover:bg-blue-600 hover:text-white transition-all duration-[0.3s]",
    classNameTwo: "border-black  group-hover:border-white ",
    classNameThree: " absolute bottom-12  right-8 group-hover:bottom-0 group-hover:right-0 group-hover:w-[260px] transition-all duration-[0.3s]",
    classNameFour: " bg-[#cad9ff]",
  },
];
export default DataCards;
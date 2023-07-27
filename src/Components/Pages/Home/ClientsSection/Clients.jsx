import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClientsData } from "../../../Data/DataClients";
import DataClient from "../../../Data/DataClients/DataClients";
const Clients = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div >
      <div className="container xl:px-[50px]">
        <div className="w-full">
          <h1 className="text-blue-600 text-[20px] mb-4 text-center font-medium ">
            CUSTOMER REVIEWS
          </h1>
          <h1 className="text-[25px] mb-[50px] lg:text-[45px] font-bold text-black text-center w-full lg:w-[48%] mx-auto ">
            What Clients And Colleagues Say About My Work
          </h1>
          <Slider {...settings}>
            {DataClient.map((item) => {
              return <ClientsData key={item.id} {...item} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clients;

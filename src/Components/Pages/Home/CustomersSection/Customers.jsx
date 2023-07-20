import { CustomersData } from "../../../Data/DataCustomers";
import { DataCustomers } from "../../../Data/DataCustomers/DataCustomers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Customers = () => {
  var settings = {
    infinite: true,
    speed: 500,
    margin: 10,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div >
      <div className="container px-[40px] lg:px-[160px]">
        <div className="pb-[80px] pt-[100px]">
          <h1 className="text-black mb-[50px] text-center font-medium text-[28px]">
            We Take Care Of More Than 100K Customers
          </h1>
          <Slider {...settings}>
            {DataCustomers.map((item) => {
              return (
                <div key={item.id}>
                  <CustomersData img={item.img} alt={item.alt} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Customers;

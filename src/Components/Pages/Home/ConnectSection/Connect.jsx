import Vector from "../../../../assets/img/Vector-6-1.png";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import Acc from "./Acc";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Connect = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_bq7kbz4",
          "template_qkm5h26",
          form.current,
          "VLqRVlsYae4cM4ONc"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="py-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center  lg:px-[50px] container lg:text-start">
        <div data-aos-duration="1500" data-aos="fade-right">
          <h1 className="text-black text-[26px] text-center lg:text-start lg:text-[53px] font-bold mb-7 relative z-10">
            Let`s Connect And Collaborate
            <img
              className="absolute right-[48%] top-[4%] lg:block hidden z-[-1]"
              src={Vector}
            />
          </h1>
          <div>
            <Acc
              num="01"
              head="Get An Project Overview"
              Phead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna,elementum turpis. interactive and one-to-one "
            />
            <Acc
              num="02"
              head="Task Monitoring At A Glance"
              Phead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna,elementum turpis. interactive and one-to-one "
            />
            <Acc
              num="03"
              head="Weekly Project"
              Phead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna,elementum turpis. interactive and one-to-one "
            />
          </div>
        </div>
        <div data-aos-duration="1500" data-aos="fade-left">
          <div className="flex flex-col Form bg-cover rounded-lg bg-no-repeat object-cover h-auto px-10 py-10">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-[50px]"
            >
              <div className="lg:grid lg:grid-cols-2 block gap-[20px]">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full mb-[45px] lg:mb-0 focus:border border-blue-600 outline-none h-[50px] rounded-lg pl-3 text-[18px]"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full focus:border border-blue-600 outline-none h-[50px] rounded-lg pl-3 text-[18px]"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  className="w-full focus:border border-blue-600 outline-none h-[50px] rounded-lg pl-3 text-[18px]"
                  placeholder="Phone"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  className="w-full focus:border border-blue-600 outline-none h-[180px] rounded-lg pl-3 text-[18px] pt-5"
                  placeholder="Message. . . . . . . . . . . ."
                />
              </div>
              <div className="btn lg:w-[150px] flex justify-center items-center w-full text-white text-[18px] font-bold ">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;

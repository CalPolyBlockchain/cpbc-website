import React from "react";
import { cpbc_logo } from "../../images/index";
import './About.css'

const About = () => {
  return (
    <div  id="top" className="mb-20">
      <div className="relative wedge-is-on h-[453px] md:h-[437px] lg:h-[700px] xl:h-[700px]  w-full ">
        <div className="about_bg w-full h-full"></div>
      </div>

      <div className="flex flex-col container-wide  max-w-xl pb-10 text ">
        <div className="">
          <div id="about" className="flex mb-4">
            <div  className="w-[35%] md:w-[65%] mr-3">
              <img src={cpbc_logo} alt="CP" width={"387px"} />
            </div>
            <div className="flex flex-col justify-center w-max ">
              <div className="w-max text-[18px] font-semibold md:text-[18px] lg:text-[36px] md:ml-10 md:mr-32">
                Blockchain at Cal Poly
              </div>
              <div className="w-max text-[14px] font-light md:mb-5 md:text-[18px] lg:text-[36px] md:ml-10 md:mr-32">
                Education | Research | Development
              </div>
              <div className="hidden-mobile">
                <div className=" text-[12px] font-regular mb-4 md:text-[12px] lg:text-[18px] md:ml-10 md:mr-10 lg:mr-80 text-right">
                  Our education team develops in-house content and sources guest
                  speakers from top protocols, such as Ethereum, Chainlink, The
                  Graph, Celo, Near, DyDx, and more!
                </div>
                <div className=" text-[12px] font-regular md:text-[12px]  lg:text-[18px] md:ml-10 md:mr-10 lg:mr-80 text-right">
                  Topics range from consensus and DeFi primitives, to being able
                  to spin up your own decentralized exchange! We show students
                  and faculty how easy it is to plug into the DeFi ecosystem.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-[12px] font-regular mb-4 hidden-desktop">
          Our education team develops in-house content and sources guest
          speakers from top protocols, such as Ethereum, Chainlink, The Graph,
          Celo, Near, DyDx, and more!
        </div>
        <div className=" text-[12px] font-regular hidden-desktop">
          Topics range from consensus and DeFi primitives, to being able to spin
          up your own decentralized exchange! We show students and faculty how
          easy it is to plug into the DeFi ecosystem.
        </div>
      </div>
      <div className="flex container-wide justify-between md:justify-center md:mx-1 ">
        <button className="text font-bold text-[18px] py-3 px-7  border-2 rounded-md md:mr-5 md:py-2 md:px-4 md:border-1 md:text-[12px] lg:text-[18px] lg:py-3 lg:px-7 ">
          Contact Us
        </button>
        <button className="text font-bold text-[18px] py-3 px-7  border-2 rounded-md md:mr-10 md:py-2 md:px-4 md:border-1 md:text-[12px] lg:text-[18px] lg:py-3 lg:px-7 ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;

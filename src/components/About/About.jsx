import React from "react";
import { cpbc_logo } from "../../images/index";
import './About.css'

const About = () => {
  return (
    <div className="mb-10">
      <div className="relative  wedge-is-on h-[453px] md:h-[437px] lg:h-[700px] xl:h-[700px]  w-full ">
        <div className="about_bg w-full h-full"></div>
      </div>

      <div className="flex flex-col container-wide  max-w-xl pb-10 text ">
        <div className="">
          <div className="flex mb-4">
            <div className="w-3/12 mr-3">
              <img src={cpbc_logo} alt="CP" width={"387px"} />
            </div>
            <div className="flex flex-col justify-center w-max ">
              <div className="w-max text-[18px] font-semibold">
                Blockchain at Cal Poly
              </div>
              <div className="w-max text-[14px] font-light">
                Education | Research | Development
              </div>
            </div>
          </div>
        </div>
        <div className=" text-[12px] font-regular mb-4">
          Our education team develops in-house content and sources guest
          speakers from top protocols, such as Ethereum, Chainlink, The Graph,
          Celo, Near, DyDx, and more!
        </div>
        <div className=" text-[12px] font-regular ">
          Topics range from consensus and DeFi primitives, to being able to spin
          up your own decentralized exchange! We show students and faculty how
          easy it is to plug into the DeFi ecosystem.
        </div>

      </div>
      <div className="flex container-wide justify-between  ">
      <button className="text font-bold text-[18px] py-3 px-7  border-2 rounded-md">Contact Us</button>
      <button className="text font-bold text-[18px] py-3 px-7  border-2 rounded-md">Learn More</button>
      </div>
    </div>
  );
};

export default About;
// translate-y-[130px]  xl:h-[650px] 
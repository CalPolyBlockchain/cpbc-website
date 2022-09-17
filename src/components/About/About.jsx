import React from "react";
import { projectHero, cpbc_logo } from "../../images/index";
import './About.css'

const About = () => {
  return (
    <>
    <div id="theme" className="relative  wedge-is-on h-[453px] md:h-[437px] lg:h-[700px] xl:h-[700px]">
    <img
      className=" absolute object-cover object-center my-44 scale-[2.5] md:scale-[1.0] md:my-0 lg:scale-[1.0] lg:-my-36 xl:scale-70 "
      src={projectHero}
      alt="Evening at Morro Rock"
    />
    </div>
    <div className="container-wide flex"> 
    <div>
        <img src={cpbc_logo} alt="CP" width={"387px"} />
    </div>
    <div className="max-w-xl text">
        <div>Blockchain at Cal Poly</div>
        <div>Education | Research | Development</div>
        <div>Our education team develops in-house content and sources guest speakers from top protocols, such as Ethereum, Chainlink, The Graph, Celo, Near, DyDx, and more!

Topics range from consensus and DeFi primitives, to being able to spin up your own decentralized exchange! We show students and faculty how easy it is to plug into the DeFi ecosystem.</div>
    </div>
        </div>
    </>
  );
};

export default About;
// translate-y-[130px]  xl:h-[650px] 
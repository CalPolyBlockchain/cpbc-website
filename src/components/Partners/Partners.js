import React from "react";
import PartnersItem from "../PartnersItem/PartnersItem";
import { partnersImages} from "../../images";
import './Partners.css'
const Partners = () => {
  const links = ["https://ceng.calpoly.edu/", "https://decrypt.co/", "https://www.calpoly.edu/orfalea-college-of-business"  ]
  return (
    <div class="background h-[800px] wedge-partners pt-[20px]" >
      <div class="container-wide pt-[50px] text-center font-semibold items-center text-med text-[29px] lg:text-[38px] lg:pt-[100px] text-[#FFFFFF]">
        <h2> Our Partners</h2>
        <div class="flex flex-col mt-3 space-y-8 items-center md:space-y-0 md:align-top lg:pt-[75px] lg:align-top md:flex-row md:space-y-0 lg:flex-row">
          {partnersImages.map((element, index) => {
            return <PartnersItem img={element} index={index} link={links[index]} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;

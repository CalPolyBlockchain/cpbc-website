import React from "react";
import PartnersItem from "../PartnersItem/PartnersItem";
import KennedyBG from "../../images/partners/KennedyLibrary_Atrium.jpg";
import { partnersImages } from "../../images";

const Partners = () => {
  return (
    <div>
      <img classname="" src={KennedyBG} alt="Blah"></img>
      <div class="container-wide text-center font-semibold items-center text-med text-[29px] lg:text-[38px] text-[#FFFFFF]">
        <h2> Our Partners</h2>
        <div class="flex flex-col mt-3 space-y-8 md:space-y-0 md:align-top lg:align-top md:flex-row md:space-y-0 lg:flex-row">
          {partnersImages.map((element, index) => {
            return <PartnersItem img={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;

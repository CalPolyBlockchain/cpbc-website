import React from "react";
import SocialCard from "../SocialCard/SocialCard";
import './Socials.css'
import { socials } from "../../data";

const Socials = () => {
  return (
    <div id="theme" className="banner  wedge-is-on-social ">
        <div className="flex flex-row container-mid justify-center">

   
      {socials.map((element) => {
        return <SocialCard data={ element } />;
      })}
           </div>
    </div>
  );
};

export default Socials;

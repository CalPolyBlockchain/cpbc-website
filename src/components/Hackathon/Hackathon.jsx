import React from "react";
import './Hackathon.css'
import { useState, useEffect, useRef } from "react";

const Hackathon = ({data, cascade}) => {
  const { eventName, startDate, endDate, imgUrl, link } = data;
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsAnimating(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const handleMouseEnter = () => {
    setIsHover(true)
  };
  const handleMouseLeave = () => {
    setIsHover(false)
  };
 
  return (
    
    <div id='hacker' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ transform: `translateX(-${cascade}%)` }}>
      <a href={link} target="_blank" rel="noreferrer" className=" flex flex-row text mt-3 mb-3 justify-between  xl:mt-5 xl:mb-5 cursor-pointer">
      <div className="hack-img  w-[75px] md:w-[110px] lg:w-[110px] xl:w-[130px] ">
        <div className="flex relative">
          {isHover && <div className={`animated-div ${isAnimating ? "animating absolute -left-4 h-[75px] md:h-[110px] xl:h-[130px] xl:-left-7 yellow-box" : "absolute -left-4 h-[75px] md:h-[110px] xl:h-[130px] xl:-left-7 yellow-box"}`} ></div>}
          <img className="rounded-md md:rounded-xl lg:rounded-2xl" src={imgUrl} alt=" of stuff" />
        </div>
      </div>
      <div className="flex flex-col  justify-between md:flex-row md:justify-between md:w-10/12">
      <div className="flex text-big justify-end order-last md:items-center hack-name text-[18px] md:text-[22px] lg:text-[32px] md:order-first "> {eventName} </div>
      <div className="flex items-center text-[22px] ">
        <div className="date-box border-1 rounded-md p-2 text-[16px] md:text-[22px] md:p-3 ">
          {startDate} <span> {">"} </span> {endDate}
        </div>
      </div>
      </div>
      </a>
    </div>
  );
};

export default Hackathon;

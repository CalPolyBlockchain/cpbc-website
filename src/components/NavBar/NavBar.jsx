import React from "react";
import { logo } from '../../images/index'
import { FaBeer } from 'react-icons/fa';
const NavBar = ({toggleTheme}) => {


  return (
    <div className="fixed top-0 flex justify-center text-white pt-5 z-10 w-full text-[12px] md:text-[18px]  ">
      <ul className="flex flex-row items-center justify-evenly  container-nar ">
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li><img class="w-[58px] md:w-[80px] lg:w-[93px]"src={logo} alt="Cal Poly Blockchain Logo"/></li>
        <li>TEAM</li>
        <li>GET INVOLVED</li>
        <li><FaBeer onClick={()=> toggleTheme()} /></li>



      </ul>
    </div>
  );
};

export default NavBar;

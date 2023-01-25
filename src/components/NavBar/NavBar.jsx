import React, { useEffect, useState } from "react";
import { logo } from '../../images/index'
import { FaBeer } from 'react-icons/fa';
import './NavBar.css'

const NavBar = ({toggleTheme}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleMouseEnter = (e) => {
    e.target.classList.add('texter')
    setIsHover(true)
  };
  const handleMouseLeave = (e) => {
    e.target.classList.remove('texter')
    setIsHover(false)
  };

  const link_style = {
    color: isHover ? "#fff" : "#000"
  };
  return (
    <div  id="navbar"  className={scrollY > 600 ? "navbarOn fixed top-0 flex justify-center text-white pt-5 z-10 w-full text-[12px] md:text-[18px]" : "navbarOff fixed top-0 flex justify-center text-white pt-5 z-10 w-full text-[12px] md:text-[18px]"}>
      <ul className="flex flex-row items-center justify-evenly  container-nar ">
        <li><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#about">ABOUT</a></li>
        <li><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#projects">PROJECTS</a></li>
        <li><a  href="#top"><img className={scrollY > 600 ? "calpolylogo w-[58px] md:w-[70px] lg:w-[73px]" : "calpolylogo w-[58px] md:w-[80px] lg:w-[93px]"} src={logo} alt="Cal Poly Blockchain Logo"/></a></li>
        <li><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#team">TEAM</a></li>
        <li><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#join">GET INVOLVED</a></li>
        <li><FaBeer onClick={()=> toggleTheme()} /></li>



      </ul>
    </div>
  );
};

export default NavBar;

import React, { useEffect, useState } from 'react';
import { logo } from '../../data/index';
import './NavBar.css';

const NavBar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='navbar'
      className={
        scrollY > 600
          ? 'navbarOn fixed top-0 flex justify-center text-[#FFFBEB] pt-5 z-10 w-full text-[12px] md:text-[18px]'
          : 'navbarOff fixed top-0 flex justify-center text-white pt-5 z-10 w-full text-[12px] md:text-[18px]'
      }
    >
      <div className='flex flex-row container-nav justify-evenly w-full'>
        <div className='flex items-center justify-around w-1/3'>
          <a className='texter' href='#about'>
            ABOUT
          </a>
          <a className='texter' href='#socials'>
            SOCIALS
          </a>
        </div>
        <div className='flex justify-center'>
          <a href='#top'>
            <img
              className={
                scrollY > 600
                  ? 'calpolylogo w-[58px] md:w-[70px] lg:w-[73px]'
                  : 'calpolylogo w-[58px] md:w-[80px] lg:w-[93px]'
              }
              src={logo}
              alt='Cal Poly Blockchain Logo'
            />
          </a>
        </div>
        <div className='flex items-center justify-between w-1/3 '>
          <a className='texter' href='#team'>
            TEAM
          </a>
          <a className='texter' href='#projects'>
            PROJECTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

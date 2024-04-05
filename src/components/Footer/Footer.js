import React, { useState } from 'react';
import './Footer.css';
const Footer = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = (e) => {
    e.target.classList.add('texter');
    setIsHover(true);
  };
  const handleMouseLeave = (e) => {
    e.target.classList.remove('texter');
    setIsHover(false);
  };

  return (
    <div class='container-wide flex flex-col items-left '>
      <div class='font-semibold text-[#FFFBEB] mt-6 -mb-6 text-[14px] pt-5 md:text-[24px] lg:text-[38px] xl:text-[38px] 2xl:text-[42px] text'>
        <h2>
          Have questions? Email us at{' '}
          <a
            className='footer-style'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href='mailto: hello@calpoly.edu'
          >
            calpolyblockchain@gmail.com
          </a>{' '}
        </h2>
      </div>
      <div class='font-light  text-[14px] pt-5 md:text-[16px] mb-11 lg:text-[24px] xl:text-[24px] 2xl:text-[38px] text'>
        <h2>© 2024 CPBC. All Rights Reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;

import React, { useEffect, useRef } from 'react';
import PartnersItem from '../PartnersItem/PartnersItem';
import { partners } from '../../data/index';
import './Partners.css';
const Partners = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      ref.current.style.backgroundPositionY = `${top * 0.7}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='join' className='relative'>
      <div className='partner-style'></div>
      <div
        ref={ref}
        class='partner-background h-[800px] wedge-partners pt-[20px] z-10 relative'
      >
        <div class='container-wide pt-[50px] pb-[10px] text-center font-semibold items-center text-med text-[29px] lg:text-[38px] lg:pt-[100px] text'>
          <h2> Our Partners</h2>
          <div class='flex flex-col mt-3 space-y-8 items-center md:space-y-0 md:align-top lg:pt-[75px] lg:align-top md:flex-row md:space-y-0 lg:flex-row'>
            {partners.map((element, index) => {
              let { img, link } = element;
              return <PartnersItem img={img} index={index} link={link} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

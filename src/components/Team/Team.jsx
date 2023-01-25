import React from 'react'
import TeamImg from '../TeamImg/TeamImg';
import './Team.css'
import { teamImages, teamGroup, teamNames } from "../../images/index";

const Team = () => {
  return (
    <div id='theme' class='banner wedge-team pt-20 pb-[150px]'>
      <div class='container-mid flex flex-col text-med pt-5 pl-5 pr-5 text-[24px]  md:text-[24px] lg:text-[38px] xl:text-[38px] 2xl:text-[42px]'>
        <div className='w-full'>
          <h2>Team</h2>
        </div>
        <div className='flex flex-col pl-2 pr-2 md:flex-col border md:border-2 border-black rounded-2xl'>
          <div
            id='team-images'
            class='flex wrap justify-between md:pt-10 pb-10 md:pl-5 md:pr-5 order-2 md:order-1'
          >
            {teamImages.map((img, index) => {
              return (
                <div className='w-[24%] md:w-[25%] md:p-[20px] p-0'>
                  <img
                    src={img}
                    alt='example'
                    className='square-rounded-image rounded-2xl'
                  />
                  <h2 className='text-center text-[12px] md:text-[18px] font-regular '>{teamNames[index]}</h2>
                </div>
              );
            })}
          </div>
          <div class='flex flex-col md:flex-row pt-2 pb-10 md:pt-10 md:pb-10 order-1 md:order-2 w-full'>
            <div className='w-full md:w-1/2 pl-2 pr-2 md:pl-10 md:pr-0 '>
            <img
              src={teamGroup}
              alt='example'
              className='square-rounded-image rounded-2xl '
            />
            </div>
            <div
              style={{  margin: 'auto' }}
              className='pr-2 pl-2 pt-5 md:pr-10 md:pl-5 w-full md:w-1/2'
            >
              <div className='team-text  text-[12px] font-regular mb-4 md:text-[12px] lg:text-[18px]  text-left pb-10'>
                We are a multidisciplinary student ran organization founded in
                2018 with members from computer science, design, business,
                graduate programs, and more. We believe blockchain will pave the
                way towards a more equitable, transparent, & decentralized
                future.
                <br></br> <br></br> 
                Our students are always looking for new opportunities,
                so please don’t hesitate to reach out!
              </div>
              <div className='flex flex-col md:flex-row md:justify-evenly '>
                <button
                  className='contact-team text-flip font-bold text-[18px] py-3 px-7  border-2 rounded-md  md:py-2 md:px-4 md:border-1 border-black md:text-[12px] lg:text-[18px] lg:py-3 lg:px-7 mb-2 md:mb-0'
                  onClick={() => window.open('google.com')}
                >
                  Contact Us
                </button>
                <button
                  className='contact-team text-flip font-bold text-[18px] py-3 px-7  border-2 rounded-md md:py-2 md:px-4 md:border-1 border-black md:text-[12px] lg:text-[18px] lg:py-3 lg:px-7 '
                  onClick={() => window.open('google.com')}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team
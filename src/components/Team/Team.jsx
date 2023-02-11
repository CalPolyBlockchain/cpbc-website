import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './Team.css';
import { team, teamGroupA, teamGroupB } from '../../data/index';

const Team = () => {
  return (
    <div id='team' class='relative'>
      <div class='absolute bottom-0 w-full h-[200px] team'></div>
      <div
        id='theme'
        class='banner wedge-team pt-[16px] md:pt-[72px] pb-[64px] md:pb-[150px]'
      >
        <div class='container-mid flex flex-col text-med pt-5 pl-5 pr-5 text-[24px]  md:text-[24px] lg:text-[38px] xl:text-[38px] 2xl:text-[42px]'>
          <div className='w-full text-flip'>
            <h2>Team</h2>
          </div>
          <div className='flex flex-col pl-2 pr-2 md:flex-col border-2 md:border-2 border-black rounded-2xl team-bg text-flip'>
            <div
              id='team-images'
              class='flex wrap justify-between md:pt-10 pb-10 md:pl-5 md:pr-5 order-2 md:order-1'
            >
              {team.map((element, index) => {
                let { img, name, link } = element;
                return (
                  <div className='  w-[24%] md:w-[25%] md:p-[10px] p-2'>
                    <a href={link} target='_blank' rel='noreferrer'>
                      <img
                        src={img}
                        alt='example'
                        className='hover-effect square-rounded-image rounded-2xl'
                      />
                      <h2 className='text-center text-[12px] md:text-[18px] pt-2 font-regular '>
                        {name}
                      </h2>
                    </a>
                  </div>
                );
              })}
            </div>
            <div class='flex flex-col md:flex-row pt-2 pb-10 md:pt-10 md:pb-10 order-1 md:order-2 w-full'>
              <div className='w-full md:w-1/2'>

              <div className='w-full md:w-full pl-2 pr-2 md:pl-10 md:pr-0 '>

              <img
                  src={teamGroupB}
                  alt='example'
                  className='square-rounded-image rounded-2xl '
                />
                </div>
                <div className='w-full md:w-full pt-5 pl-2 pr-2 md:pl-10 md:pr-0 '>
                <img
                  src={teamGroupA}
                  alt='example'
                  className='square-rounded-image rounded-2xl '
                />
              </div>
              </div>
              <div
                style={{ margin: 'auto' }}
                className='pr-2 pl-2 pt-5 md:pr-10 md:pl-5 w-full md:w-1/2'
              >
                <div className='team-text  text-[12px] font-regular mb-4 md:text-[12px] lg:text-[18px]  text-left pb-10'>
                  We are a multidisciplinary student ran organization founded in
                  2018 with members from computer science, design, business,
                  graduate programs, and more. We believe blockchain will pave
                  the way towards a more equitable, transparent, & decentralized
                  future.
                  <br></br> <br></br>
                  Our students are always looking for new opportunities, so
                  please don’t hesitate to reach out!
                </div>
                <div className='flex flex-col md:flex-row md:justify-evenly '>
                  <button
                    className='button-dark text-flip font-bold text-[18px] py-3 px-7  border-2 rounded-md  md:py-2 md:px-4 md:border-1 border-black md:text-[12px] lg:text-[18px] lg:py-3 lg:px-7 mb-2 md:mb-0'
                    onClick={() => window.open('https://paragraph.xyz/@polyblockchain')}
                  >
                    Mirror Blog
                  </button>
                  <button
                    className='button-dark text-flip font-bold text-[18px] py-3 px-7  border-2 rounded-md md:py-2 md:px-4 md:border-1 border-black md:text-[12px] lg:text-[18px] lg:py-3 lg:px-7 '
                    onClick={() =>
                      window.open('https://github.com/CalPolyBlockchain')
                    }
                  >
                    <span class='flex flex-wrap items-center justify-center'>
                      <FaGithub class='mr-2' />
                      Github
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

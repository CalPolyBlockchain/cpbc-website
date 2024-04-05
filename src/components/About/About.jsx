import { useState, useRef, useEffect } from 'react';
import {
  cpbc_logo,
  quarter,
  heading,
  dates,
  location,
  learnMoreLink,
} from '../../data/index';
import './About.css';
import '../Modal/Modal.css';
import Modal from '../Modal/Modal';
import ModalContent from '../Modal/ModalContent';
const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(400);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset + 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const screenHeight = window.innerHeight;
  const bgPos =
    scrollY < 650 ? (scrollY / screenHeight) * 100 : (650 / screenHeight) * 100;
  return (
    <div id='top' className='mb-20'>
      {showModal && (
        <Modal>
          <div class='modal-gradient text flex flex-col pl-2 pr-2 md:flex-col md:border-2 border-black rounded-2xl  w-[90%] md:w-1/2 m-auto'>
            <ModalContent setShowModal={setShowModal} />
          </div>
        </Modal>
      )}

      <div className='relative w-[90%] m-auto'>
        <div className='absolute about_text_box border'>
          <div className='weekly_meetings_text text'>
            <p className='mt-2 text-[16px]'>{quarter}</p>

            <p className='text-[20px] font-bold'>{heading}</p>

            <p className='text-[14px]'>{dates}</p>
            <p className='text-[14px]'>{location}</p>
          </div>
        </div>
      </div>
      <div className='relative wedge-is-on h-[453px] md:h-[437px] lg:h-[700px] xl:h-[700px]  w-full overflow-clip'>
        <div
          className='about_bg w-full h-full'
          style={{
            backgroundPosition: `50% ${bgPos}%`,
          }}
        ></div>
      </div>

      <div className='flex flex-col container-wide  max-w-xl pb-10 text '>
        <div className=''>
          <div id='about' className='flex mb-4'>
            <div className='w-[35%] md:w-[65%] mr-3'>
              <img src={cpbc_logo} alt='CP' width={'387px'} />
            </div>
            <div className='flex flex-col justify-center w-max '>
              <div className='w-max text-[18px] font-semibold md:text-[18px] lg:text-[36px] md:ml-10 md:mr-32'>
                Cal Poly Blockchain
              </div>
              <div className='w-max text-[14px] font-light md:mb-5 md:text-[18px] lg:text-[36px] md:ml-10 md:mr-32'>
                Education | Research | Development
              </div>
              <div className='hidden-mobile'>
                <div className=' text-[12px] font-regular mb-4 md:text-[12px] lg:text-[18px] md:ml-10 md:mr-10 lg:mr-80 text-left'>
                  Our education team develops in-house content and sources guest
                  speakers from top protocols, such as Ethereum, Chainlink, The
                  Graph, Celo, Near, DyDx, and more!
                </div>
                <div className=' text-[12px] font-regular md:text-[12px]  lg:text-[18px] md:ml-10 md:mr-10 lg:mr-80 text-left'>
                  Topics range from consensus and DeFi primitives, to being able
                  to spin up your own decentralized exchange! We show students
                  and faculty how easy it is to plug into the DeFi ecosystem.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' text-[12px] font-regular mb-4 hidden-desktop'>
          Our education team develops in-house content and sources guest
          speakers from top protocols, such as Ethereum, Chainlink, The Graph,
          Celo, Near, DyDx, and more!
        </div>
        <div className=' text-[12px] font-regular hidden-desktop'>
          Topics range from consensus and DeFi primitives, to being able to spin
          up your own decentralized exchange! We show students and faculty how
          easy it is to plug into the DeFi ecosystem.
        </div>
      </div>

      <div className=' flex flex-col md:flex-row container-wide justify-between md:justify-center md:mx-1 '>
        <button
          className='contact-us text font-bold text-[18px] py-3 px-7  border-2 rounded-md md:mr-5 md:py-2 md:px-4 md:border-1 md:text-[12px] lg:text-[18px] lg:py-3 lg:px-7 '
          onClick={() => setShowModal(true)}
        >
          Contact Us
        </button>
        <button
          className='contact-us text font-bold text-[18px] mt-3 md:mt-0 py-3 px-7  border-2 rounded-md md:mr-10 md:py-2 md:px-4 md:border-1 md:text-[12px] lg:text-[18px] lg:py-3 lg:px-7 '
          onClick={() => window.open(learnMoreLink)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;

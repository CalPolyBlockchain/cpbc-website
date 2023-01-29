import { useState, useEffect, useRef } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import Hackathon from '../Hackathon/Hackathon';
import { hackathons, projects } from '../../data/index';

import './Projects.css';
function Projects() {
  const slideShowLength = projects.length * 300 + projects.length * 10;
  const [interval, setInterval] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const steps =
    screenWidth > 680
      ? (projects.length > 5) ? (Math.abs(interval) / Math.ceil(projects.length / 3) ): Math.abs(interval)
      : Math.abs(interval) / projects.length;
  const [pointer, setPointer] = useState(0);
  const [cascade, setCascade] = useState(100);
  const myDiv = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          var arr = [...entry.target.children];
          arr.forEach((node) => {
            node.style.transition = 'all 1s ease-in-out';
            node.style.transform = 'translateX(0)';
          });
        }
      },
      { threshold: [0] }
    );
    if (myDiv.current) {
      observer.observe(myDiv.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setInterval(
      document.querySelector('.slideshow-holder').offsetWidth - slideShowLength
    );

    function handleResize() {
      setInterval(
        document.querySelector('.slideshow-holder').offsetWidth -
          slideShowLength
      );
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const translateStyle = {
    translate: pointer + 'px',
  };
  const handleClick = (e) => {
    if (e.currentTarget.id === 'project-right') {
      if (pointer - steps >= interval) {
        setPointer((current) => current - steps);
      }
    } else if (e.currentTarget.id === 'project-left') {
      if (pointer < 0) {
        setPointer((current) => current + steps);
      }
    }
  };

  return (
    <div id='theme' class='container-wide text'>
      <div
        id='projects'
        class='text-big text-[42px] w-[100%] leading-[50px] pt-5 md:text-[90px] md:w-[100%] md:leading-[110px] lg:text-[132px] lg:leading-[145px] lg:w-[95%] xl:text-[132px] xl:leading-[145px] xl:w-[85%] 2xl:text-[132px] 2xl:leading-[155px] 2xl:w-[85%]'
      >
        <h1>Projects and Activities</h1>
      </div>
      <div class='container-mid text-med text-[24px] pt-5 md:text-[24px] lg:text-[38px] xl:text-[38px] 2xl:text-[42px]'>
        <div>
          <h2>Student Projects</h2>
          <hr class='border-1-white  mt-3 '></hr>
        </div>
        <div class='project-container '>
          <div id='project-gallery' class='relative square'>
            <div
              class='flex items-center absolute top-40 -left-[3%] z-10 arrow text'
              id='project-left'
              onClick={handleClick}
            >
              {'<'}
            </div>
            <div class='slideshow-holder flex flex-row mt-3 relative'>
              <div class='slideshow-wrapper' style={translateStyle}>
                {projects.map((element, index) => {
                  return (
                    <ProjectItem
                      img={element.imgUrl}
                      url={element.link}
                      index={index}
                    />
                  );
                })}
              </div>
            </div>
            <div
              class='flex items-center absolute top-40 -right-[3%] z-10 arrow text'
              id='project-right'
              onClick={handleClick}
            >
              {'>'}{' '}
            </div>
          </div>
        </div>
      </div>

      <div class='container-mid text-med text-[24px] pt-5 md:text-[24px] lg:text-[38px] xl:text-[38px] 2xl:text-[42px]'>
        <div>
          <h2 class=''>Hackathons</h2>
          <hr class='border-1-white mt-3 mb-3'></hr>
        </div>
        <div ref={myDiv} id='hackathons' class='flex flex-col divs2'>
          {hackathons.map((element, index) => {
            return <Hackathon data={element} index={index} cascade={cascade} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

//max-w-[]

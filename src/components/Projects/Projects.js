import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import Hackathon from "../Hackathon/Hackathon";
import { projectImages } from "../../images";
import { hackathons } from "../../data";

function Projects() {
  return (
    <div id="theme" class="container-wide text">
      <div class="text-big text-[42px] w-[100%] leading-[50px] pt-5 md:text-[90px] md:w-[100%] md:leading-[110px] lg:text-[132px] lg:leading-[145px] lg:w-[95%] xl:text-[132px] xl:leading-[145px] xl:w-[85%] 2xl:text-[132px] 2xl:leading-[155px] 2xl:w-[85%]">
        <h1>Projects and Activities</h1>
      </div>
      <div class="container-mid text-med text-[24px] pt-5 md:text-[24px] lg:text-[38px] xl:text-[38px] 2xl:text-[42px]">
        <div>
          <h2>Student Projects</h2>
          <hr class="border-1-white  mt-3 "></hr>
        </div>
        <div class="flex flex-row mt-3">
          {projectImages.map((element, index) => {
            return <ProjectItem img={element} index={index} />;
          })}
        </div>
      </div>
      <div class="container-mid text-med text-[24px] pt-5 md:text-[24px] lg:text-[38px] xl:text-[38px] 2xl:text-[42px]">
        <div>
          <h2>Hackathons</h2>
          <hr class="border-1-white mt-3 mb-3"></hr>
        </div>
        <div class="flex flex-col">
          {hackathons.map((element, index) => {
            return <Hackathon data={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

//max-w-[]

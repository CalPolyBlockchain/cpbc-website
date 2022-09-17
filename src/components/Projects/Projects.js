import React from 'react'
import ProjectItem from '../ProjectItem/ProjectItem'

const data = ["blow","job", "city"]

function Projects() {
  return (
    <div class="container">
        <div class="text-[#ffffff] text-[48px] w-[85%] font-semibold md:text-[90px] md:w-[75%] md:leading-[110px] lg:text-[132px] lg:leading-[175px] lg:w-[75%]">
            <h1>Projects and Activities</h1>
        </div>
        <div class="text-[#ffffff]  max-w-[355px] m-auto md:max-w-[355px] lg:max-w-[1100px] lg:text-[39px]">
            <div>
                <h2>Student Projects</h2>
                <hr class="border-1-white"></hr>
            </div>
            <div class="flex flex-row">
            {
                data.map((element, index) => {
                    return <ProjectItem name={element} index={index} />}
                )
            }
            </div>
        </div>
        <div>Poop3</div>
    </div>
  )
}

export default Projects

//max-w-[]
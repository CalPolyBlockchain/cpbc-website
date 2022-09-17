import React from 'react'

const ProjectItem = (props) => {
    
  return (
    <div class="w-[900px] m-2 md:w-[900px] lg:w-[900px] xl:w-[900px] 2xl:w[900px]">
      <img class="rounded-2xl" src={props.img} alt=" of stuff" />
    </div>
  )
}

export default ProjectItem
import React from 'react'

const ProjectItem = (props) => {
    
  return (
    <div class="bg-black w-[200px] h-[200px] m-6">{ props.name } at {props.index}</div>
  )
}

export default ProjectItem
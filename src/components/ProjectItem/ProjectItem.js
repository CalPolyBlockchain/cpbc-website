import React, { useState } from "react";
import "./ProjectItem.css";

const ProjectItem = (props) => {
  const { index } = props;
  const [scale, setScale] = useState(.95);

  const handleMouseEnter = () => {
    setScale(1);
  }
  const handleMouseLeave = () => {
    setScale(.95);
  }
  const img_style = {
    position: "absolute",
    left:0,
    top:0,
    margin: "auto", 
    transform: `translateX(${310 * index}px) scale(${scale})`
  };

  
  return (
    <div class="image-div">
      <a href={props.url} target="_blank" rel="noreferrer" >
      <img style={img_style} 
            src={props.img} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
      alt=" of stuff" />
      </a>
    </div>
  );
};

export default ProjectItem;

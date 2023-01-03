import React from "react";
import "./ProjectItem.css";

const ProjectItem = (props) => {
  const { index } = props;
  const img_style = {
    position: "absolute",
    left:0,
    top:0,
    margin: "auto", 
    transform: `translateX(${310 * index}px)`
  };

  
  return (
    <div class="image-div">
      <img style={img_style} src={props.img} alt=" of stuff" />
    </div>
  );
};

export default ProjectItem;

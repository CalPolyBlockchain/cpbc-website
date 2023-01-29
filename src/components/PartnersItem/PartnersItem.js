import React from 'react';

const PartnersItem = (props) => {
  return (
    <div
      class='m-2 md:w-[900px] lg:w-[900px] xl:w-[900px] 2xl:w[900px]'
      style={{ cursor: 'pointer' }}
      onClick={() => window.open(props.link)}
    >
      <img class='rounded-2xl' src={props.img} alt=' of stuff' />
    </div>
  );
};

export default PartnersItem;

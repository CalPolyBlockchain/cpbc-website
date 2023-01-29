import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Toggle = ({ toggleTheme }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className='flex'>
      <button
        className='text-[24px]'
        onClick={() => {
          setIsOn(!isOn);
          toggleTheme();
        }}
      >
        {isOn ? <FaToggleOn /> : <FaToggleOff class='orange' />}
      </button>
    </div>
  );
};

export default Toggle;

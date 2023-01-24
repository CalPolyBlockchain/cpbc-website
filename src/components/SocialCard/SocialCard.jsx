import React from 'react'

const SocialCard = (props) => {
  const {companyName, count, icon} = props.data  
  return (
    <div className='flex flex-row'>
        <div className="flex items-center text-9xl">
            {icon}
        </div>
        <div> 
            <div className="text-6xl font-bold">{ companyName } </div>
            <div className="text-8xl font-bold text-right">{ count }</div>
        </div>


    </div>
  )
}

export default SocialCard
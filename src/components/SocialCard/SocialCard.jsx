import React from 'react'

const SocialCard = (props) => {
  const {companyName,  icon} = props.data  
  const discordFollowers  = props.discord
  const twitterFollowers  = props.twitter
  return (
    <div className='flex flex-row'>
        <div className="flex items-center text-[14rem] sm:text-9xl pl-[10px] sm:pr-[20px]">
            {icon}
        </div>
        <div class="flex flex-col justify-center items-center w-full"> 
            <div className="text-2xl lg:text-6xl font-bold">{ companyName } </div>
            <div className=" text-7xl lg:text-8xl font-bold text-right">{ companyName.toLowerCase() === "twitter" ? twitterFollowers : discordFollowers }</div>
        </div>


    </div>
  )
}

export default SocialCard
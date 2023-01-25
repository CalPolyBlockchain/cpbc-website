import {useState, useEffect} from 'react'

const SocialCard = (props) => {
  const {companyName, link, icon} = props.data  
  const discordFollowers  = props.discord
  const twitterFollowers  = props.twitter
  const currentCount = companyName.toLowerCase() === "twitter" ? twitterFollowers : discordFollowers;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 5);

    if (count >= currentCount) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count, discordFollowers, twitterFollowers]);



  return (
    <div className='flex flex-row' style={{ cursor: 'pointer' }} onClick={() => window.open(link)}>
        <div className="flex items-center text-[14rem] sm:text-9xl pl-[10px] sm:pr-[20px]">
            {icon}
        </div>
        <div class="flex flex-col justify-center items-center w-full"> 
            <div className="text-2xl lg:text-6xl font-bold">{ companyName } </div>
            <div className=" text-7xl lg:text-8xl font-bold text-right">{ count }</div>
        </div>
        


    </div>
  )
}

export default SocialCard
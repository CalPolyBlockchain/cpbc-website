import {useState, useEffect} from "react";
import SocialCard from "../SocialCard/SocialCard";
import './Socials.css'
import { socials } from "../../data";
import axios from 'axios'


const Socials = () => {



  const userId = 1419372755514839041;
  const server = 'KtNtWd2akR' 
  const twitter = `https://api.twitter.com/2/users/${userId}`;
  const bearerToken =process.env.REACT_APP_BEARER_TOKEN;
  const url1 = '/api'
  const discord = `https://discord.com/api/v9/invites/${server}?with_counts=true&with_expiration=true`
  

const bodyParameters = {
  'user.fields': "public_metrics"
};
   const [discordFollowers, setDiscordFollowers] = useState(0);
   const [twitterFollowers, setTwitterFollowers] = useState(0);

  useEffect(() => {
    const fetchDiscordData = async () => {
      const result = await axios.get(discord);
      setDiscordFollowers(result.data.approximate_member_count);
    };
    const fetchTwitterData = async () => {
      const result = await axios.get('/api');
      console.log(result)
      setTwitterFollowers(result.data.data.public_metrics.followers_count);
    };

   fetchDiscordData();
   fetchTwitterData();
  }, []);

  return (
    <div id="theme" className="banner  wedge-is-on-social ">
        <div className="flex flex-col md:flex-row container-mid justify-between pt-[50px] pb-[50px] md:pt-[100px] md:pb-[100px]">
      {socials.map((element) => {
        return <SocialCard data={ element } twitter={twitterFollowers} discord={discordFollowers} />;
      })}
           </div>
          
    </div>
  );
};

export default Socials;

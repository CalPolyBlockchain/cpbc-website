import SocialCard from '../SocialCard/SocialCard';
import './Socials.css';
import { socials } from '../../data';

const Socials = () => {
  return (
    <div id='theme' className='banner'>
      <div className='flex flex-col md:flex-row container-mid justify-between pt-[50px] pb-[50px] md:pt-[100px] md:pb-[100px] text-flip'>
        {socials.map((element) => {
          return (
            <SocialCard
              data={element}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Socials;

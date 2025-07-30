import './SocialCard.css';
const SocialCard = (props) => {
  const { companyName, link, icon } = props.data;

  return (
    <div
      className='flex flex-row social-small'
      style={{ cursor: 'pointer' }}
      onClick={() => window.open(link)}
    >
      <div className='flex items-center text-[14rem] sm:text-9xl pl-[10px] sm:pr-[20px]'>
        {icon}
      </div>
      <div class='flex flex-col justify-center items-center w-full'>
        <div className='text-2xl lg:text-6xl font-bold'>{companyName} </div>
      </div>
    </div>
  );
};

export default SocialCard;

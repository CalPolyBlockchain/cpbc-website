import { FaDiscord, FaTwitter } from 'react-icons/fa';

/********************************** ABOUT DATA **********************************/
export const logo = require('../images/logos/cp2.png');
const morro_night1 = require('../images/hero/h1');
export const projectHero = [morro_night1];
export const cpbc_logo = require('../images/logos/design_one2s2.png');
export const quarter = 'Spring Quarter 2024';
export const heading = 'Weekly Meetings';
export const dates = 'Fridays: 4:10pm - 5:00pm';
export const location = 'Frost 181-102';
export const learnMoreLink = 'https://twitter.com/polyblockchain';

/********************************** SOCIALS DATA **********************************/
export const socials = [
  {
    companyName: 'DISCORD',
    count: '209',
    link: 'http://discord.gg/KtNtWd2akR',
    icon: <FaDiscord />,
  },
  {
    companyName: 'TWITTER',
    count: '300',
    link: 'https://twitter.com/polyblockchain',
    icon: <FaTwitter />,
  },
];

/********************************** PROJECTS DATA **********************************/
const MoveStudio = require('../images/projects/move-studio.jpg');
const Mobius = require('../images/projects/mobius.png');
const Mustang = require('../images/projects/mustang-dao.png');
const Seam = require('../images/projects/seam.png');

export const projects = [

  {
    projectName: 'Move Studio IDE',
    imgUrl: MoveStudio,
    link: 'https://www.movestudio.dev/',
  },
  {
    projectName: 'SEAM',
    imgUrl: Seam,
    link: 'https://www.linkedin.com/company/seam-money/about/',
  },
  {
    projectName: 'Mobius Money',
    imgUrl: Mobius,
    link: 'https://www.mobius.money/',
  },
  {
    projectName: 'Mustang DAO',
    imgUrl: Mustang,
    link: 'https://github.com/CalPolyBlockchain/MustangDAOPOAP/',
  }
];

/********************************** HACKATHONS DATA **********************************/
const Griz = require('../images/hackathons/griz.jpg');

export const hackathons = [
  {
    isFuture: true,
    eventName: 'Solana Grizzlython 2023',
    startDate: 'Feb 02, 2023',
    endDate: 'Mar 14, 2023',
    imgUrl: Griz,
  },
  {
    isFuture: false,
    eventName: 'ETH San Francisco 2022',
    startDate: 'Nov 04, 2022',
    endDate: 'Nov 06, 2022',
    imgUrl:
      'https://storage.googleapis.com/ethglobal-api-production/events/441gg/logo/1653491644559_sf-logo.jpg',
    link: 'https://sf.ethglobal.com/',
  },
  {
    isFuture: false,
    eventName: 'ETH MEXICO 2022',
    startDate: 'Aug 19, 2022',
    endDate: 'Aug 21, 2022',
    imgUrl: 'https://mexico.ethglobal.com/img/illustration.svg',
    link: 'https://mexico.ethglobal.com/',
  },
  {
    isFuture: false,
    eventName: 'ETH CC5 Paris 2022',
    startDate: 'Jul 19, 2022',
    endDate: 'July 21, 2022',
    imgUrl:
      'https://pbs.twimg.com/profile_images/725947738781708288/95vIQJR-_400x400.jpg',
    link: 'https://ethcc.io/',
  },
  {
    isFuture: false,
    eventName: 'Road to Web3 2022',
    startDate: 'Feb 3, 2022',
    endDate: 'Feb 8, 2022',
    imgUrl:
      'https://storage.googleapis.com/ethglobal-api-production/events/5b9mq/logo/1652207364354_roadtoweb3.png',
    link: 'https://roadtoweb3.ethglobal.com/',
  },
];

/********************************** TEAM DATA **********************************/
const p1 = require('../images/team/5.jpg');
const p2 = require('../images/team/1.jpg');
const p3 = require('../images/team/2.jpg');
const p4 = require('../images/team/3.jpg');
const p5 = require('../images/team/4.jpg');


export const team = [
  { img: p1, name: 'Max', link: 'https://www.linkedin.com/in/maxwellmohammadi/' },
  { img: p4, name: 'Jack', link: 'https://www.linkedin.com/in/jack-kelly-86099a19b/' },
  { img: p2, name: 'Dan', link: '' },
  { img: p3, name: 'Evan', link: '' },
  { img: p5, name: 'Travis', link: 'https://www.linkedin.com/in/travis-hawley-150a5420a/' },
];

export const teamGroupA = require('../images/team/groupa.jpg');
export const teamGroupB = require('../images/team/groupb.jpg');


/********************************** PARTNERS DATA **********************************/
const CPEng = require('../images/partners/CP_Engineering.jpg');
const Decentral = require('../images/partners/DecentralCoast.jpg');
const Orfalea = require('../images/partners/Orfalea.png');

export const partners = [
  { img: CPEng, link: 'https://ceng.calpoly.edu/' },
  { img: Decentral, link: 'https://decrypt.co/' },
  { img: Orfalea, link: 'https://www.calpoly.edu/orfalea-college-of-business' },
];

import { FaDiscord, FaTwitter } from 'react-icons/fa'

export const hackathons = [
  {
    isFuture: true,
    eventName: "ETH San Francisco 2022",
    startDate: "Nov 04, 2022",
    endDate: "Nov 06, 2022",
    imgUrl:"https://storage.googleapis.com/ethglobal-api-production/events/441gg/logo/1653491644559_sf-logo.jpg",
    link: "https://sf.ethglobal.com/"
  },
  {
    isFuture: false,
    eventName: "ETH MEXICO 2022",
    startDate: "Aug 19, 2022",
    endDate: "Aug 21, 2022",
    imgUrl: "https://mexico.ethglobal.com/img/illustration.svg",
    link: "https://mexico.ethglobal.com/"
  },
  {
    isFuture: false,
    eventName: "ETH CC5 Paris 2022",
    startDate: "Jul 19, 2022",
    endDate: "July 21, 2022",
    imgUrl: "https://pbs.twimg.com/profile_images/725947738781708288/95vIQJR-_400x400.jpg",
    link: "https://ethcc.io/"
  },
  {
    isFuture: false,
    eventName: "Road to Web3 2022",
    startDate: "Feb 3, 2022",
    endDate: "Feb 8, 2022",
    imgUrl:
      "https://storage.googleapis.com/ethglobal-api-production/events/5b9mq/logo/1652207364354_roadtoweb3.png",
      link: "https://roadtoweb3.ethglobal.com/"
  },
];
const Mobius = require("../images/projects/mobius.png")
const Mustang = require("../images/projects/mustang-dao.png");
const Seam = require("../images/projects/seam.png");

export const projects = [
  {
    projectName: "Mobius Money",
    imgUrl: Mobius,
    link: "https://www.mobius.money/"
  },
  {
    projectName: "Mustang DAO",
    imgUrl: Mustang,
    link: "https://github.com/CalPolyBlockchain/MustangDAOPOAP/"
  },
  {
    projectName: "SEAM",
    imgUrl: Seam,
    link: "https://ethcc.io/"
  },
  {
    projectName: "Mobius",
    imgUrl: Mobius,
      link: "https://www.mobius.money/"
  },
];



export const socials = [
  {
    companyName: "DISCORD",
    count: "209",
    link: 'http://discord.gg/KtNtWd2akR',
    icon: <FaDiscord />
  },
  {
    companyName: "TWITTER",
    count: "300",
    link: 'https://twitter.com/polyblockchain',
    icon: <FaTwitter />
  }
];

import { FaDatabase, FaReact } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { SiDotnet, SiNextdotjs } from 'react-icons/si';

type TimelineItem = {
  title: string;
  position: string;
  date: string;
  icon: React.ReactNode;
  body: React.ReactNode;
};

const designeo: TimelineItem = {
  title: 'Designeo Creative s.r.o.',
  position: 'Software developer',
  date: 'February 2021 - present',
  icon: <SiDotnet />,
  body: <>In Designeo, I work as a developer mostly focused on .NET backend.</>,
};

const qest: TimelineItem = {
  title: 'Qest automation',
  position: 'Software developer, DevOps',
  date: 'May 2017 - December 2020',
  icon: <FaDatabase />,
  body: (
    <>
      In Qest, I worked as a developer mostly focused on .NET backend. I worked on many projects
      including logistic platform Shipvio and home automation system Qest Home.
    </>
  ),
};

const fit: TimelineItem = {
  title: 'FIT CTU',
  position: "Bachelor's degree",
  date: 'September 2016 - May 2020',
  icon: <IoMdSchool />,
  body: <>Faculty of Information Technology, Czech Technical University in Prague.</>,
};

const shamyr: TimelineItem = {
  title: 'Shamyr',
  position: 'Software developer, Designer and DevOps',
  date: 'Janury 2016 - present',
  icon: <SiNextdotjs />,
  body: <>Shamyr is the brand that I use for freelancing and my independent projects.</>,
};

const gympt: TimelineItem = {
  title: 'Secondary grammar school',
  position: 'Basic education',
  date: 'September 2008 - June 2016',
  icon: <FaReact />,
  body: <>Secondary Grammar School Prachatice, Zlatá Stezka 137. Basic education.</>,
};

export type { TimelineItem };
export default [designeo, qest, fit, shamyr, gympt];

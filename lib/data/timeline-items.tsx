import { FaDatabase, FaReact } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { SiDotnet, SiTypescript } from 'react-icons/si';

type TimelineItem = {
  title: string;
  position: string;
  date: string;
  icon: React.ReactNode;
  body: React.ReactNode;
};

const designeo: TimelineItem = {
  title: 'Designeo Creative s.r.o.',
  position: 'Backend developer',
  date: 'Spring 2021 - Winter 2021',
  icon: <SiDotnet />,
  body: <>In Designeo, I worked as a software developer mostly focused on .NET backend.</>,
};

const qest: TimelineItem = {
  title: 'Qest automation',
  position: 'Backend developer, DevOps',
  date: 'Spring 2017 - Spring 2021',
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
  date: 'Fall 2016 - Summer 2020',
  icon: <IoMdSchool />,
  body: <>Faculty of Information Technology, Czech Technical University in Prague.</>,
};

const shamyr: TimelineItem = {
  title: 'Shamyr',
  position: 'Software developer, Designer and DevOps',
  date: 'Fall 2016 - present',
  icon: <SiTypescript />,
  body: <>Shamyr is the brand that I use for freelancing and my independent projects.</>,
};

const gympt: TimelineItem = {
  title: 'Secondary grammar school',
  position: 'Basic education',
  date: 'Fall 2008 - Summer 2016',
  icon: <FaReact />,
  body: <>Secondary Grammar School Prachatice, Zlatá Stezka 137. Basic education.</>,
};

const timelineItems = [designeo, qest, fit, shamyr, gympt];

export type { TimelineItem };
export default timelineItems;

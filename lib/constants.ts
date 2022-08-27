import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { IconType } from 'react-icons/lib';
import { IoLogoReact } from 'react-icons/io5';
import { BsFillPencilFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaRegNewspaper } from 'react-icons/fa';

type Route = {
  path: string;
  name: string;
  Icon?: IconType;
  showInNavigation?: boolean;
  description?: string;
  shortcuts?: string[];
};

type Routes = { [key: string]: Route };

export type { Route, Routes };
export const routes: Routes = {
  root: {
    path: '/',
    name: 'Home',
    showInNavigation: true,
    Icon: AiOutlineHome,
    description: 'Default Home page',
    shortcuts: ['alt', 'h'],
  },
  projects: {
    path: '/projects',
    name: 'Projects',
    showInNavigation: true,
    shortcuts: ['alt', 'p'],
    Icon: AiOutlineFundProjectionScreen,
  },
  timeline: {
    path: '/timeline',
    name: 'Timeline',
    showInNavigation: true,
    shortcuts: ['alt', 't'],
    Icon: BiTimeFive,
  },
  technologies: {
    path: '/technologies',
    name: 'Technologies',
    showInNavigation: true,
    shortcuts: ['alt', 'l'],
    Icon: IoLogoReact,
  },
  blog: {
    path: 'https://blog.láďaprix.cz',
    name: 'Blog',
    showInNavigation: true,
    shortcuts: ['alt', 'b', 'l'],
    Icon: BsFillPencilFill,
  },
  github: {
    path: 'https://github.com/prixladi',
    name: 'Github',
    shortcuts: ['alt', 'g', 'h'],
    Icon: FaGithub,
  },
  linkedin: {
    path: 'https://www.linkedin.com/in/láďa-prix/',
    name: 'Linkedin',
    shortcuts: ['alt', 'l', 'k'],
    Icon: FaLinkedin,
  },
  backlog: {
    path: '/backlog',
    name: 'Backlog',
    shortcuts: ['alt', 'b'],
    Icon: FaRegNewspaper,
  },
};

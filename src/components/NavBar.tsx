import Link from 'next/link';
import TehemeSwitcher from './themeSwitcher';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const Dots = () => (
  <div className="flex items-center">
    <BiDotsVerticalRounded className="dark:text-gray-400 text-gray-60" />
  </div>
);

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-content">
      <div className="navbar-name navbar-hover-underline">
        <h1>
          <Link href="/">Ladislav Prix</Link>
        </h1>
      </div>
      <ul className="navbar-middle">
        <li className="navbar-hover-underline navbar-item">
          <Link href="/">Technologies</Link>
        </li>
        <div className="flex items-center">
          <Dots />
        </div>
        <li className="navbar-hover-underline navbar-item">
          <Link href="/">Projects</Link>
        </li>
        <div className="flex items-center">
          <Dots />
        </div>
        <li className="navbar-hover-underline navbar-item">
          <Link href="/">Timeline</Link>
        </li>
        <div className="flex items-center">
          <Dots />
        </div>
        <li className="navbar-hover-underline navbar-item">
          <Link href="/">Blog</Link>
        </li>
      </ul>
      <TehemeSwitcher />
    </div>
  </div>
);

export default Navbar;

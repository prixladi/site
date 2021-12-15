import Link from 'next/link';
import TehemeSwitcher from './themeSwitcher';

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
        <li className="navbar-hover-underline navbar-item">
          <Link href="/">Projects</Link>
        </li>
        <li className="navbar-hover-underline navbar-item">
          <Link href="/">Timeline</Link>
        </li>
        <li className="navbar-hover-underline navbar-item">
          <Link href="/">Blog</Link>
        </li>
      </ul>
      <TehemeSwitcher />
    </div>
  </div>
);

export default Navbar;

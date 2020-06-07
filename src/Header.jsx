import React from 'react';

import {ThemeSwitch} from './ThemeSwitch';

import './Header.css';

const Header = () => {
  return (
    <header className='App-header'>
      <ThemeSwitch />
      <a href="/cv.pdf" className="button"> Download CV.</a>
      <h1>Hi, my name is Láďa <br/> and here you can get to know me.</h1>
      <p>
        I’m a 23 years old developer mostly interested in web developement,
        especially backend. I'm manly focused on Microsoft platform  (.NET Core, C# ...) and cloud developement (Azure, AWS ...) but im not restricted to that area.
      </p>
    </header>
  );
};

export { Header };

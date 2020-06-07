import React, { useEffect, useState } from 'react';
import './ThemeSwitch.css';

const ThemeSwitch = () => {
  var [theme, setTheme] = useState(localStorage.getItem('theme'));

  useEffect(() => {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );

    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        setTheme('light');
      }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
  }, [theme]);

  return (
    <div className='theme-switch-wrapper'>
      <label className='theme-switch' htmlFor='checkbox'>
        <input type='checkbox' id='checkbox' defaultChecked={theme === 'dark'} />
        <div className='slider round'></div>
      </label>
      <em>{theme === 'dark' ? 'Disable' : 'Enable'} Dark Mode.</em>
    </div>
  );
};

export { ThemeSwitch };

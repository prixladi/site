import React from 'react';

import { Header } from './Header';
import { Contact } from './Contact';
import { Studies } from './Studies';
import { WorkExp } from './WorkExp';
import { Projects } from './Projects';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Contact />
      <Projects />
      <WorkExp />
      <Studies />
    </div>
  );
};

export default App;

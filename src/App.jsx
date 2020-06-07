import React from 'react';

import { Header } from './Header';
import { Contact } from './Contact';
import { Studies } from './Studies';
import { WorkExp } from './WorkExp';
import { Projects } from './Projects';
import { ContactForm } from './ContactForm';

import './App.css';

const App = () => (
  <div className='App'>
    <Header />
    <Contact />
    <Projects />
    <WorkExp />
    <Studies />
    <ContactForm />
  </div>
);

export default App;

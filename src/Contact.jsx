import React from 'react';

const Contact = () => (
  <>
    <h2>How you can contact me.</h2>
    <p>
      My full name is <strong>Ladislav Prix</strong> and I’m based in{' '}
      <strong>Prague, Czech Republic</strong>.
    </p>
    <p>
      You can write me an email{' '}
      <span role='img' aria-label='mail'>
        ✉️
      </span>{' '}
      <a href='mailto:contact@ladislavprix.cz'>contact@ladislavprix.cz</a>.{' '}
      <br />
      You can find me on{' '}
      <a
        href='https://linked.in/ladislavprix'
        target='_blank'
        rel='noopener noreferrer'
      >
        Linkedin
      </a>{' '}
      or{' '}
      <a
        href='https://github.com/prixladi'
        target='_blank'
        rel='noopener noreferrer'
      >
        GitHub
      </a>
      .
      <br />
      Or you can use <a href='#contact-form'> Contact form bellow</a>.
    </p>
  </>
);

export { Contact };

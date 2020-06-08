import React from 'react';

const Studies = () => (
  <>
    <h2>Where and what I studied.</h2>
    <ul>
      <li key='fit'>
        <p>
          <a href='https://gympt.cz' target='_blank' rel='noopener noreferrer'>
            Faculty of Information Technology, Czech Technical University in
            Prague
          </a>
          <br />
          <i>2016-2020</i>, Bachelor program, Web and Software Engineering,
          specialization Web Engineering
        </p>
      </li>

      <li key='gympt'>
        <p>
          <a href='https://gympt.cz' target='_blank' rel='noopener noreferrer'>
            Secondary Grammar School Prachatice, Zlatá Stezka 137
          </a>
          <br />
          <i>2008-2016</i>, General education
        </p>
      </li>
    </ul>
  </>
);

export { Studies };

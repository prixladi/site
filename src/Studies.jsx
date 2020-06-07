import React from 'react';

const Studies = () => {
  return (
    <>
      <h2>Where and what I studied.</h2>
      <ul>
        <li key='fit'>
          <a href='https://gympt.cz'>
            Faculty of Information Technology, Czech Technical University in
            Prague
          </a>
          <br />
          <i>2016-2020</i>, Bachelor program
        </li>

        <li key='gympt'>
          <a href='https://gympt.cz'>
            Secondary Grammar School Prachatice, Zlatá Stezka 137
          </a>
          <br />
          <i>2008-2016</i>, General education
        </li>
      </ul>
    </>
  );
};

export { Studies };

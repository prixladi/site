import React from 'react';

const Projects = () => (
  <>
    <h2>Projects i have worked / been working on.</h2>
    <p>
      I started working in the developement field in the first year of college.
    </p>

    <ul>
      <li key='treeloc'>
        <p>
          <a
            href='https://github.com/prixladi/treeloc'
            target='_blank'
            rel='noopener noreferrer'
          >
            TreeLoc
          </a>{' '}
          <i>2019-2020</i> <br />
          My bachelor thesis assignment. It is web aplication for Ministry of
          Interior that shows open data provider advantages of using{' '}
          <a
            href='https://www.zakonyprolidi.cz/cs/1999-106#p3-9'
            target='_blank'
            rel='noopener noreferrer'
          >
            Open formal norm (czech).
          </a>{' '}
          It downloads data about woody plants from Czech National Open Data
          Catalog, displays them in map and allows filtration in them.
          <br />
          <b>Technologies</b>: C#, ASP.NET, Core, SignalR, JavaScript,
          TypeScript, React, Leaflet, MongoDB, Docker
        </p>
      </li>

      <li key='haidy'>
        <p>
          <a
            href='https://qest.cz/casestudies/haidy/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Haidy
          </a>{' '}
          <i>2017-present</i> <br />
          Home automation system based on microservice architecture that I have
          been working on in <a href='#work-qest'>Qest</a>.
          <br />
          <b>Technologies</b>: C#, ASP.NET Core, SignalR, MongoDB,
          RabbitMQ, IdentityServer 4, Entity Framework Core, Docker, Azure,
          Kubernetes
        </p>
      </li>

      <li key='shipvio'>
        <p>
          <a
            href='https://qest.cz/casestudies/shipvio/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Shipvio
          </a>{' '}
          <i>2017-2019</i> <br />A logistic platform connecting carriers and
          customers that I have been working on in <a href='#work-qest'>Qest</a>
          .
          <br />
          <b>Technologies</b>: C#, ASP.NET Core, SQL Server, T-SQL,
          Entity Framework Core, Docker
        </p>
      </li>

      <li key='this'>
        <p>
          <a
            href='https://github.com/prixladi/ladislavprix'
            target='_blank'
            rel='noopener noreferrer'
          >
            This Website ¯\_(ツ)_/¯
          </a>{' '}
          <i>2020</i> <br />
          Personal website built with React, overkill i know but i have bigger
          plans with this.
          <br />
          <b>Technologies</b>: CSS, JavaScript, React
        </p>
      </li>
    </ul>
  </>
);

export { Projects };

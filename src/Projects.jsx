import React from 'react';

const Projects = () => {
  return (
    <>
      <h2>Projects i have worked / been working on.</h2>
      <p>
        I started working in the developement field in the first year of
        college.
      </p>

      <ul>
        <li key='treeloc'>
          <a href='https://github.com/prixladi/treeloc'>TreeLoc</a>{' '}
          <i>2019-2020</i> <br />
          My bachelor thesis assignment. It is web aplication for Ministry of
          Interior that shows open data provider advantages of using{' '}
          <a href='https://www.zakonyprolidi.cz/cs/1999-106#p3-9'>
            Open formal norm (czech).
          </a>{' '}
          It downloads data about woody plants from Czech National Open Data
          Catalog, displays them in map and allows filtration in them.
          <br />
          <strong>Technologies</strong>: C#, ASP.NET, Core, SignalR, JavaScript,
          TypeScript, React, Leaflet, MongoDB
        </li>

        <li key='haidy'>
          <a href='https://qest.cz/casestudies/haidy/'>Haidy</a>{' '}
          <i>2017-present</i> <br />
          Home automation system based on microservice architecture.
          <br />
          <strong>Technologies</strong>: C#, ASP.NET Core, SignalR, MongoDB,
          RabbitMQ, IdentityServer 4, Entity Framework Core
        </li>

        <li key='shipvio'>
          <a href='https://qest.cz/casestudies/shipvio/'>Shipvio</a>{' '}
          <i>2017-2019</i> <br />
          Home automation system based on microservice architecture.
          <br />
          <strong>Technologies</strong>: C#, ASP.NET Core, MSSQL, T-SQL, Entity Framework
          Core
        </li>
      </ul>
    </>
  );
};

export { Projects };

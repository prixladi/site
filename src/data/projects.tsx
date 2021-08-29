import React from 'react';
import { Tag } from '@chakra-ui/react';
import ExternalLink from '../components/ExternalLink';
import { Technology } from './types';

export type Project = {
  title: string;
  link: string;
  fromYear: number;
  toYear?: number;
  text: React.ReactNode;
  imgSrc: string;
};

type TechTagProps = {
  tech: Technology;
};

const TechTag = ({ tech }: TechTagProps) => (
  <Tag verticalAlign="center" colorScheme="blue">
    {tech}
  </Tag>
);

const eimHome: Project = {
  title: 'Qest Home',
  link: 'https://qesthome.cz/',
  fromYear: 2017,
  toYear: 2020,
  text: (
    <>
      Home automation system, which is based on a microservice architecture that I worked on in{' '}
      <ExternalLink href="https://qest.cz/">Qest</ExternalLink>. I worked on backend. <br /> You can see images from the application and
      read more about the project using the link above or in this{' '}
      <ExternalLink href="https://elektro.tzb-info.cz/inteligentni-budovy/21427-qest-home-predprogramovane-reseni-chytre-domacnosti-na-hw-teco">
        article
      </ExternalLink>
      .
    </>
  ),
  imgSrc: '/images/laptop2.jpg',
};

const expendity: Project = {
  title: 'Expendity',
  link: 'https://github.com/prixladi/expendity',
  fromYear: 2021,
  toYear: 2021,
  text: (
    <>
      Expense tracking application with user permissions, invites and statistics. Using <TechTag tech="ASP.NET Core" />{' '}
      <TechTag tech="GraphQL" /> <TechTag tech="Entity Framework" /> and <TechTag tech="PostgreSQL" /> on the backend, and{' '}
      <TechTag tech="React" /> and <TechTag tech="Apollo Client" /> on the frontend.
    </>
  ),
  imgSrc: '/images/expendity.png',
};

const siteCapture: Project = {
  title: 'Site Capture',
  link: 'https://github.com/prixladi/site-capture',
  fromYear: 2020,
  toYear: 2020,
  text: (
    <>
      Web application for automatically creating screenshots of defined sites. Using <TechTag tech="Node.js" /> <TechTag tech="GraphQL" />{' '}
      <TechTag tech="Apollo Server" /> <TechTag tech="MongoDB" /> and <TechTag tech="Redis" /> on the backend, and <TechTag tech="React" />{' '}
      with <TechTag tech="Next.js" /> and <TechTag tech="Apollo Client" /> on the frontend.
    </>
  ),
  imgSrc: '/images/siteCapture.png',
};

const urlik: Project = {
  title: 'Urlik',
  link: 'https://github.com/prixladi/shamyr-urlik',
  fromYear: 2020,
  toYear: 2020,
  text: (
    <>
      Url shortener with advanced statistics for registered users. Using <TechTag tech="Node.js" /> <TechTag tech="ASP.NET Core" />{' '}
      <TechTag tech="MongoDB" /> and <TechTag tech="Redis" /> on the backend, and <TechTag tech="React" /> with <TechTag tech="Next.js" />{' '}
      on the frontend.
    </>
  ),
  imgSrc: '/images/urlik.png',
};

const shipvio: Project = {
  title: 'Shipvio',
  link: 'https://qest.cz/project/shipvio',
  fromYear: 2017,
  toYear: 2019,
  text: (
    <>
      A logistics platform connecting carriers and customers that I worked on in <ExternalLink href="https://qest.cz/">Qest</ExternalLink>.
      <br />
      You can see images from the application and read more about the project using link above or in this{' '}
      <ExternalLink href="https://qest.cz/project/shipvio">article</ExternalLink>.
    </>
  ),
  imgSrc: '/images/laptop3.jpg',
};

const imaginess: Project = {
  title: 'Imaginess',
  link: 'https://github.com/prixladi/imaginess',
  fromYear: 2021,
  toYear: 2021,
  text: (
    <>
      Random image sharing app. Using <TechTag tech="Node.js" /> <TechTag tech="Serverless" /> <TechTag tech="Azure Blob Storage" /> and{' '}
      <TechTag tech="CosmosDB" /> on the backend, and <TechTag tech="Vue" /> on the frontend.
    </>
  ),
  imgSrc: '/images/imaginess.png',
};

const ladislavPrix: Project = {
  title: 'ladislavprix.cz',
  link: 'https://github.com/prixladi/ladislavprix',
  fromYear: 2020,
  toYear: 2020,
  text: (
    <>
      Personal website running on <ExternalLink href="http://ladislavprix.cz/">ladislavprix.cz</ExternalLink>. Developed using{' '}
      <TechTag tech="React" /> <TechTag tech="Next.js" /> and <TechTag tech="Chakra UI" />.
    </>
  ),
  imgSrc: '/images/ladislavprix.png',
};

const shamyrRescues: Project = {
  title: 'Shamyr Rescues',
  link: 'https://github.com/prixladi/shamyr-rescues',
  fromYear: 2019,
  toYear: 2020,
  text: (
    <>
      Web application informing about various animal rescues. Using <TechTag tech="Node.js" /> <TechTag tech={'Express.js'} /> and{' '}
      <TechTag tech="PostgreSQL" /> on the backend, and <TechTag tech="React" /> on the frontend.
    </>
  ),
  imgSrc: '/images/shamyrRescues.png',
};

const treeloc: Project = {
  title: 'Treeloc',
  link: 'https://github.com/prixladi/treeloc',
  fromYear: 2019,
  toYear: 2020,
  text: (
    <>
      My bachelor thesis assignment. It is a web application searching and displaying woody plants developed for the Ministry of Interior
      using <ExternalLink href="https://www.zakonyprolidi.cz/cs/1999-106#p3-9">Open formal norm</ExternalLink> (Czech). Using{' '}
      <TechTag tech="ASP.NET Core" /> with <TechTag tech="MongoDB" /> on the backend, and <TechTag tech="React" /> with{' '}
      <TechTag tech="Leaflet" /> on the frontend.
    </>
  ),
  imgSrc: '/images/treeloc.png',
};

const opendentity: Project = {
  title: 'Opendentity',
  link: 'https://github.com/prixladi/opendentity',
  fromYear: 2021,
  text: (
    <>
      Identity provider and Access Control service. Developed using <TechTag tech="ASP.NET Core" /> and <TechTag tech="OpenID Connect" />
    </>
  ),
  imgSrc: '/images/opendentityOIDC.png',
};

export default [expendity, opendentity, siteCapture, imaginess, urlik, shamyrRescues, treeloc, ladislavPrix, eimHome, shipvio];

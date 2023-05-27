import InlineLink from '~/components/inline-link';
import Tag from '~/components/tag';

import type { Technology } from './types';

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
  <Tag className="bg-sky-200 text-black dark:bg-slate-700 dark:text-sky-300 font-semibold">
    {tech}
  </Tag>
);

const tusker: Project = {
  title: 'Tusker',
  link: 'https://github.com/prixladi/tusker',
  fromYear: 2022,
  text: (
    <>
      Configurable task queue service with administration. Using <TechTag tech="Deno" /> and{' '}
      <TechTag tech="MongoDB" /> on the backend, and <TechTag tech="SolidJS" /> for administration
      UI.
    </>
  ),
  imgSrc: '/assets/tusker.webp',
};

const expendity: Project = {
  title: 'Expendity',
  link: 'https://github.com/prixladi/expendity',
  fromYear: 2021,
  toYear: 2021,
  text: (
    <>
      Expense tracking application with user permissions, invites and statistics. Using{' '}
      <TechTag tech="ASP.NET Core" /> <TechTag tech="GraphQL" /> <TechTag tech="Entity Framework" />{' '}
      and <TechTag tech="PostgreSQL" /> on the backend, and <TechTag tech="React" /> and{' '}
      <TechTag tech="Apollo Client" /> on the frontend.
    </>
  ),
  imgSrc: '/assets/expendity.webp',
};

const siteCapture: Project = {
  title: 'Site Capture',
  link: 'https://github.com/prixladi/site-capture',
  fromYear: 2020,
  toYear: 2021,
  text: (
    <>
      Web application for automatically creating screenshots of defined sites. Using{' '}
      <TechTag tech="Node.js" /> <TechTag tech="GraphQL" /> <TechTag tech="Apollo Server" />{' '}
      <TechTag tech="MongoDB" /> and <TechTag tech="Redis" /> on the backend, and{' '}
      <TechTag tech="React" /> with <TechTag tech="Next.js" /> and <TechTag tech="Apollo Client" />{' '}
      on the frontend.
    </>
  ),
  imgSrc: '/assets/siteCapture.webp',
};

const urlik: Project = {
  title: 'Urlik',
  link: 'https://github.com/prixladi/shamyr-urlik',
  fromYear: 2020,
  toYear: 2020,
  text: (
    <>
      Url shortener with advanced statistics for registered users. Using <TechTag tech="Node.js" />{' '}
      <TechTag tech="ASP.NET Core" /> <TechTag tech="MongoDB" /> and <TechTag tech="Redis" /> on the
      backend, and <TechTag tech="React" /> with <TechTag tech="Next.js" /> on the frontend.
    </>
  ),
  imgSrc: '/assets/urlik.webp',
};

const imaginess: Project = {
  title: 'Imaginess',
  link: 'https://github.com/prixladi/imaginess',
  fromYear: 2021,
  toYear: 2021,
  text: (
    <>
      Random image sharing app. Using <TechTag tech="Node.js" /> <TechTag tech="Serverless" />{' '}
      <TechTag tech="Azure Blob Storage" /> and <TechTag tech="CosmosDB" /> on the backend, and{' '}
      <TechTag tech="Vue" /> on the frontend.
    </>
  ),
  imgSrc: '/assets/imaginess.webp',
};

const ladislavPrix: Project = {
  title: 'ladislavprix.cz',
  link: 'https://github.com/prixladi/site',
  fromYear: 2020,
  text: (
    <>
      Personal website running on{' '}
      <InlineLink text="ladislavprix.cz" href="http://ladislavprix.cz/" />. Developed using{' '}
      <TechTag tech="React" /> <TechTag tech="Next.js" /> and <TechTag tech="Tailwind CSS" />
    </>
  ),
  imgSrc: '/assets/ladislavprix.webp',
};

const shamyrRescues: Project = {
  title: 'Shamyr Rescues',
  link: 'https://github.com/prixladi/shamyr-rescues',
  fromYear: 2019,
  toYear: 2020,
  text: (
    <>
      Web application informing about various animal rescues. Using <TechTag tech="Node.js" />{' '}
      <TechTag tech="Express.js" /> and <TechTag tech="PostgreSQL" /> on the backend, and{' '}
      <TechTag tech="React" /> on the frontend.
    </>
  ),
  imgSrc: '/assets/shamyrRescues.webp',
};

const treeloc: Project = {
  title: 'Treeloc',
  link: 'https://github.com/prixladi/treeloc',
  fromYear: 2019,
  toYear: 2020,
  text: (
    <>
      My bachelor thesis assignment. It is a web application searching and displaying woody plants
      developed for the Ministry of Interior using{' '}
      <InlineLink text="Open formal norm" href="https://www.zakonyprolidi.cz/cs/1999-106#p3-9" />{' '}
      (Czech). Using <TechTag tech="ASP.NET Core" /> with <TechTag tech="MongoDB" /> on the backend,
      and <TechTag tech="React" /> with <TechTag tech="Leaflet" /> on the frontend.
    </>
  ),
  imgSrc: '/assets/treeloc.webp',
};

const opendentity: Project = {
  title: 'Opendentity',
  link: 'https://github.com/prixladi/opendentity',
  fromYear: 2021,
  toYear: 2021,
  text: (
    <>
      Identity provider and Access Control service. Developed using <TechTag tech="ASP.NET Core" />{' '}
      and <TechTag tech="OpenID Connect" />
    </>
  ),
  imgSrc: '/assets/opendentityOIDC.webp',
};

const contentium: Project = {
  title: 'Contentium',
  link: 'https://github.com/prixladi/contentium',
  fromYear: 2021,
  toYear: 2022,
  text: (
    <>
      Project you can use for creating sites with search engine optimized content from markdown
      source. It is written using <TechTag tech="Next.js" /> and <TechTag tech="Tailwind CSS" />
    </>
  ),
  imgSrc: '/assets/contentium.webp',
};

const ezchat: Project = {
  title: 'Ezchat',
  link: 'https://github.com/prixladi/ezchat',
  fromYear: 2022,
  toYear: 2022,
  text: (
    <>
      Dead simple chat aplication. Using <TechTag tech="Node.js" /> <TechTag tech="Socket.io" />{' '}
      <TechTag tech="Redis" /> and <TechTag tech="PostgreSQL" /> on the backend, and{' '}
      <TechTag tech="Next.js" /> <TechTag tech="Socket.io" /> and <TechTag tech="React Query" /> on
      the frontend.
    </>
  ),
  imgSrc: '/assets/ezchat.webp',
};

const survefy: Project = {
  title: 'Survefy',
  link: 'https://github.com/prixladi/survefy',
  fromYear: 2022,
  text: (
    <>
      Webapp fo creating and sharing surveys. Using <TechTag tech="Next.js" /> and{' '}
      <TechTag tech="MongoDB" />.
    </>
  ),
  imgSrc: '/assets/survefy.webp',
};

const projects = [
  tusker,
  ezchat,
  contentium,
  expendity,
  survefy,
  opendentity,
  siteCapture,
  imaginess,
  urlik,
  shamyrRescues,
  treeloc,
  ladislavPrix,
];

export default projects;

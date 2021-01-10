import { Technology } from './types';
import React from 'react';
import InternalLink from '../components/InternalLink';

export type Job = {
  title: string;
  from: Date;
  to?: Date;
  text: React.ReactNode;
  technologies: Technology[];
};

const qest: Job = {
  title: 'Qest automation s.r.o.',
  from: new Date(2017, 4),
  to: new Date(2020, 10),
  text: (
    <>
      In Qest, I worked as a developer mostly focused on .NET backend. I worked on many projects including logistic platform{' '}
      <InternalLink href="https://qest.cz/project/shipvio">Shipvio</InternalLink> and home automation system{' '}
      <InternalLink href="http://haidy.cz/">Haidy / Qest Home</InternalLink>. My main responsibilities were development, production release
      and maintaining applications.
    </>
  ),
  technologies: ['.NET Core', 'TypeScript', 'SQL Server', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker', 'Azure', 'Azure DevOps'],
};

const shamyr: Job = {
  title: 'Shamyr',
  from: new Date(2017, 0),
  text: <>Shamyr is the brand that I use for freelancing and my independent projects.</>,
  technologies: ['.NET Core', 'TypeScript', 'Node.js', 'React', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
};

export default [qest, shamyr];

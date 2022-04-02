import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { FaGithub } from 'react-icons/fa';
import { useMemo } from 'react';

import InlineLink from '~/components/inlineLink';
import Content from '~/components/content';
import Article from '~components/article';
import ArticleHeader from '~/components/articleHeader';
import ArticleMain from '~components/articleMain';

import projects, { Project } from '~/lib/data/projects';
import { appearingTextInit } from '~/lib/utils/motions';

type ProjectProps = {
  project: Project;
};

const getYearCount = (project: Project): number => {
  if (project.toYear) {
    return project.toYear - project.fromYear;
  }

  return new Date().getFullYear() - project.fromYear;
};

const ProjectYears = ({ project }: ProjectProps) => {
  const yearCount = useMemo(() => Math.max(1, getYearCount(project)), [project]);

  return (
    <span className="inline text-sm font-bold text-gray-700 dark:text-gray-500">
      {project.fromYear} - {project.toYear ?? 'NOW'}{' '}
      <span className="year-tag-colors-light dark:year-tag-colors-dark tag text-xs font-bold">
        {yearCount > 1 ? `${yearCount} YEARS` : `${yearCount} YEAR`}
      </span>
    </span>
  );
};

const ProjectTitle = ({ project }: ProjectProps) => {
  const isGithub = project.link.includes('github.');

  return (
    <h3 className="pb-4">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="span items-center text-red-600 font-bold text-2xl hover:underline"
      >
        {project.title} {isGithub ? <FaGithub className="inline-block pb-1" /> : null}
      </a>
    </h3>
  );
};

const ProjectCard = ({ project }: ProjectProps) => (
  <motion.div {...appearingTextInit().children} className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex">
      <div className="flex flex-col">
        <ProjectTitle project={project} />
        <ProjectYears project={project} />
        <span className="inline text-lg">{project.text}</span>
      </div>
    </div>
    <div className="w-full">
      <motion.img
        src={project.imgSrc}
        alt="profile pricture"
        className="rounded-3xl object-cover border-tiny-black dark:border-tiny-white"
      />
    </div>
  </motion.div>
);

const Projects: NextPage = () => (
  <Content title="Projects | Ladislav Prix" className="max-w-4xl">
    <Article>
      <ArticleHeader
        title={<>Here are some selected projects I&apos;ve worked on.</>}
        subTitle={
          <>
            They contain a descriptions and links to repos or sites. Most of them you can find on my{' '}
            <InlineLink href="https://github.com/prixladi" text="Github" />.
          </>
        }
      />

      <ArticleMain
        m={appearingTextInit({ delayChildren: 1 }).parent}
        className="flex flex-col gap-10 md:gap-16 md:mt-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ArticleMain>
    </Article>
  </Content>
);

export default Projects;

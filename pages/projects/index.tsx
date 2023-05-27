import type { NextPage } from 'next';
import { useMemo } from 'react';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

import InlineLink from '~/components/inline-link';
import PageContent from '~/components/page-content';
import Article, { ArticleHeader, ArticleMain } from '~/components/article';
import projects from '~/lib/data/projects';
import { appearingTextInit } from '~/lib/utils/motions';
import Tag from '~/components/tag';
import { routes } from '~/lib/constants';

import type { Project } from '~/lib/data/projects';

type ProjectProps = {
  project: Project;
};

const getYearCount = (project: Project): number => {
  if (project.toYear) {
    return project.toYear - project.fromYear + 1;
  }

  return new Date().getFullYear() - project.fromYear + 1;
};

const ProjectYears = ({ project }: ProjectProps) => {
  const yearCount = useMemo(() => getYearCount(project), [project]);

  return (
    <span className="inline text-sm font-bold text-gray-700 dark:text-gray-500">
      {project.fromYear} - {project.toYear ?? 'NOW'}{' '}
      <Tag className="bg-emerald-300 text-black dark:bg-slate-700 dark:text-emerald-300 text-xs font-bold">
        {yearCount > 1 ? `${yearCount} YEARS` : `${yearCount} YEAR`}
      </Tag>
      {!project.toYear && (
        <Tag className="ml-1 bg-orange-400 text-black dark:bg-slate-700 dark:text-orange-400 text-xs font-bold">
          WIP
        </Tag>
      )}
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
  <PageContent title="Projects | Láďa Prix" type="medium">
    <Article>
      <ArticleHeader
        title={<>Here are some selected projects I&apos;ve worked on.</>}
        subTitle={
          <>
            You can find them on my <InlineLink href="https://github.com/prixladi" text="Github" />.
            Those are just my personal projects, my professional experiences are listed on the{' '}
            <InlineLink href={routes.timeline.path} text="timeline page" />.
          </>
        }
      />

      <ArticleMain
        motion={appearingTextInit({ delayChildren: 0.5 }).parent}
        className="flex flex-col gap-10 md:gap-16 md:mt-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ArticleMain>
    </Article>
  </PageContent>
);

export default Projects;

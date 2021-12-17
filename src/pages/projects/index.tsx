import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { useMemo } from 'react';
import InlineLink from '../../components/inlineLink';
import { apearingTextInit, scaleUpHover } from '../../utils/motions';
import Content from '../../components/content';
import { defaultScaleUpHoverOptions } from '../../utils/motions/scaleUpHover';
import projects, { Project } from '../../data/projects';

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
      <Link passHref href={project.link}>
        {/* eslint-disable */}
        <a className="span items-center text-red-600 font-bold text-2xl hover:underline">
          {project.title} {isGithub ? <FaGithub className="inline-block pb-1" /> : null}
        </a>
        {/* eslint-enable */}
      </Link>
    </h3>
  );
};

const ProjectCard = ({ project }: ProjectProps) => (
  <motion.div {...apearingTextInit().children} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        {...scaleUpHover({ ...defaultScaleUpHoverOptions, scale: 1.05 })}
      />
    </div>
  </motion.div>
);

const Projects: NextPage = () => (
  <Content title="Ladislav Prix | Timeline" className="max-w-4xl">
    <main className="flex flex-col gap-8 items-center">
      <motion.div {...apearingTextInit().parent} className="w-full flex flex-col gap-4">
        <motion.div {...apearingTextInit().children}>
          <motion.h2
            {...scaleUpHover()}
            className="text-3xl md:text-4xl font-semibold duration-700 leading-tight md:leading-[3rem]"
          >
            Here are some selected projects I&apos;ve worked on.
          </motion.h2>
        </motion.div>
        <motion.div {...apearingTextInit().children}>
          <motion.p
            {...scaleUpHover()}
            className="text-xl lg:pl-2 md:text-4xl font-semibold leading-tight md:leading-[3rem] text-gray-500 dark:text-gray-400 duration-700"
          >
            They contain brief description and link to repo or site. Most of them you can find on my{' '}
            <InlineLink href="https://github.com/prixladi" text="Github" />.
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        {...apearingTextInit({ delayChildren: 1 }).parent}
        className="w-full flex flex-col gap-20 mt-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </main>
  </Content>
);

export default Projects;

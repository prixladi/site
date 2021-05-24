import { Badge, Box, Flex, Grid, Image, Icon } from '@chakra-ui/react';
import * as React from 'react';
import ExternalLink from '../../components/ExternalLink';
import H1 from '../../components/H1';
import H3 from '../../components/H3';
import Text from '../../components/Text';
import YearRange from '../../components/YearRange';
import projects, { Project } from '../../data/projects';
import { FaGithub } from 'react-icons/fa';

type ProjectProps = {
  project: Project;
};

const getYearCount = (project: Project): number => {
  if (project.toYear) {
    return project.toYear - project.fromYear;
  }

  return new Date().getFullYear() - project.fromYear;
};

const Title: React.FC<ProjectProps> = ({ project }: ProjectProps) => {
  if (project.link.includes('github.')) {
    return (
      <H3 as="h2">
        <ExternalLink href={project.link}>
          <Flex alignItems="center" gridGap="0.2em">
            {project.title} <Icon as={FaGithub} />{' '}
          </Flex>
        </ExternalLink>
      </H3>
    );
  }

  return (
    <H3>
      <ExternalLink href={project.link}>{project.title}</ExternalLink>
    </H3>
  );
};

const ProjectsCard: React.FC<ProjectProps> = ({ project }: ProjectProps) => {
  const yearCount = Math.max(1, getYearCount(project));

  return (
    <Box pt="1em" pb="1em" borderRadius="lg">
      <Grid
        gridGap={['1em', '1em', '1.5em', '2em']}
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
      >
        <Box>
          <Title project={project} /> <br />
          <Flex mb="0em" d="flex" alignItems="baseline">
            <YearRange from={project.fromYear.toString()} to={project.toYear?.toString() ?? 'now'} />
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {yearCount} { yearCount == 1 ? 'Year' : 'Years'}
            </Badge>
          </Flex>
          <Text fontSize={['1em', '1.2em', '1.3em', '1.3em']}>{project.text}</Text>
        </Box>

        <Box width="99%">
          <Image border="1px" borderRadius="1em" src={project.imgSrc} alt={project.title} />
        </Box>
      </Grid>
    </Box>
  );
};

const Projects: React.FC = () => (
  <>
    <H1>My projects.</H1>
    <Text>
      Here are some selected projects I{"'"}ve worked on. Each project has a time window I{"'"}ve worked on it, very brief description, and
      a link to a repository or in case of a non-opensource project link to an informational site.
    </Text>
    <Grid mt="1em" gridGap={['1em', '2em', '3em', '5em']}>
      {projects.map((project) => (
        <ProjectsCard project={project} key={project.title} />
      ))}
    </Grid>
  </>
);

export default Projects;

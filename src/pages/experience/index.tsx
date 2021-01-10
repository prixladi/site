import { Badge, Box, Flex } from '@chakra-ui/react';
import * as React from 'react';
import CardText from '../../components/CardText';
import ExternalLink from '../../components/ExternalLink';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import TechnologyList from '../../components/TechnologyList';
import Text from '../../components/Text';
import YearRange from '../../components/YearRange';
import { getDateRepresentation, getJobSpan } from '../../data/helpers';
import jobs, { Job } from '../../data/jobs';

type JobProps = {
  job: Job;
};

const JobCard: React.FC<JobProps> = ({ job }: JobProps) => {
  const fromString = getDateRepresentation(job.from);
  const toString = getDateRepresentation(job.to);
  const span = getJobSpan(job);

  return (
    <Box pt="1em" pb="1em" borderRadius="lg">
      <Box>
        <H3>{job.title}</H3> <br />
        <Flex mb="0em" d="flex" alignItems="baseline">
          <YearRange from={fromString} to={toString} />
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {span.years} Years {span.months} months
          </Badge>
        </Flex>
        <CardText>{job.text}</CardText>
        <TechnologyList type="sm" technologies={job.technologies}>
          Some of used <strong>technologies:</strong>
        </TechnologyList>
      </Box>
    </Box>
  );
};

const Experience: React.FC = () => (
  <>
    <H2>Work experience.</H2>
    <Text>
      I{"'"}ve started working in the tech industry in my first year at college. And I{"'"}ve been working since.
    </Text>
    {jobs.map((job) => (
      <JobCard job={job} key={job.title} />
    ))}
    <H2 mt="1em">School experience.</H2>
    <CardText>
      I{"'"}ve attended <ExternalLink href="https://gympt.cz/">Secondary Grammar School Prachatice, Zlatá Stezka 137</ExternalLink>. After
      that, I acquired a Bachelor{"'"}s degree at the{' '}
      <ExternalLink href="https://fit.cvut.cz/">Faculty of Information Technology, Czech Technical University in Prague</ExternalLink> in
      June 2020. My bachelor thesis was application <ExternalLink href="https://dspace.cvut.cz/handle/10467/88708">Treeloc</ExternalLink>.
    </CardText>
  </>
);

export default Experience;

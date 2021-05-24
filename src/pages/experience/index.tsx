import * as React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import H1 from '../../components/H1';
import JobTimelineItem from '../../components/timeline/JobTimelineItem';
import EducationTimelineItem from '../../components/timeline/EducationTimelineItem';
import Text from '../../components/Text';
import { Box } from '@chakra-ui/layout';
import InternalLink from '../../components/InternalLink';

const Experience: React.FC = () => (
  <>
    <H1 align="center">My experience timeline.</H1>
    <Text>
      Timeline of my education and jobs with brief descriptions. You can also download my resume{' '}
      <InternalLink href="/data/Resume.pdf" download="resume.pdf">
        here
      </InternalLink>
      .
    </Text>
    <Box pt="1.5em">
      <VerticalTimeline>
        <EducationTimelineItem
          name="Secondary grammar school"
          title="Basic education"
          date="September 2008 - June 2016"
          description="Secondary Grammar School Prachatice, Zlatá Stezka 137."
        />
        <JobTimelineItem
          name="Shamyr"
          title="Software developer, Designer and DevOps"
          date=" Janury 2016 - present"
          description="Shamyr is the brand that I use for freelancing and my independent projects."
        />
        <EducationTimelineItem
          name="FIT CTU"
          title="Bachelor's degree"
          date="September 2016 - May 2020"
          description="Faculty of Information Technology, Czech Technical University in Prague."
        />
        <JobTimelineItem
          name="Quest automation"
          title="Software developer, DevOps"
          date="May 2017 - December 2020"
          description="In Qest, I worked as a developer mostly focused on .NET backend. I worked on many projects including logistic platform Shipvio and
        home automation system Qest Home."
        />
        <JobTimelineItem
          name="Designeo Creative s.r.o."
          title="Software developer"
          date="February 2021 - present"
          description="In Designeo, I work as a developer mostly focused on .NET backend."
        />
      </VerticalTimeline>
    </Box>
  </>
);

export default Experience;

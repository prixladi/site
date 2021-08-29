import * as React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import H1 from '../../components/H1';
import JobTimelineItem from '../../components/timeline/JobTimelineItem';
import EducationTimelineItem from '../../components/timeline/EducationTimelineItem';
import Text from '../../components/Text';
import { Box } from '@chakra-ui/layout';
import InternalLink from '../../components/InternalLink';

const Timeline: React.FC = () => (
  <>
    <H1>My experience timeline.</H1>
    <Text>
      Timeline of my education and jobs with brief descriptions. You can also download my resume{' '}
      <InternalLink href="/data/Resume.pdf" download="resume.pdf">
        here
      </InternalLink>
      .
    </Text>
    <Box pt="1.5em">
      <VerticalTimeline>
        <JobTimelineItem
          name="Designeo Creative s.r.o."
          title="Software developer"
          date="February 2021 - present"
          link="https://designeo.cz"
          description="In Designeo, I work as a developer mostly focused on .NET backend."
        />
        <JobTimelineItem
          name="Qest automation"
          title="Software developer, DevOps"
          date="May 2017 - December 2020"
          link="https://qest.cz"
          description="In Qest, I worked as a developer mostly focused on .NET backend. I worked on many projects including logistic platform Shipvio and
        home automation system Qest Home."
        />
        <EducationTimelineItem
          name="FIT CTU"
          title="Bachelor's degree"
          date="September 2016 - May 2020"
          link="https://fit.cvut.cz/cs"
          description="Faculty of Information Technology, Czech Technical University in Prague."
        />
        <JobTimelineItem
          name="Shamyr"
          title="Software developer, Designer and DevOps"
          date="Janury 2016 - present"
          link="https://github.com/prixladi"
          description="Shamyr is the brand that I use for freelancing and my independent projects."
        />
        <EducationTimelineItem
          name="Secondary grammar school"
          title="Basic education"
          date="September 2008 - June 2016"
          link="https://gympt.cz/"
          description="Secondary Grammar School Prachatice, Zlatá Stezka 137."
        />
      </VerticalTimeline>
    </Box>
  </>
);

export default Timeline;

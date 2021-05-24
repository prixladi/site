import * as React from 'react';
import H3 from '../H3';
import 'react-vertical-timeline-component/style.min.css';
import { Box } from '@chakra-ui/layout';

type Props = {
  name: string;
  title: string;
  description: string;
};

const TimelineItemBody: React.FC<Props> = ({ name, title, description }: Props) => (
  <Box color="#fff">
    <H3>{name}</H3>
    <h4>
      <i>{title}</i>
    </h4>
    <p>{description}</p>
  </Box>
);

export default TimelineItemBody;

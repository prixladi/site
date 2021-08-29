import * as React from 'react';
import H3 from '../H3';
import 'react-vertical-timeline-component/style.min.css';
import { Box } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';

type Props = {
  name: string;
  title: string;
  description: string;
  link?: string;
};

const TimelineItemBody: React.FC<Props> = ({ name, title, description, link }: Props) => (
  <Box color="#fff">
    {link ? (
      <H3>
        <Link isExternal={true} href={link}>
          {name}
        </Link>
      </H3>
    ) : (
      <H3>{name}</H3>
    )}
    <h4>
      <i>{title}</i>
    </h4>
    <p>{description}</p>
  </Box>
);

export default TimelineItemBody;

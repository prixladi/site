import { Box, SpaceProps, Tag } from '@chakra-ui/react';
import React from 'react';
import { Technology } from '../data/types';
import CardText from './CardText';
import Text from './Text';

type Props = SpaceProps & {
  technologies: Technology[];
  type: 'sm' | 'lg';
  children: React.ReactNode;
};

type InnerProps = {
  type: 'sm' | 'lg';
  children: React.ReactNode;
};

const Inner: React.FC<InnerProps> = ({ children, type }: InnerProps) => {
  if (type === 'lg') {
    return <Text> {children}</Text>;
  }

  return <CardText> {children} </CardText>;
};

const TechnologyList: React.FC<Props> = ({ children, technologies, type }: Props) => (
  <Box mt="0.4em" d="inline-block">
    <Inner type={type}>
      {children}
      {Array.from(new Set(technologies)).map((tech) => (
        <Tag
          key={tech}
          verticalAlign="center"
          ml="0.25em"
          borderRadius="full"
          colorScheme="blue"
        >
          {tech}
        </Tag>
      ))}
    </Inner>
  </Box>
);

export default TechnologyList;

import { Heading, SpaceProps } from '@chakra-ui/react';
import React from 'react';

type Props = SpaceProps & {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
};

const H2: React.FC<Props> = ({ children, as, ...props }: Props) => (
  <Heading
    mb={'0.75em'}
    textAlign="left"
    fontSize={['1.8em', '2.2em', '2.2em', '2.5em']}
    fontWeight={700}
    as={as || 'h2'}
    {...props}
  >
    {children}
  </Heading>
);

export default H2;

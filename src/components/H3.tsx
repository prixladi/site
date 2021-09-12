import { Heading, SpaceProps } from '@chakra-ui/react';
import React from 'react';

type Props = SpaceProps & {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
};

const H3: React.FC<Props> = ({ children, as, ...props }: Props) => (
  <Heading
    textAlign="left"
    fontSize={['1.5em', '1.8em', '1.8em', '1.8em']}
    as={as || 'h3'}
    {...props}
  >
    {children}
  </Heading>
);

export default H3;

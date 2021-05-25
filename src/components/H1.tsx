import { Heading } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  align?: 'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start';
};

const H1: React.FC<Props> = ({ as, align, children }: Props) => (
  <Heading mb={'0.75em'} textAlign={align ?? 'left'} fontSize={['2.4em', '3em', '3em', '3em']} as={as || 'h1'}>
    {children}
  </Heading>
);

export default H1;

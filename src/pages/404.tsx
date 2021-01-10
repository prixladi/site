import React from 'react';
import { Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IndexRoute } from '../Routes';

const NotFound: React.FC = () => {
  return (
    <>
      <Heading textAlign="center">Page not found</Heading>
      <Text paddingTop="0.5em" fontSize="1.5em" textAlign="center">
        Requested page was not found,{' '}
        <NextLink href={IndexRoute}>
          <Link color="red.500">back to the home page? </Link>
        </NextLink>
      </Text>
    </>
  );
};

export default NotFound;

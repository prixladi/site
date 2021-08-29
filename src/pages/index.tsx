import * as React from 'react';
import { Container, Flex, Link, Icon, Grid, Box, Image } from '@chakra-ui/react';
import Text from '../components/Text';
import H2 from '../components/H2';
import H1 from '../components/H1';
import { Technology } from '../data/types';
import TechnologyList from '../components/TechnologyList';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const birthday = new Date(1996, 11, 29);

const calculateAge = () => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const technologies: Technology[] = [
  'C#',
  'ASP.NET Core',
  'TypeScript',
  'Node.js',
  'React',
  'Next.js',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
];

const Index: React.FC = () => (
  <>
    <H1>Hey, my name is Láďa.</H1>
    <Grid mb="0.5em" gridGap="1em" templateColumns={['1fr', '1fr', '1.1fr 1fr', '1.1fr 1fr']}>
      <Box>
        <Text>
          I’m a {calculateAge()} years old developer mostly interested in web development. I have been in the tech industry for more than 4
          years and I have experience with both backend and frontend web development and a little bit with hardware. In my free time, I like
          learning new technologies, biking, skiing, going to nature or watching TV series.
        </Text>
      </Box>
      <Box width="99%">
        <Image borderRadius="full" src="/images/profile.jpg" alt="profile pricture" />
      </Box>
    </Grid>
    <TechnologyList type="lg" technologies={technologies}>
      My usual tech stack:
    </TechnologyList>
    <H2 mt="1em">How to contact me.</H2>
    <Text>
      My full name is <strong>Ladislav Prix</strong> and I’m based in Prachatice and Prague, Czech Republic. You can write me an email ✉️{' '}
      <Link color="red.500" isExternal={true} href="mailto://elix78963@gmail.com">
        elix78963(at)gmail.com
      </Link>
      {', '}
      or you can contact me on social media listed below.
    </Text>
    <Container mt={'2.5em'} centerContent>
      <Flex gridGap="0.5em" fontSize="3em">
        <Link isExternal={true} href="https://github.com/prixladi">
          <Icon as={FaGithub} />
        </Link>
        <Link isExternal={true} href="https://linkedin.com/in/ladislav-prix/">
          <Icon as={FaLinkedin} />
        </Link>
        <Link isExternal={true} href="https://twitter.com">
          <Icon as={FaTwitter} />
        </Link>
        <Link isExternal={true} href="mailto://elix78963@gmail.com">
          <Icon as={FaEnvelope} />
        </Link>
      </Flex>
    </Container>
  </>
);

export default Index;

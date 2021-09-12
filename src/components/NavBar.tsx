import {
  Box,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  Text,
  MenuList,
  Icon,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { IndexRoute, ProjectsRoute, TimelineRoute } from '../Routes';
import ColorModeButton from './ColorModeButton';
import ColorModeSwitcher from './ColorModeSwitcher';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { FaBars } from 'react-icons/fa';
import { blogLink } from '../externalLinks';
import LinkText from './LinkText';

const Burger: React.FC = () => {
  const router = useRouter();

  const pushFunction = (path: string) => () => {
    router.push(path);
  };

  return (
    <Flex display={['flex', 'flex', 'none', 'none']} align="right">
      <Menu>
        <MenuButton aria-label="Toggle Menu" fontSize="3em">
          <Flex alignItems="top">
            <Icon as={FaBars} />
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={pushFunction(ProjectsRoute)}>
            <LinkText href={ProjectsRoute}>Projects</LinkText>
          </MenuItem>
          <MenuItem onClick={pushFunction(TimelineRoute)}>
            <LinkText href={TimelineRoute}>Timeline</LinkText>
          </MenuItem>
          <MenuItem onClick={pushFunction(blogLink)}>
            <LinkText href={blogLink}>Blog</LinkText>
          </MenuItem>
          <MenuItem>
            <ColorModeSwitcher />
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

const Inline: React.FC = () => (
  <Flex
    display={['none', 'none', 'flex', 'flex']}
    align="right"
    pt="0.2em"
    gridGap={['1em', '1em', '2em', '8em']}
  >
    <Flex>
      <LinkText href={ProjectsRoute}>Projects</LinkText>
    </Flex>
    <Flex>
      <LinkText href={TimelineRoute}>Timeline</LinkText>
    </Flex>
    <Flex>
      <LinkText href={blogLink}>Blog</LinkText>
    </Flex>
    <ColorModeButton />
  </Flex>
);

const NavBar: React.FC = () => (
  <Box maxH="4em">
    <Flex
      pl={['1em', '1em', '1em', '3.5em']}
      pr={['1em', '1em', '1em', '3.5em']}
      mt="1.5em"
      mb="0.5em"
      w="100%"
      as="nav"
      justify="space-between"
      bg="transparent"
    >
      <Flex align="left">
        <Text
          textTransform="uppercase"
          letterSpacing="-.1rem"
          fontWeight="300"
          align="left"
          fontSize={['1.8em', '1.8em', '2em', '2.5em']}
        >
          <NextLink href={IndexRoute}>
            <Link>Ladislav Prix</Link>
          </NextLink>
        </Text>
      </Flex>

      <Inline />
      <Burger />
    </Flex>

    <Divider mt="1em" />
  </Box>
);

export default NavBar;

import { Text, Link } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

type LinkTextProps = {
  children: React.ReactNode;
  href: string;
};

const LinkText: React.FC<LinkTextProps> = ({ children, href }: LinkTextProps) => {
  var { pathname } = useRouter();
  const isCurrent = pathname.includes(href);

  return (
    <Text align="left" fontSize={['1.4em', '1.5em', '1.6em', '1.7em']}>
      {href?.startsWith('http://') || href?.startsWith('https://') ? (
        <Link
          textDecoration={isCurrent ? 'underline' : undefined}
          target="_blank"
          href={href}
          isExternal={true}
        >
          {children}
        </Link>
      ) : (
        <NextLink href={href}>
          <Link textDecoration={isCurrent ? 'underline' : undefined}>{children}</Link>
        </NextLink>
      )}
    </Text>
  );
};

export default LinkText;

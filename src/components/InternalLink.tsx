import { Link } from '@chakra-ui/react';
import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};

const InternalLink: React.FC<Props> = ({ children, href }: Props) => (
  <Link isExternal={false} color="red.500" href={href}>
    {children}
  </Link>
);

export default InternalLink;

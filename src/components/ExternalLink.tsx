import { Link } from '@chakra-ui/react';
import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};

const ExternalLink: React.FC<Props> = ({ children, href }: Props) => (
  <Link isExternal={true} color="red.500" href={href}>
    {children}
  </Link>
);

export default ExternalLink;

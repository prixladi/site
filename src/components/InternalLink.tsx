import { Link } from '@chakra-ui/react';
import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
  download?: any;
};

const InternalLink: React.FC<Props> = ({ children, download, href }: Props) => (
  <Link download={download} isExternal={false} color="red.500" href={href}>
    {children}
  </Link>
);

export default InternalLink;

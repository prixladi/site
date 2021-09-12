import React from 'react';
import * as CSS from 'csstype';
import { LayoutProps, ResponsiveValue, SpaceProps, Text } from '@chakra-ui/react';

type Props = SpaceProps &
  LayoutProps & {
    children: React.ReactNode;
    fontSize?: ResponsiveValue<CSS.Property.FontSize<string>>;
  };

const InfoText: React.FC<Props> = ({ children, fontSize, ...props }: Props) => (
  <Text
    textAlign="justify"
    fontSize={fontSize ?? ['1.125rem', '1.125rem', '1.125rem', '1.125rem']}
    lineHeight="1.75rem"
    {...props}
  >
    {children}
  </Text>
);

export default InfoText;

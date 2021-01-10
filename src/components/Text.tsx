import React from 'react';
import * as CSS from 'csstype';
import { LayoutProps, ResponsiveValue, SpaceProps, Text } from '@chakra-ui/react';

type Props = SpaceProps &
  LayoutProps & {
    children: React.ReactNode;
    fontSize?: ResponsiveValue<CSS.Property.FontSize<string>>;
  };

const InfoText: React.FC<Props> = ({ children, fontSize, ...props }: Props) => (
  <Text textAlign="justify" fontSize={fontSize ?? ['1.3em', '1.4em', '1.5em', '1.5em']} fontWeight="300" {...props}>
    {children}
  </Text>
);

export default InfoText;

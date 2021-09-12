import * as React from 'react';
import * as CSS from 'csstype';
import { LayoutProps, ResponsiveValue, SpaceProps } from '@chakra-ui/react';
import Text from './Text';

type Props = SpaceProps &
  LayoutProps & {
    children: React.ReactNode;
    fontSize?: ResponsiveValue<CSS.Property.FontSize<string>>;
  };

const CardText: React.FC<Props> = ({ children, ...props }: Props) => (
  <Text {...props}>
    {children}
  </Text>
);

export default CardText;

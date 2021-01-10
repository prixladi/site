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
  <Text fontSize={['1em', '1.2em', '1.3em', '1.3em']} {...props}>
    {children}
  </Text>
);

export default CardText;

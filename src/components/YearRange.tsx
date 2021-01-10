import { Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  from: string;
  to: string;
};

const YearRange: React.FC<Props> = ({ from, to }: Props) => (
  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" mr="0.5em">
    {from} &bull; {to}
  </Box>
);

export default YearRange;

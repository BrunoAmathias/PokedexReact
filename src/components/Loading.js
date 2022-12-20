import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box display='flex' width='100%' height='80vh' justifyContent='center' alignItems='center'>
      <CircularProgress />
    </Box>
  );
}
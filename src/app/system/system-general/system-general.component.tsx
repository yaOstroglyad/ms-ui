import React from 'react';

import {Typography} from '@mui/material';
import Box from '@mui/material/Box';

import DataGridDemo from '../../_shared/components/table/table.component';

export const SystemGeneral: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    }}>
      <Typography variant="h5">General with table :</Typography>
      <DataGridDemo/>
    </Box>
  );
}

import React, {useEffect} from 'react';

import {Typography} from '@mui/material';
import Box from '@mui/material/Box';

import DataGridDemo from '../../_shared/components/table/table.component';
import {useHttp} from '../../_shared/modules/http/hooks/use-http';

export const SystemGeneral: React.FC = () => {
  const {operation: getSmth, data} = useHttp<{id: string;}>({url: 'https://jsonplaceholder.typicode.com/todos/1', method: 'GET'});
  useEffect(() => {
    getSmth({});
  }, []);
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    }}>
      <Typography variant="h5">General with table :</Typography>
      <DataGridDemo/>
    <div>{data?.id}</div>
    </Box>
  );
}

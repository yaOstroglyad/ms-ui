import React from 'react';

import {Container} from '@mui/material';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';
import {LOGS_SELECTION_PART_ITEMS} from './constants/logs-selection-part-items';
import {LogsRoutes} from './logs.routes';

export const Logs: React.FC = () => (
    <Container maxWidth="lg">
      <SelectionPart selectionItems={LOGS_SELECTION_PART_ITEMS}/>
      <LogsRoutes />
    </Container>
);

import React from 'react';

import {SystemRoutes} from './system.routes';
import {Container} from '@mui/material';
import {SYSTEM_SELECTION_PART_ITEMS} from './constants/system-selection-part-items';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';

export const System: React.FC = () => (
    <Container maxWidth="lg">
      <SelectionPart selectionItems={SYSTEM_SELECTION_PART_ITEMS}/>
      <SystemRoutes />
    </Container>
);

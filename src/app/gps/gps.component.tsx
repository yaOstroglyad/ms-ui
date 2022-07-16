import React from 'react';

import {Container} from '@mui/material';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';
import {GPS_SELECTION_PART_ITEMS} from './constants/gps-selection-part-items';
import {GpsRoutes} from './gps.routes';

export const Gps: React.FC = () => (
    <Container maxWidth="lg">
      <SelectionPart selectionItems={GPS_SELECTION_PART_ITEMS}/>
      <GpsRoutes />
    </Container>
);

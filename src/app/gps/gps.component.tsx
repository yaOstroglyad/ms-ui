import React from 'react';

import {Container} from '@mui/material';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';
import {GPS_SELECTION_PART_ITEMS} from './constants/gps-selection-part-items';
import {GpsRoutes} from './gps.routes';

export const Gps: React.FC = () => (
    <>
        <SelectionPart selectionItems={GPS_SELECTION_PART_ITEMS}/>
        <Container maxWidth="lg">
          <GpsRoutes />
        </Container>
    </>
);

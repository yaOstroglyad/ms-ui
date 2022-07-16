import React from 'react';

import {Container} from '@mui/material';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';
import {SerialRoutes} from './serial.routes';
import {SERIAL_SELECTION_PART_ITEMS} from './constants/serial-selection-part-items';

export const Serial: React.FC = () => (
    <>
        <SelectionPart selectionItems={SERIAL_SELECTION_PART_ITEMS}/>
        <Container maxWidth="lg">
          <SerialRoutes />
        </Container>
    </>
);

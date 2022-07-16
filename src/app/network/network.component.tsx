import React from 'react';

import {Container} from '@mui/material';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';
import {NetworkRoutes} from './network.routes';
import {NETWORK_SELECTION_PART_ITEMS} from './constants/network-selection-part-items';

export const Network: React.FC = () => (
    <>
        <SelectionPart selectionItems={NETWORK_SELECTION_PART_ITEMS}/>
        <Container maxWidth="lg">
          <NetworkRoutes />
        </Container>
    </>
);

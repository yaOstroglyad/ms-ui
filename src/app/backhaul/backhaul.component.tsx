import React from 'react';

import {Container} from '@mui/material';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';
import {BACKHAUL_SELECTION_PART_ITEMS} from './constants/backhaul-selection-part-items';
import {BackhaulRoutes} from './backhaul.routes';

export const Backhaul: React.FC = () => (
    <>
        <SelectionPart selectionItems={BACKHAUL_SELECTION_PART_ITEMS}/>
        <Container maxWidth="lg">
            <BackhaulRoutes />
        </Container>
    </>
);

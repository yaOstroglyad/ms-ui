import React from 'react';

import {Container} from '@mui/material';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';
import {ENODEB_SELECTION_PART_ITEMS} from './constants/enodeb-selection-part-items';
import {EnodebRoutes} from './enodeb.routes';

export const Enodeb: React.FC = () => (
    <Container maxWidth="lg">
      <SelectionPart selectionItems={ENODEB_SELECTION_PART_ITEMS}/>
      <EnodebRoutes />
    </Container>
);

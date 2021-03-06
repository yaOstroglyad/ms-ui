import React from 'react';

import {Container} from '@mui/material';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';
import {DIAGNOSTIC_SELECTION_PART_ITEMS} from './constants/diagnostic-selection-part-items';
import {DiagnosticRoutes} from './diagnostic.routes';

export const Diagnostic: React.FC = () => (
    <>
        <SelectionPart selectionItems={DIAGNOSTIC_SELECTION_PART_ITEMS}/>
        <Container maxWidth="lg">
            <DiagnosticRoutes />
        </Container>
    </>
);

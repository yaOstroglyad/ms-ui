import React from 'react';

import {Container} from '@mui/material';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';
import {ADMIN_SELECTION_PART_ITEMS} from './constants/admin-selection-part-items';
import {AdminRoutes} from './admin.routes';

export const Admin: React.FC = () => (
    <>
        <SelectionPart selectionItems={ADMIN_SELECTION_PART_ITEMS}/>
        <Container maxWidth="lg">
            <AdminRoutes />
        </Container>
    </>
);

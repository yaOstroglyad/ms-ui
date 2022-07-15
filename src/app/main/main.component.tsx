import React from 'react';

import './main.style.scss';
import {MainSelectionPart} from './main-selection-part/main-selection-part.component';
import {MAIN_SELECTION_PART_ITEMS} from './constants/main-selection-part-items';
import {MainRoutes} from './main-routes';
import {Container} from '@mui/material';
import DataGridDemo from '../_shared/components/table/table.component';

export const Main: React.FC = () => (
  <>
      <Container maxWidth="lg">
        <MainSelectionPart selectionItems={MAIN_SELECTION_PART_ITEMS}/>
        <main className="main">
            <DataGridDemo />
          <MainRoutes />
        </main>
      </Container>
  </>
);

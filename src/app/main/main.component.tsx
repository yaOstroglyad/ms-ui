import React from 'react';

import './main.style.scss';
import {MainSelectionPart} from './main-selection-part/main-selection-part.component';
import {MAIN_SELECTION_PART_ITEMS} from './constants/main-selection-part-items';
import {MainRoutes} from './main-routes';
import {Container} from '@mui/material';

export const Main: React.FC = () => (
  <>
      <Container maxWidth="lg">
        <MainSelectionPart selectionItems={MAIN_SELECTION_PART_ITEMS}/>
        <main className="main">
          <MainRoutes />
        </main>
      </Container>
  </>
);

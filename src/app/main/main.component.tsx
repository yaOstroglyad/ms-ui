import React from 'react';

import {Container} from '@mui/material';

import './main.style.scss';
import {MAIN_SELECTION_PART_ITEMS} from './constants/main-selection-part-items';
import {MainRoutes} from './main-routes';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';

export const Main: React.FC = () => (
  <>
    <Container maxWidth="lg">
      <SelectionPart selectionItems={MAIN_SELECTION_PART_ITEMS}/>
      <main className="main">
        <MainRoutes/>
      </main>
    </Container>
  </>
);

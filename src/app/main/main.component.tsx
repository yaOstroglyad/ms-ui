import React from 'react';
import {Outlet} from 'react-router-dom';

import './main.style.scss';
import {MainSelectionPart} from './main-selection-part/main-selection-part.component';
import {MAIN_SELECTION_PART_ITEMS} from './constants/main-selection-part-items';

export const Main: React.FC = () => (
  <>
    <MainSelectionPart selectionItems={MAIN_SELECTION_PART_ITEMS}/>
    <main className="main">
      <Outlet/>
    </main>
  </>
);

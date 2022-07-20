import React from 'react';

import {Container} from '@mui/material';

import './main.style.scss';
import {MAIN_SELECTION_PART_ITEMS} from './constants/main-selection-part-items';
import {MainRoutes} from './main-routes';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';

export const Main: React.FC = () => (
  <>
    <Container maxWidth="lg">
        <header className="container center main-bg">
            <div className="logo">
                Management System
                <strong className="str">-UI</strong>
            </div>
            <ul className="widgets">
                <li className="list">
                    <div className="typing-indicator">
                        <span style={{backgroundColor: "green"}}></span>
                        <span style={{backgroundColor: "green"}}></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
                <li className="list">
                    <div className="typing-indicator single-dot">
                        <span style={{backgroundColor: "green"}}></span>
                    </div>
                    Power
                </li>
                <li className="list">
                    <div className="typing-indicator single-dot">
                        <span></span>
                    </div>
                    Access
                </li>
                <button>Logout</button>
            </ul>
        </header>
        <div className="container main-bg" style={{margin: "140px 160px 30px 160px"}}>
          <SelectionPart selectionItems={MAIN_SELECTION_PART_ITEMS}/>
          <main className="main">
            <MainRoutes/>
          </main>
        </div>
    </Container>
  </>
);

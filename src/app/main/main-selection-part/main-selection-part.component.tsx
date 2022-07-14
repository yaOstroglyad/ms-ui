import React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom';

export interface MainSelectionPartItem {
  label: string;
  route: string;
}

type MainSelectionPartProps = {
  selectionItems: ReadonlyArray<MainSelectionPartItem>;
};

export const MainSelectionPart: React.FC<MainSelectionPartProps> = ({selectionItems}) => (
  <Box sx={{width: '100%'}}>
    <Tabs aria-label="main-navigation-part" value={false}>
      {selectionItems.map(item => (
        <Tab component={Link} to={item.route} label={item.label} key={item.route} />
      ))}
    </Tabs>
  </Box>
);
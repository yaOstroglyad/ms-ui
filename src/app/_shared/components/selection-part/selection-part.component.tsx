import React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom';
import {SelectionPartPropsInterface} from 'app/_shared/constants/selection-part-props.interface';

export const SelectionPart: React.FC<SelectionPartPropsInterface> = ({selectionItems}) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Tabs  TabIndicatorProps={{style: {display: "none"}}}
                   value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons={false}
                  allowScrollButtonsMobile
                  aria-label="main-navigation-part">
                {selectionItems.map(item => (
                    <Tab component={Link} to={item.route} label={item.label} key={item.route}/>
                ))}
            </Tabs>
        </Box>
    );
}

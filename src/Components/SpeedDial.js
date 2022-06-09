import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ContrastIcon from '@mui/icons-material/Contrast';
import AutoModeIcon from '@mui/icons-material/AutoMode';

const ModeSpeedDial = (props) => {
    return (
            <SpeedDial
                ariaLabel="Theme mode selection speed dial circle."
                sx={{ position: 'fixed', bottom: { xs: '5rem', md: '10%'}, right: {xs: '1rem', md: '5rem'}, zIndex: 10 }}
                icon={<AutoModeIcon />}
            >
                <SpeedDialAction
                    key='light'
                    icon={<LightModeIcon />}
                    tooltipTitle='Light Mode'
                    onClick={() => {props.setTheme('light')}}
                />
                <SpeedDialAction
                    key='dark'
                    icon={<NightlightIcon />}
                    tooltipTitle='Dark Mode'
                    onClick={() => {props.setTheme('dark')}}
                />
                <SpeedDialAction
                    key='contrast'
                    icon={<ContrastIcon />}
                    tooltipTitle='High Contrast'
                    onClick={() => {props.setTheme('contrast')}}
                />
            </SpeedDial>
    );
}
export default ModeSpeedDial
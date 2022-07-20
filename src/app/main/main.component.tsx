import React, {useEffect} from 'react';

import {Container} from '@mui/material';

import './main.style.scss';
import {MAIN_SELECTION_PART_ITEMS} from './constants/main-selection-part-items';
import {MainRoutes} from './main-routes';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';
import {useHttp} from '../_shared/modules/http/hooks/use-http';
import {LedInfo} from './constants/led-info';

export interface Protocol {
    color: string;
    interval: string;
}

interface MaskConfig {
    mask: number;
    protocol: Protocol;
}

const calculateLedFrequency = (number: number | undefined, maskConfig: MaskConfig[]): Protocol => {
    if(!number) {
        return {color: 'grey', interval: ''}
    }
    const config = maskConfig.find(m => (number & m.mask) > 0);
    return config?.protocol ?? {color: 'grey', interval: ''};
};

const strip1LedConfig: MaskConfig[] = [
    {mask: 32, protocol: {color: "green", interval: "hz-1"}},
    {mask: 1, protocol: {color: "green", interval: "hz-05"}},
]
const strip2LedConfig: MaskConfig[] = [
    {mask: 64, protocol: {color: "green", interval: "hz-1"}},
    {mask: 2, protocol: {color: "green", interval: "hz-05"}}
]
const strip3LedConfig: MaskConfig[] = [
    {mask: 128, protocol: {color: "green", interval: "hz-1"}},
    {mask: 3, protocol: {color: "green", interval: "hz-05"}}
]
const strip4LedConfig: MaskConfig[] = [
    {mask: 8, protocol: {color: "green", interval: "hz-05"}}
]
const strip5LedConfig: MaskConfig[] = [
    {mask: 16, protocol: {color: "green", interval: "hz-05"}}
]

export const Main: React.FC = () => {

    const {operation: fetchLedInfo, data: ledInfo} = useHttp<LedInfo>({url: '/api/led/info', method: 'GET'});
    useEffect(() => {
        setInterval(() => {
            fetchLedInfo({});
        }, 1000);
    }, []);

    const initPowerLedProtocol = (protocolNumber: number | undefined): Protocol => {

        let protocol: Record<number, Protocol> = {
            2: {color: "red", interval: ""},
            4: {color: "green", interval: ""},
            6: {color: "orange", interval: ""},
            10: {color: "red", interval: "hz-05"},
            12: {color: "green", interval: "hz-05"},
            16: {color: "orange", interval: "hz-05"},
            18: {color: "red", interval: "hz-1"},
            20: {color: "green", interval: "hz-1"},
            22: {color: "orange", interval: "hz-1"},
            26: {color: "red", interval: "hz-1"},
            30: {color: "green", interval: "hz-1"},
            32: {color: "orange", interval: "hz-1"},
            58: {color: "red", interval: "hz-1"},
            60: {color: "green", interval: "hz-1"},
            62: {color: "orange", interval: "hz-1"}
        }

        if(protocolNumber) {
            return protocol[protocolNumber] ? protocol[protocolNumber] : protocol[2];
        }

        return protocol[2];
    }

    const initAccessLedProtocol = (protocolNumber: number | undefined): Protocol => {

        let protocol: Record<number, Protocol> = {
            0: {color: "gray", interval: ""},
            1: {color: "green", interval: "hz-05"},
            2: {color: "green", interval: "hz-1"},
            3: {color: "green", interval: "hz-2"},
            7: {color: "green", interval: ""},
        }

        if(protocolNumber) {
            return protocol[protocolNumber] ? protocol[protocolNumber] : protocol[0];
        }

        return protocol[0];
    }

    return (
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
                            <span className={calculateLedFrequency(ledInfo?.stripLed, strip1LedConfig).interval}
                                  style={{backgroundColor: calculateLedFrequency(ledInfo?.stripLed, strip1LedConfig).color}}></span>

                            <span className={calculateLedFrequency(ledInfo?.stripLed, strip2LedConfig).interval}
                                  style={{backgroundColor: calculateLedFrequency(ledInfo?.stripLed, strip2LedConfig).color}}></span>

                            <span className={calculateLedFrequency(ledInfo?.stripLed, strip3LedConfig).interval}
                                  style={{backgroundColor: calculateLedFrequency(ledInfo?.stripLed, strip3LedConfig).color}}></span>

                            <span className={calculateLedFrequency(ledInfo?.stripLed, strip4LedConfig).interval}
                                  style={{backgroundColor: calculateLedFrequency(ledInfo?.stripLed, strip4LedConfig).color}}></span>

                            <span className={calculateLedFrequency(ledInfo?.stripLed, strip5LedConfig).interval}
                                  style={{backgroundColor: calculateLedFrequency(ledInfo?.stripLed, strip5LedConfig).color}}></span>
                        </div>
                    </li>
                    <li className="list">
                        <div className="typing-indicator single-dot">
                            <span className={initPowerLedProtocol(ledInfo?.powerLed).interval}
                                  style={{backgroundColor: initPowerLedProtocol(ledInfo?.powerLed).color}}></span>
                        </div>
                        Power
                    </li>
                    <li className="list">
                        <div className="typing-indicator single-dot">
                            <span className={initAccessLedProtocol(ledInfo?.accessLed).interval}
                                  style={{backgroundColor: initAccessLedProtocol(ledInfo?.accessLed).color}}></span>
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
    </>)
};

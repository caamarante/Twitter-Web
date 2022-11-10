import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export function Color() {
    
    return(
        <div 
            className={clsx(   
                'font-sans text-black',
                )}
        >
            <ul>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#000000', margin: '5px'}}>
                    </div>
                    Black #000000
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#17202A', margin: '5px'}}>
                    </div>
                    Dark 1 #17202A
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#1C2733', margin: '5px'}}>
                    </div>
                    Dark 2 #1C2733
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#283340', margin: '5px'}}>
                    </div>
                    Dark 3 #283340
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#3A444C', margin: '5px'}}>
                    </div>
                    Dark 4 #3A444C
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#5B7083', margin: '5px'}}>
                    </div>
                    Dark 5 #5B7083
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#8899A6', margin: '5px'}}>
                    </div>
                    Dark 6 #8899A6
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#EBEEF0', margin: '5px'}}>
                    </div>
                    Dark 7 #EBEEF0
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#F7F9FA', margin: '5px'}}>
                    </div>
                    Dark 8 #F7F9FA
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#1DA1F2', margin: '5px'}}>
                    </div>
                    Primary Blue #1DA1F2
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#0073BF', margin: '5px'}}>
                    </div>
                    Dark Blue #0073BF
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: '#FFFFFF', margin: '5px'}}>
                    </div>
                    White #FFFFFF
                </li>
                <li style={{ display: 'flex', alignItems: 'center'}}>
                    <div  style={{width: '32px', height: '32px', background: 'transparent', margin: '5px', border: '1px solid black'}}>
                    </div>
                    Transparent transparent
                </li>
            </ul>
        </div>
    )
}
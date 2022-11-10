import { clsx } from 'clsx';
import style from './Spacer.module.scss';

export interface SpacerProps {
    mode?: 'light' | 'dark';
}

export function Spacer({mode} : SpacerProps) {
    return (
        <div className={clsx(`${style.divisoria}`, {
            'bg-dark-800 border-t border-dark-700': mode === 'light',
            'bg-dark-200 border-t border-dark-400': mode === 'dark',

        })}></div>
    )
}
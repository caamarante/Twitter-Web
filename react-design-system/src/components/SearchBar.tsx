import { clsx } from 'clsx';
import style from './SearchBar.module.scss';

export interface SearchBarProps {
    mode?: 'light' | 'dark';
    className?: string;
}

export function SearchBar({mode, className} : SearchBarProps) {
    return (
     <input type="text" placeholder="Search Twitter" className={clsx(`${style.searchBar} ${className}`,{
        'bg-dark-700 text-dark-500': mode === 'light',
        'bg-dark-300 text-dark-600': mode === 'dark',

     })} />
    )
}
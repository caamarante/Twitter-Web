import { clsx } from 'clsx';
import { Follow } from './Follow';
import { Heading } from './Heading';

export interface CardFollowProps {
    mode?: 'light' | 'dark';
    className?: string;
}

export function CardFollow({mode, className}: CardFollowProps) {
    return (
        <div className={clsx(`w-96 py-2.5 rounded-2xl ${className}`,{'bg-dark-300': mode === 'dark', 'bg-dark-800': mode === 'light'})}>
            <Heading size='h2'  className={clsx('tracking-wide leading-5 h-9 px-3.5 flex items-center',{
                    ' text-black border-b border-dark-700': mode === 'light',
                    ' text-white border-b border-dark-400': mode === 'dark',
                })}>
                You might like
            </Heading>
            <Follow mode={mode} nome='Bessie Cooper' user='@alessandroveronezi'></Follow>
            <Follow mode={mode} nome='Jenny Wilson' user='@gabrielcantarin'></Follow>
            <a href="" className='no-underline text-primary-blue flex items-center text-xs h-9  px-3.5'>Show more</a>
        </div>
    )
}
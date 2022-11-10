import { clsx } from 'clsx';
import { Heading } from './Heading';
import { BackArrow, TopTweetDefault } from './IconSet';
import { Text } from './Text';

export interface HeaderProps {
    mode?: 'light' | 'dark';
}

export function Header({mode = 'light' }: HeaderProps) {
    return(    
        <div className={clsx('flex w-auto h-14 px-3.5 items-center justify-between',
            {
                'bg-dark-300 border-b border-dark-400': mode === 'dark',
                ' border-b border-dark-700': mode === 'light',
            })}>
            <Heading size='h3' className={clsx({
                'text-white': mode === 'dark',
                'text-black': mode === 'light',
            })}> 
                Home
            </Heading>
            <TopTweetDefault></TopTweetDefault>
        </div>
    )
}

export function HeaderProfile({mode = 'light'}: HeaderProps) {
    return (
        <div className={clsx('flex w-auto h-14 px-3.5 items-center',
        {
            'bg-dark-300 border-b border-dark-400': mode === 'dark',
            ' border-b border-dark-700': mode === 'light',
        })}>
            <BackArrow></BackArrow>
            <div className='ml-9 flex flex-col'>
                <Heading size='h3' className={clsx('leading-5',{
                    'text-white': mode === 'dark',
                    'text-black': mode === 'light',
                })}>
                    Nome
                </Heading>
                <Text size='13px' className={clsx({
                    'text-dark-600': mode === 'dark',
                    'text-dark-500': mode === 'light',
                })}>
                    9 Tweets
                </Text>
            </div>

        </div>
    )
}
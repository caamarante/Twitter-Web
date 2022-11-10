import { clsx } from 'clsx';
import { Avatar } from './Avatar';
import { Heading } from './Heading';
import { Text } from './Text';
import { ProfileMore } from './IconSet';

export interface ProfileProps {
    mode?: 'light' | 'dark';
}

export function ProfileCard({mode = 'light' }: ProfileProps) {
    return(    
        <div className={clsx('flex w-64 h-16 pt-2.5 pb-5 justify-between',{'bg-dark-300': mode === 'dark'})}>
            <div className='flex'>
                <Avatar size='sm'></Avatar>
                <div className='ml-2.5'>
                    <Heading size='h4' className={clsx('leading-5',{
                        'text-white': mode === 'dark',
                        'text-black': mode === 'light',
                    })}>
                        Davide Biscuso
                    </Heading>
                    <Text size='16px' className={clsx('leading-5',{
                        'text-dark-600': mode === 'dark',
                        'text-dark-500': mode === 'light',
                    })}>@biscuttu</Text>
                </div>
            </div>
            <ProfileMore mode={mode}></ProfileMore>
        </div>
    )
}
import { clsx } from 'clsx';
import { Avatar } from './Avatar';
import { Heading } from './Heading';
import { Text } from './Text';
import { ProfileMore } from './IconSet';
import { Button } from './Button';

export interface FollowProps {
    mode?: 'light' | 'dark';
    nome?: string;
    user?: string;
}

export function Follow({mode = 'light', nome, user }: FollowProps) {
    return(    
        <div className={clsx('flex w-96 h-16 py-2.5 px-4 items-center justify-between',{'bg-dark-300 border-b border-dark-400': mode === 'dark', 'bg-dark-800  border-b border-dark-700': mode === 'light'})}>
            <div className='flex'>
                <Avatar size='sm'></Avatar>
                <div className='ml-2.5'>
                    <Heading size='h4' className={clsx('leading-5',{
                        'text-white': mode === 'dark',
                        'text-black': mode === 'light',
                    })}>
                        {nome}
                    </Heading>
                    <Text size='16px' className={clsx('leading-5',{
                        'text-dark-600': mode === 'dark',
                        'text-dark-500': mode === 'light',
                    })}>{user}</Text>
                </div>
            </div>
            <Button size='sm' color='secondary' className=' flex items-center px-4'>Follow</Button>
        </div>
    )
}
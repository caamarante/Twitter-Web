import { clsx } from 'clsx';
import { EmojiDefault, GIFDefault, MediaDefault, PollDefault, ScheduleDefault } from './IconSet';
import style from './Post.module.scss'
import { Avatar } from './Avatar';
import { Button } from './Button';

export interface PostProps {
    mode?: 'light' | 'dark';
}

export function Post({mode = 'light' }: PostProps) {
    return(
        <div className={clsx('flex px-2.5 py-3.5',
        {
            'bg-dark-300 border-b-white': mode === 'dark',
            ' border-b-dark-400': mode === 'light',
        })}>
            <Avatar size='md'></Avatar>
            <form className={style.feed__tweetar__form}>
                <textarea placeholder="What's happening?" className={clsx(`${style.textareaTweetar}`,{
                    'text-dark-600': mode === 'dark',
                    'text-dark-500': mode === 'light',
                })}></textarea>
                <div className={'flex justify-between items-center'}>
                    <ul className='flex'>
                        <li className='pr-4'><MediaDefault></MediaDefault></li>
                        <li className='pr-4'><GIFDefault></GIFDefault></li>
                        <li className='pr-4'><PollDefault></PollDefault></li>
                        <li className='pr-4'><EmojiDefault></EmojiDefault></li>
                        <li className='pr-4'><ScheduleDefault></ScheduleDefault></li>
                    </ul>
                    <Button size='md' className='w-20 bg-primary-blue-opacity text-white hover:bg-primary-blue'>Tweet</Button>
                </div>
            </form>
        </div>
    )
}
import { clsx } from 'clsx';
import { Avatar } from './Avatar';
import { Heading } from './Heading';
import { Text } from './Text';
import imageFile from '../assets/Post1.jpg';
import style from './Tweet.module.scss'
import { CommentDefault, LikeDefault, RetweetDefault, ShareDefault } from './IconSet';

export interface TweetProps {
    mode?: 'light' | 'dark';
}

const image = {
    src: imageFile,
    alt: 'Postagem',
  };

export function Tweet({mode} : TweetProps) {
    return (
        <div className={clsx(`${style.postFeed}`,{
            'bg-dark-200 border-t border-dark-400' : mode === 'dark',
            'border-t border-dark-700' : mode === 'light',
        })}>
            <Avatar size='md'></Avatar>
            <div className='flex flex-col ml-2.5'>
                <div className='flex items-center'>
                    <Heading size='h5' className={clsx({
                            ' text-black': mode === 'light',
                            ' text-white': mode === 'dark',
                        })}>
                        Devon Lane
                    </Heading>
                    <Text size='15px' className={clsx('ml-1',{
                            ' text-dark-500': mode === 'light',
                            ' text-dark-600': mode === 'dark',
                        })}>
                        @johndue · 23s
                    </Text>
                </div>
                <Text size='15px' className={clsx({
                        ' text-black': mode === 'light',
                        ' text-white': mode === 'dark',
                    })}>
                    Tom is in a big hurry.
                </Text>
                <img src={image.src} alt={image.alt} className=' rounded-2xl my-2.5'/>
                <ul className='grid grid-cols-4'>
                    <li className='flex items-center'>
                        <CommentDefault mode={mode} size='18' className='mr-2.5'></CommentDefault>
                        <Text size='13px' className={clsx({
                                ' text-dark-500': mode === 'light',
                                ' text-dark-600': mode === 'dark',
                            })}>
                            61
                        </Text>
                    </li>
                    <li className='flex items-center'>
                        <RetweetDefault mode={mode} size='18' className='mr-2.5'></RetweetDefault>
                        <Text size='13px' className={clsx({
                                ' text-dark-500': mode === 'light',
                                ' text-dark-600': mode === 'dark',
                            })}>
                            12
                        </Text>
                    </li>
                    <li className='flex items-center'>
                        <LikeDefault mode={mode} size='18' className='mr-2.5'></LikeDefault>
                        <Text size='13px' className={clsx({
                                ' text-dark-500': mode === 'light',
                                ' text-dark-600': mode === 'dark',
                            })}>
                            6.2K
                        </Text>
                    </li>
                    <li className='flex items-center'>
                        <ShareDefault mode={mode} size='18' className='mr-2.5'></ShareDefault>
                        <Text size='13px' className={clsx({
                                ' text-dark-500': mode === 'light',
                                ' text-dark-600': mode === 'dark',
                            })}>
                            61
                        </Text>
                    </li>
                </ul>
                <a href="#" className='no-underline text-primary-blue flex items-center text-xs h-9'>Show this thread</a>
            </div>
            
        </div>
    )
}
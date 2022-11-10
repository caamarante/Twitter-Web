import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Heading } from './Heading';
import { Bookmarks, ExploreDefault, HomeDefault, ListsDefault, MessagesDefault, MoreDefault, NotificationsDefault, ProfileDefault } from './IconSet';

export interface MenuItemProps {
    mode?: 'dark' | 'light';
    children: ReactNode;
}

export function Home({mode = 'light'}: MenuItemProps) {
    return(
        <li className={clsx('flex w-64 h-16 items-center',{'bg-dark-300': mode === 'dark'})}>
            <HomeDefault  mode={mode} className='ml-2.5'></HomeDefault>
            <Heading size='h3' className={clsx('ml-5 hover:text-primary-blue',{
                'text-white': mode === 'dark',
                'text-black': mode === 'light',
            })}>
                Home
            </Heading>
        </li>
    )
}
export function Explore({mode = 'light'}: MenuItemProps) {
    return(
        <li className={clsx('flex w-64 h-16 items-center',{'bg-dark-300': mode === 'dark'})}>
            <ExploreDefault  mode={mode} className='ml-2.5'></ExploreDefault>
            <Heading size='h3' className={clsx('ml-5  hover:text-primary-blue',{
                'text-white': mode === 'dark',
                'text-black': mode === 'light',
            })}>
                Explore
            </Heading>
        </li>
    )
}

export function Notifications({mode = 'light'}: MenuItemProps) {
    return(
        <li className={clsx('flex w-64 h-16 items-center',{'bg-dark-300': mode === 'dark'})}>
            <NotificationsDefault  mode={mode} className='ml-2.5'></NotificationsDefault>
            <Heading size='h3' className={clsx('ml-5  hover:text-primary-blue',{
                'text-white': mode === 'dark',
                'text-black': mode === 'light',
            })}>
                Notifications
            </Heading>
        </li>
    )
}

export function Messages({mode = 'light'}: MenuItemProps) {
    return(
        <li className={clsx('flex w-64 h-16 items-center',{'bg-dark-300': mode === 'dark'})}>
            <MessagesDefault  mode={mode} className='ml-2.5'></MessagesDefault>
            <Heading size='h3' className={clsx('ml-5  hover:text-primary-blue',{
                'text-white': mode === 'dark',
                'text-black': mode === 'light',
            })}>
                Messages
            </Heading>
        </li>
    )
}

export function BookmarksDefault({mode = 'light'}: MenuItemProps) {
    return(
        <li className={clsx('flex w-64 h-16 items-center',{'bg-dark-300': mode === 'dark'})}>
            <Bookmarks  mode={mode} className='ml-2.5'></Bookmarks>
            <Heading size='h3' className={clsx('ml-5  hover:text-primary-blue',{
                'text-white': mode === 'dark',
                'text-black': mode === 'light',
            })}>
                Bookmarks
            </Heading>
        </li>
    )
}

export function Lists({mode = 'light'}: MenuItemProps) {
    return(
        <li className={clsx('flex w-64 h-16 items-center',{'bg-dark-300': mode === 'dark'})}>
            <ListsDefault  mode={mode} className='ml-2.5'></ListsDefault>
            <Heading size='h3' className={clsx('ml-5  hover:text-primary-blue',{
                'text-white': mode === 'dark',
                'text-black': mode === 'light',
            })}>
                Lists
            </Heading>
        </li>
    )
}

export function Profile({mode = 'light'}: MenuItemProps) {
    return(
        <li className={clsx('flex w-64 h-16 items-center',{'bg-dark-300': mode === 'dark'})}>
            <ProfileDefault  mode={mode} className='ml-2.5'></ProfileDefault>
            <Heading size='h3' className={clsx('ml-5  hover:text-primary-blue',{
                'text-white': mode === 'dark',
                'text-black': mode === 'light',
            })}>
                Profile
            </Heading>
        </li>
    )
}

export function More({mode = 'light'}: MenuItemProps) {
    return(
        <li className={clsx('flex w-64 h-16 items-center',{'bg-dark-300': mode === 'dark'})}>
            <MoreDefault  mode={mode} className='ml-2.5'></MoreDefault>
            <Heading size='h3' className={clsx('ml-5  hover:text-primary-blue',{
                'text-white': mode === 'dark',
                'text-black': mode === 'light',
            })}>
                More
            </Heading>
        </li>
    )
}
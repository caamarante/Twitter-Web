import { clsx } from 'clsx';
import { Logo } from './IconSet';
import { BookmarksDefault, Explore, Home, Lists, Messages, More, Notifications, Profile } from './MenuItem';
import { Button } from './Button';
import { ProfileCard } from './Profile';

export interface SideMenuProps {
    mode?: 'light' | 'dark';
    className?: string;
}

export function SideMenu({mode = 'light',className='w-64 h-screen flex flex-col justify-between'} : SideMenuProps) {
    return (
        <div  className={clsx(` ${className}`,{'bg-dark-300': mode === 'dark'})}>
            <div className={clsx('w-64 pt-2.5',{'bg-dark-300': mode === 'dark'})}>
                <Logo className='flex items-center ml-2.5' size='24' mode={mode}></Logo>
                <ul>
                    <li><a href="NotFound.html"><Home mode={mode}>Home</Home></a></li>
                    <li><a href="#"><Explore mode={mode}>Explore</Explore></a></li>
                    <li><a href="#"><Notifications mode={mode}>Notifications</Notifications></a></li>
                    <li><a href="#"><Messages mode={mode}>Messages</Messages></a></li>
                    <li><a href="#"><BookmarksDefault mode={mode}>Bookmarks</BookmarksDefault></a></li>
                    <li><a href="#"><Lists mode={mode}>Lists</Lists></a></li>
                    <li><a href="#"><Profile mode={mode}>Profile</Profile></a></li>
                    <li><a href="#"><More mode={mode}>More</More></a></li>
                </ul>
                <Button className='w-56 my-4 bg-primary-blue hover:bg-dark-blue text-white' size='lg'>Tweet</Button>
            </div>
            <ProfileCard mode={mode}></ProfileCard>
        </div>
    )
}
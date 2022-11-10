import { Meta } from '@storybook/react'

import { BookmarksDefault, Explore, Home, Lists, MenuItemProps, Messages, More, Notifications, Profile } from './MenuItem'



export default {

    title: 'Components/MenuItem',

    argTypes: {

        mode: { control: 'select', options: ['light', 'dark'] }

    }

} as Meta<MenuItemProps>



export const HomeDefault = (args: MenuItemProps) => {

    return (

        <Home {...args}></Home>

    )
}

export const ExploreDefault = (args: MenuItemProps) => {

    return (

        <Explore {...args}></Explore>

    )
}

export const NotificationsDefault = (args: MenuItemProps) => {

    return (

        <Notifications {...args}></Notifications>

    )
}

export const MessagesDefault = (args: MenuItemProps) => {

    return (

        <Messages {...args}></Messages>

    )
}

export const Bookmarks = (args: MenuItemProps) => {

    return (

        <BookmarksDefault {...args}></BookmarksDefault>

    )
}

export const ListsDefault = (args: MenuItemProps) => {

    return (

        <Lists {...args}></Lists>

    )
}

export const ProfileDefault = (args: MenuItemProps) => {

    return (

        <Profile {...args}></Profile>

    )
}

export const MoreDefault = (args: MenuItemProps) => {

    return (

        <More {...args}></More>

    )
}

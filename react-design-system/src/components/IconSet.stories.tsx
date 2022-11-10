import { Meta } from '@storybook/react'

import { BackArrow, Bookmarks, BookmarksSelected, Calendar, EmojiDefault, ExploreDefault, ExploreSelected, GIFDefault, HomeDefault, HomeSelected, IconSetProps, LikeDefault, LikeSelected, ListsDefault, ListsSelected, Location, Logo, MediaDefault, MessagesDefault, MessagesSelected, MoreDefault, NotificationsDefault, NotificationsSelected, PollDefault, ProfileDefault, ProfileMore, ProfileSelected, RetweetDefault, ScheduleDefault, ShareDefault, TopTweetDefault } from './IconSet'



export default {

    title: 'Components/IconSet',

    argTypes: {

        mode: { control: 'select', options: ['light', 'dark'] }

    }

} as Meta<IconSetProps>



export const BackArrowComponent = (args: IconSetProps) => {

    return (

        <BackArrow {...args}></BackArrow>

    )

}

export const BookmarksComponent = (args: IconSetProps) => {

    return (

        <Bookmarks {...args}></Bookmarks>

    )

}

export const BookmarksComponentSelected = (args: IconSetProps) => {

    return (

        <BookmarksSelected {...args}></BookmarksSelected>

    )

}

export const CalendarComponent = (args: IconSetProps) => {

    return (

        <Calendar  {...args}></Calendar>

    )
}

export const EmojiComponent = (args: IconSetProps) => {

    return (

        <EmojiDefault  {...args}></EmojiDefault>

    )
}

export const ExploreComponent = (args: IconSetProps) => {

    return (

        <ExploreDefault  {...args}></ExploreDefault>

    )
}

export const ExploreComponentSelected = (args: IconSetProps) => {

    return (

        <ExploreSelected  {...args}></ExploreSelected>

    )
}

export const GIFComponent = (args: IconSetProps) => {

    return (

        <GIFDefault  {...args}></GIFDefault>

    )
}

export const HomeComponent = (args: IconSetProps) => {

    return (

        <HomeDefault  {...args}></HomeDefault>

    )
}

export const HomeComponentSelected = (args: IconSetProps) => {

    return (

        <HomeSelected  {...args}></HomeSelected>

    )
}

export const LikeComponent = (args: IconSetProps) => {

    return (

        <LikeDefault  {...args}></LikeDefault>

    )
}

export const LikeComponentSelected = (args: IconSetProps) => {

    return (

        <LikeSelected  {...args}></LikeSelected>

    )
}

export const ListsComponent = (args: IconSetProps) => {

    return (

        <ListsDefault  {...args}></ListsDefault>

    )
}

export const ListsComponentSelected = (args: IconSetProps) => {

    return (

        <ListsSelected  {...args}></ListsSelected>

    )
}

export const LocationComponent = (args: IconSetProps) => {

    return (

        <Location  {...args}></Location>

    )
}

export const LogoComponent = (args: IconSetProps) => {

    return (

        <Logo  {...args}></Logo>

    )
}

export const MediaComponent = (args: IconSetProps) => {

    return (

        <MediaDefault  {...args}></MediaDefault>

    )
}

export const MessagesComponent = (args: IconSetProps) => {

    return (

        <MessagesDefault  {...args}></MessagesDefault>

    )
}

export const MessagesComponentSelected = (args: IconSetProps) => {

    return (

        <MessagesSelected  {...args}></MessagesSelected>

    )
}

export const MoreComponent = (args: IconSetProps) => {

    return (

        <MoreDefault  {...args}></MoreDefault>

    )
}

export const NotificationsComponent = (args: IconSetProps) => {

    return (

        <NotificationsDefault  {...args}></NotificationsDefault>

    )
}

export const NotificationsComponentSelected = (args: IconSetProps) => {

    return (

        <NotificationsSelected  {...args}></NotificationsSelected>

    )
}

export const PollComponent = (args: IconSetProps) => {

    return (

        <PollDefault  {...args}></PollDefault>

    )
}

export const ProfileComponent = (args: IconSetProps) => {

    return (

        <ProfileDefault  {...args}></ProfileDefault>

    )
}

export const ProfileComponentSelected = (args: IconSetProps) => {

    return (

        <ProfileSelected  {...args}></ProfileSelected>

    )
}

export const ProfileMoreComponent = (args: IconSetProps) => {

    return (

        <ProfileMore  {...args}></ProfileMore>

    )
}

export const RetweetComponent = (args: IconSetProps) => {

    return (

        <RetweetDefault  {...args}></RetweetDefault>

    )
}

export const ScheduleComponent = (args: IconSetProps) => {

    return (

        <ScheduleDefault  {...args}></ScheduleDefault>

    )
}

export const ShareComponent = (args: IconSetProps) => {

    return (

        <ShareDefault  {...args}></ShareDefault>

    )
}

export const TopTweetComponent = (args: IconSetProps) => {

    return (

        <TopTweetDefault  {...args}></TopTweetDefault>

    )
}

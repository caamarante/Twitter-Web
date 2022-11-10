import { Meta, StoryObj} from '@storybook/react'
import { ProfileCard, ProfileProps } from './Profile'

export default {
    title: 'Components/Profile',
    component: ProfileCard,
    args: {
        mode: 'light',
    },
    mode: {
        table: {
            disable: true,
        }
    }
} as Meta<ProfileProps>

export const ProfileDefault: StoryObj<ProfileProps> = {
    args: {
        mode: 'light',
    }
}

export const ProfileDark: StoryObj<ProfileProps> = {
    args: {
        mode: 'dark',
    }
}
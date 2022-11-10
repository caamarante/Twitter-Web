import { Meta, StoryObj} from '@storybook/react'
import { Follow, FollowProps } from './Follow'

export default {
    title: 'Components/Follow',
    component: Follow,
    args: {
        mode: 'light',
    },
    mode: {
        table: {
            disable: true,
        }
    }
} as Meta<FollowProps>

export const FollowDefault: StoryObj<FollowProps> = {
    args: {
        mode: 'light',
        nome: 'Bessie Cooper',
        user: '@alessandroveronezi'
    }
}

export const FollowDark: StoryObj<FollowProps> = {
    args: {
        mode: 'dark',
        nome: 'Bessie Cooper',
        user: '@alessandroveronezi'
    }
}
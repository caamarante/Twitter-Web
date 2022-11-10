import { Meta, StoryObj} from '@storybook/react'
import { CardFollow, CardFollowProps } from './CardFollow'

export default {
    title: 'Components/CardFollow',
    component: CardFollow,
    args: {
        mode: 'light',
    },
    argTypes: {
        mode: {
            table: {
                disable: true,
            }
        }
    }
    
} as Meta<CardFollowProps>

export const CardFollowDefault: StoryObj<CardFollowProps> = {
    args: {
        mode: 'light',

    }
}

export const CardFollowDark: StoryObj<CardFollowProps> = {
    args: {
        mode: 'dark',
    }
}
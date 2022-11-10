import { Meta, StoryObj} from '@storybook/react'
import { Tweet, TweetProps } from './Tweet'

export default {
    title: 'Components/Tweet',
    component: Tweet,
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
} as Meta<TweetProps>

export const TweetDefault: StoryObj<TweetProps> = {
    args: {
        mode: 'light',
    }
}

export const TweetDark: StoryObj<TweetProps> = {
    args: {
        mode: 'dark',
    }
}
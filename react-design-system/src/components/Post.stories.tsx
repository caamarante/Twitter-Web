import { Meta, StoryObj} from '@storybook/react'
import { Post, PostProps } from './Post'

export default {
    title: 'Components/Post',
    component: Post,
    args: {

    },
    argTypes: {
        mode: {
            table: {
                disable: true
            }
        }
    }
} as Meta<PostProps>

export const PostDefault: StoryObj<PostProps> = {
    args: {
        mode: 'light',
    }
}
export const PostDark: StoryObj<PostProps> = {
    args: {
        mode: 'dark',
    }
}
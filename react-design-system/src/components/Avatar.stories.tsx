import { Meta, StoryObj} from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar'

export default {
    title: 'Components/Avatar',
    component: Avatar,
    args: {
    },
    argTypes: {
        size: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<AvatarProps>

export const AvatarSmall: StoryObj<AvatarProps> = {
    args: {
        size: 'sm',
    }
}

export const AvatarMedium: StoryObj<AvatarProps> = {
    args: {
        size: 'md',
    }
}
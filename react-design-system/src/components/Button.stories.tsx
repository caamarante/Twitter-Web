import { Meta, StoryObj} from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Tweet',
    },
    argTypes: {
        asChild: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args: {
        color: 'primary',
        size: 'lg'
    }
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        color: 'secondary',
        size: 'lg'
    }
}

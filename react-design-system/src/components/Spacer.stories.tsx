import { Meta, StoryObj} from '@storybook/react'
import { Spacer, SpacerProps } from './Spacer'

export default {
    title: 'Components/Spacer',
    component: Spacer,
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
} as Meta<SpacerProps>

export const SpacerDefault: StoryObj<SpacerProps> = {
    args: {
        mode: 'light',
    }
}

export const SpacerDark: StoryObj<SpacerProps> = {
    args: {
        mode: 'dark',
    }
}
import { Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Texto',
        size: '13px',
        weight: '500'
    },
    argTypes: {
        size: {
            options: ['13px', '14px'],
            control: {
                type: 'inline-radio'
            }
        },
        weight: {
            options: ['500', '700'],
            control: {
                type: 'inline-radio'
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<TextProps>

export const Texto: StoryObj<TextProps> = {}



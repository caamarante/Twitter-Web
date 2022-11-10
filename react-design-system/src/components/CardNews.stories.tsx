import { Meta, StoryObj} from '@storybook/react'
import { CardNews, CardNewsProps } from './CardNews'

export default {
    title: 'Components/CardNews',
    component: CardNews,
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
    
} as Meta<CardNewsProps>

export const CardNewsDefault: StoryObj<CardNewsProps> = {
    args: {
        mode: 'light',
    }
}

export const CardNewsDark: StoryObj<CardNewsProps> = {
    args: {
        mode: 'dark',
    }
}
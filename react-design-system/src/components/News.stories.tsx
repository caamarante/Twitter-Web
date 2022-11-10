import { Meta, StoryObj} from '@storybook/react'
import { News, NewsProps } from './News'

export default {
    title: 'Components/News',
    component: News,
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
    
} as Meta<NewsProps>

export const NewsDefault: StoryObj<NewsProps> = {
    args: {
        mode: 'light',
        titulo: 'COVID19 · Last night',
        noticia: "England's Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
        hashtag: '#covid19'
    }
}

export const NewsDark: StoryObj<NewsProps> = {
    args: {
        mode: 'dark',
        titulo: 'COVID19 · Last night',
        noticia: "England's Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
        hashtag: '#covid19'
    }
}
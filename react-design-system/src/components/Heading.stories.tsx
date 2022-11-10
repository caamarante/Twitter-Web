import { Meta, StoryObj} from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading',
    },
    argTypes: {
        asChild: {
            table: {
                disable: true,
            }
        },
        size: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<HeadingProps>

export const Heading2: StoryObj<HeadingProps> = {
    args: {
        size: 'h2',
        children: 'Heading 2',
    }
}

export const Heading3: StoryObj<HeadingProps> = {
    args: {
        size: 'h3',
        children: 'Heading 3',
    }
}

export const Heading4: StoryObj<HeadingProps> = {
    args: {
        size: 'h4',
        children: 'Heading 4',
    }
}

export const Heading5: StoryObj<HeadingProps> = {
    args: {
        size: 'h5',
        children: 'Heading 5',
    }
}


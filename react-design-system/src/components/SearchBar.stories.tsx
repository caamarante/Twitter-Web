import { Meta, StoryObj} from '@storybook/react'
import { SearchBar, SearchBarProps } from './SearchBar'

export default {
    title: 'Components/SearchBar',
    component: SearchBar,
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
} as Meta<SearchBarProps>

export const SearchBarDefault: StoryObj<SearchBarProps> = {
    args: {
        mode: 'light',
    }
}

export const SearchBarDark: StoryObj<SearchBarProps> = {
    args: {
        mode: 'dark',
    }
}
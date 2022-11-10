import { Meta, StoryObj} from '@storybook/react'
import { SideMenu, SideMenuProps } from './SideMenu'

export default {
    title: 'Components/SideMenu',
    component: SideMenu,
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
} as Meta<SideMenuProps>

export const SideMenuDefault: StoryObj<SideMenuProps> = {
    args: {
        mode: 'light',
    }
}

export const SideMenuDark: StoryObj<SideMenuProps> = {
    args: {
        mode: 'dark',
    }
}
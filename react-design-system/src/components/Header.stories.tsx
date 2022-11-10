import { Meta } from '@storybook/react'

import { Header, HeaderProfile, HeaderProps } from './Header'



export default {

    title: 'Components/Header',

    argTypes: {

        mode: { control: 'select', options: ['light', 'dark'] }

    }

} as Meta<HeaderProps>



export const HeaderDeafult = (args: HeaderProps) => {

    return (

        <Header {...args}></Header>

    )
}

export const HeaderProfileDefault = (args: HeaderProps) => {

    return (

        <HeaderProfile {...args}></HeaderProfile>

    )
}
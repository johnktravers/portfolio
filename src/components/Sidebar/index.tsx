import React, {FC} from 'react'

import {
    CloseIcon,
    Icon,
    SidebarBtnWrap,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper
} from './SidebarElements'

const Sidebar: FC = () => (
    <>
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='experience'>Experience</SidebarLink>
                    <SidebarLink to='projects'>Projects</SidebarLink>
                    <SidebarLink to='contact'>Contact</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute href='#'>Resume</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    </>
)

export default Sidebar

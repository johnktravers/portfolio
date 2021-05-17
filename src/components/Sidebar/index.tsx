import React, { FC } from 'react'

import {
  CloseIcon,
  Icon,
  SidebarBtnWrap,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from './SidebarElements'

type SidebarProps = {
  isOpen: boolean
  toggleOpen: () => void
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { isOpen, toggleOpen } = props

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggleOpen}>
        <Icon>
          <CloseIcon onClick={toggleOpen} />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='about' onClick={toggleOpen}>About</SidebarLink>
            <SidebarLink to='experience' onClick={toggleOpen}>Experience</SidebarLink>
            <SidebarLink to='projects' onClick={toggleOpen}>Projects</SidebarLink>
            <SidebarLink to='contact' onClick={toggleOpen}>Contact</SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute href='#'>Resume</SidebarRoute>
          </SidebarBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar

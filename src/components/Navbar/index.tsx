import React, { FC } from 'react'
import { FaBars } from 'react-icons/fa'

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from './NavbarElements'

type NavbarProps = {
  toggleOpen: () => void
}

const Navbar: FC<NavbarProps> = (props) => {
  const { toggleOpen } = props

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='test1'>John</NavLogo>
          <MobileIcon onClick={toggleOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to='about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='experience'>Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='projects'>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='contact'>Contact</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href='#'>Resume</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

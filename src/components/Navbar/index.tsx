import React, {FC} from 'react'
import {FaBars} from 'react-icons/fa'

import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu
} from './NavbarElements'

const Navbar: FC = () => (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='test1'>John</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' />
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
)

export default Navbar

import React, {FC} from 'react'
import {AppBar, IconButton, Toolbar} from '@material-ui/core'
import {Menu} from '@material-ui/icons';

const Navbar: FC = () => (
    <AppBar position='static'>
        <Toolbar>
            <IconButton edge='start' aria-label='menu'>
                <Menu />
            </IconButton>
        </Toolbar>
    </AppBar>
)

export default Navbar

import React, {FC} from 'react'
import {Container, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import theme from '../styles/theme'

const useStyles = makeStyles({
    message: {
        fontFamily: 'monospace'
    },
    name: {
        color: theme.palette.info.light
    }
})

const Intro: FC = () => {
    const classes = useStyles()

    return (
        <Container>
            <Typography className={classes.message}>Hi, my name is</Typography>
            <Typography className={classes.name}>John Travers</Typography>
        </Container>
    )
}

export default Intro

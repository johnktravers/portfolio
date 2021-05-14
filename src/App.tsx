import React, {FC} from 'react'
import {Container} from '@material-ui/core'
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'

import Icons from './components/Icons'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import theme from './styles/theme'

const useStyles = makeStyles({
  body: {
    height: '100vh'
  }
})

const App: FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.body}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Intro />
        <Icons />
      </ThemeProvider>
    </Container>
  )
}

export default App

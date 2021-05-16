import React, {FC} from 'react'
import {Container} from '@material-ui/core'
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'

import Icons from './components/Icons'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import theme from './styles/theme'

const useStyles = makeStyles({
  appContainer: {
  }
})

const App: FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.appContainer}>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <Navbar />
        <Intro />
        <Icons />
      </ThemeProvider>
    </Container>
  )
}

export default App

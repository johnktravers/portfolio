import React, {FC} from 'react'
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'

import Icons from './components/Icons'
import Intro from './components/Intro'
import theme from './styles/theme'

const useStyles = makeStyles({
  body: {
    height: '100vh'
  }
})

const App: FC = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Intro />
      <Icons />
    </ThemeProvider>
  )
}

export default App

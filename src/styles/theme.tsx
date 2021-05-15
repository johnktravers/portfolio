import {createMuiTheme} from '@material-ui/core/styles'

export default createMuiTheme({
    palette: {
        primary: {
            dark: '#091D25', // Dark blue
            main: '#1A417F',
            light: '#E0E0E0' // Off-white (font)
        },
        info: {
            main: '#2196F3',
            light: '#72B7BC' // Light teal
        },
        success:{
            main: '#517B51' // Green
        },
        warning: {
            main: '#FF9800',
            light: '#DAC07C' // Light mustard
        }
    },
    typography: {
        fontFamily: 'chivo bold, sans-serif'
    }
})

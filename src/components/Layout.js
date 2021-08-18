import React from 'react'
// import Header from './Header'
import HeaderNew from './HeaderNew'
import { makeStyles } from '@material-ui/core'
import {createTheme } from '@material-ui/core'
import {ThemeProvider} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createTheme({
    palette: {
        primary: {
            main: '#16204E'
        },
        secondary: {
            main: '#18A0FB'
        },
        type: 'dark',
    }
})



export default function Layout({children}) {
   
    return (
        <div>
             <CssBaseline />
           <ThemeProvider theme = {theme}>
                <HeaderNew />
                <Container>
                    <div>{children}</div>
                </Container>
            </ThemeProvider>
           
        </div>
        
    )
}

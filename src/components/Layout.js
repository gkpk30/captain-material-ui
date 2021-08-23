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
    },
   
})

const useStyles = makeStyles({
    toolbar: theme.mixins.toolbar,
    hero: {
        height: '540px',
        backgroundImage: 'url("https://source.unsplash.com/random")',
        // backgroundImage: 'url("../../static/houseMobile.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    page: {
        marginTop: '20px',
    },
}) 



export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
             <CssBaseline />
           <ThemeProvider theme = {theme}>
               <div className={classes.hero}>
                    <HeaderNew />
                </div>
                <Container >
                    
                    <div className={classes.page}>
                        <div className={classes.toolbar}></div>
                        {children}
                    </div>
                </Container>
               
            </ThemeProvider>
           
        </div>
        
    )
}

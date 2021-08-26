import React from 'react'
// import Header from './Header'
import HeaderNew from './HeaderNew'
import { makeStyles } from '@material-ui/core'
import {createTheme } from '@material-ui/core'
import {ThemeProvider} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createTheme({
    palette: {
        primary: {
            main: '#16204E'
        },
        secondary: {
            main: '#18A0FB'
        },
        
    },
   
})

const useStyles = makeStyles({
    toolbar: theme.mixins.toolbar,
    hero: {
        height: '540px',
        backgroundImage: 'url("https://source.unsplash.com/-y4dVPa8EQI/1600x900")',
        // backgroundImage: 'url("../../static/houseMobile.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    page: {
        // marginTop: '20px',
    },
}) 



export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
             <CssBaseline />
           <ThemeProvider theme = {theme}>
              
                    <HeaderNew />                  
                    <div className={classes.page}>
                        {children}
                    </div>
            </ThemeProvider>
           
        </div>
        
    )
}

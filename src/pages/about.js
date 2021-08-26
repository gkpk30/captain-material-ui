import React from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Layout from '../components/Layout'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    hero: {
        height: '300px',
        backgroundImage: 'url("https://source.unsplash.com/IWenq-4JHqo/1600x900")',
        // backgroundImage: 'url("../../static/houseMobile.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
    },
    content: {
        width: '80%',
        height: '600px',
        margin: 'auto',
    },

}))

const About = () => {
    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.hero}>
            </div>
            <div className={classes.toolbar}></div>
           <Container>
               <Paper className={classes.content}>
                   <Box padding={4}>
                   <Typography variant='h2'>Riding the Mountain</Typography>
                   </Box>
               </Paper>
           </Container>
           
        </Layout>
    )
}

export default About

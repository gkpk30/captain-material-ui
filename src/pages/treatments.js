import React from 'react'
// import Layout from '../components/Layout'
import { graphql } from "gatsby"
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    hero: {
        height: '300px',
        backgroundImage: 'url("https://source.unsplash.com/h5QNclJUiA8/1600x900")',
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

const Treatments = () => {
    const classes = useStyles();

    // const urlTreatment = location.pathname ? location.pathname : '';
    // console.log('current location of Treatment page: ',urlTreatment);

    return (
        <div >
            <div className={classes.hero}>
            </div>
            <div className={classes.toolbar}></div>
           <Container>
               <Paper className={classes.content}>
                   <Box padding={4}>
                   <Typography variant='h2'>Treatments</Typography>
                   </Box>
               </Paper>
           </Container>
           
        </div>
    )
}

export default Treatments


// export const query = graphql`
//   {
//     sitePage {
//       path
//     }
//   }
// `


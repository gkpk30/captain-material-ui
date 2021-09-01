import React from "react"
// import Layout from '../components/Layout'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  hero: {
    height: '540px',
    backgroundImage: 'url("https://source.unsplash.com/-y4dVPa8EQI/1600x900")',
    // backgroundImage: 'url("../../static/houseMobile.jpeg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
},
contentArea1: {
  width: '80%',
  height: '600px',
  margin: 'auto',
},
})

export default function Home() {
  const classes = useStyles();
  // const url = location.pathname ? location.pathname : '';
  // console.log('current location of About page: ',url);
  return (
  
<div>
  <div className={classes.hero}>
  </div>
  <Paper elevation={3} className={classes.contentArea1}>
  <Typography variant='h4'>hello world</Typography>
  </Paper>
</div>
    
 
  ) 
}

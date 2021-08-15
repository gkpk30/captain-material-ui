import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'




const HeaderNew = () => {
    return (
        <>
            <AppBar  color="primary">
            <Container >
                <Toolbar style={{justifyContent: 'space-between'}}>
                   
                        <Typography>Captain Termite Control </Typography>
                    <Tabs >
                        <Tab label= 'Treatment Types'/>
                        <Tab label= 'About Us'/>
                        <Tab label= 'Contact Us'/>
                    </Tabs>
                  
                 </Toolbar>
                 </Container>
            </AppBar>
        </>
    )
}

export default HeaderNew

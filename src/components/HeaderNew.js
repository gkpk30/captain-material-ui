import React, {useState} from 'react'
import { makeStyles , useTheme } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import ViewArrayIcon from '@material-ui/icons/ViewArray';

const useStyles = makeStyles(theme => ({
    logo: {
      fontSize: '1.9rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.1rem',
      },
    },
    acount: {
      marginLeft: 'auto',
      '&:hover': {
        background: 'purple',
      },
    },
    tabsContainer: {
      marginLeft: 'auto',
    },
    iconLogo: {
      color: 'yellow',
      fontSize: '3rem',
    },
    icons: {
      fontSize: '1rem',
    },
  }));


const HeaderNew = () => {
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickTab = (e, newValue) => {
        setValue(newValue);
    }

    

  const handleOpenTreatmentTypes = (event) => {
      //change the position of the anchor from event.currentTarget to below the Appbar
    setAnchorEl(event.currentTarget);
   
  };

  const handleCloseTreatmentTypes = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
    return (
        <>
            <AppBar  color="primary">
                <Container >
                    <Toolbar style={{justifyContent: 'space-between'}}> 
                    
                            <Typography>Captain Termite Control </Typography>
                        <Tabs 
                            onChange={handleClickTab} 
                            indicatorColor = 'secondary' 
                            value ={value} 
                            className={classes.tabsContainer}
                        >
                            <Tab icon={<ArrowDropDownOutlinedIcon/>} className={classes.icons} style={{flexDirection: 'row-reverse'}} label= 'Treatment Types' onClick={handleOpenTreatmentTypes} aria-controls="open-treatment-menu" /> 
                            
                            {/* <ArrowDropDownOutlinedIcon style={{alignSelf: 'center'}} /> */}
                            <Tab label= 'About Us'/>
                            <Tab label= 'Contact Us'/>
                            <Button color='secondary' variant = 'contained'>Profile</Button>
                        </Tabs>
                        {/* <Button color='secondary' variant = 'contained'>Profile</Button> */}
                    </Toolbar>
                </Container>
            </AppBar>
                                <Menu
                                   style={{marginTop: '50px'}}
                                    id="open-treatment-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleCloseTreatmentTypes}
                                    TransitionComponent={Fade}
                                  
                                >
                                    <MenuItem onClick={handleCloseTreatmentTypes}>Profile</MenuItem>
                                    <MenuItem onClick={handleCloseTreatmentTypes}>My account</MenuItem>
                                    <MenuItem onClick={handleCloseTreatmentTypes}>Logout</MenuItem>
                                </Menu>
        </>
    )
}

export default HeaderNew

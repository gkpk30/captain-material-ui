import React, {useState} from 'react'
// import {Link} from 'gatsby'
import { Link } from "gatsby-theme-material-ui";
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
import ViewListIcon from '@material-ui/icons/ViewList';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    links: theme.mixins.Link,
    wrapper: {
      flexDirection: 'row-reverse',
    },
    dropdownListMenu: {
      display: 'flex',
      width: '250px',
      flexDirection: 'column',
      marginLeft: '15px',
      alignItems: 'end',
    },
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
    link: {
      textDecoration: 'none',
      textAlign: 'center',
      '&:hover': {
        textDecoration: 'none',
      },
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
      
        <div>
            <AppBar  color='transparent' className={classes.root}>
                <Container >
                    <Toolbar style={{justifyContent: 'space-between', alignItems:'center'}}> 
                    
                            <Typography component={Link} to='/' classes={{root:classes.link}}>Captain Termite Control </Typography>
                        <Tabs 
                            onChange={handleClickTab} 
                            indicatorColor = 'secondary' 
                            value ={value}       
                        >
                            <Tab 
                                icon={<ArrowDropDownOutlinedIcon/>}
                                 label= 'Treatment Types' 
                                 onClick={handleOpenTreatmentTypes} 
                                 aria-controls="open-treatment-menu"
                                 classes={{wrapper:classes.wrapper, root:classes.link}}
                                 component={Link}
                                 to='/'
                                 /> 
                            <Tab component={Link} to="/about" label= 'About Us'classes={{root:classes.link}}/>   
                            {/* <Link to="/about" classes={{root:classes.link}} className={classes.links}><Tab label= 'About Us'/></Link> */}
                           
                            {/* <Tab label= 'Contact Us'/> */}
                            <Tab label= 'Link About'><Link to='/about'/></Tab>
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
                                  classes={{list:classes.dropdownListMenu}}
                                >
                                  {/* this creates a margin to clear the toolbar */}
                                  {/* <div className={classes.toolbar}></div>  */}

                                    <MenuItem onClick={handleCloseTreatmentTypes}>Precision Injection</MenuItem>
                                    <MenuItem onClick={handleCloseTreatmentTypes}>Borate Treatments</MenuItem>
                                    <MenuItem onClick={handleCloseTreatmentTypes}>Foam Treatments</MenuItem>
                                    <MenuItem onClick={handleCloseTreatmentTypes}>Preventative Treatments</MenuItem>
                                    <MenuItem onClick={handleCloseTreatmentTypes}>Pre-Construction Treatments</MenuItem>
                                    <MenuItem onClick={handleCloseTreatmentTypes}>Soil Treatments</MenuItem>
                                    <MenuItem onClick={handleCloseTreatmentTypes}>Cellulose Removal</MenuItem>
                                    <MenuItem onClick={handleCloseTreatmentTypes}>Traditional Tent Fumigation</MenuItem>
                                </Menu>
        </div>
    )
}

export default HeaderNew

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//TabPanel is not needd. Unless you want content displayed in panels. (TabPanel not needed)
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

//a11yprops is for accessbility mostly
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


//styling for Simpletab component
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  //sets value for which tab is currently selected
  //Material UI will give each of the tabs an id that starts as an integer index starting from 0 . (e.g Zero is the first tab)
  const [value, setValue] = React.useState(0);

  //Triggers whenever we click on one of the tabs. It passes in the event (which is not used) and then the new value that comes in from the tabs component and sets a new value
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
          {/* </{aria-label is for screen readers and accessiblity and reads out the text to the blind}></div> */}
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              {/* <div>A11yProps props are being passed into the Tab. dont need the {...a111yProps} unless the application is needed to meet accessiblity standards</div> */}
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
        {/* <div>For the TabPanel when the value index is the same as the index prop it displays that panel</div> */}
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Summary from './Summary.jsx';
import Bio from './Bio.jsx';
import Contact from './Contact.jsx';
import Comments from './../views/Comments.jsx';
import Chat from './../views/Chat.jsx';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

export default function UserTabs(props) {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="UserTabs">
      <AppBar position="static" className="Tab">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab value="one" label="Özet" {...a11yProps('one')}/>
          <Tab value="two" label="Özgeçmiş" {...a11yProps('two')} />
          <Tab value="three" label="İletişim" {...a11yProps('three')} />
          <Tab value="four" label="Yorumlar" {...a11yProps('four')} />
          <Tab value="five" label="Mesajlaşma" {...a11yProps('five')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        <Summary userInfo={props.userInfo}/>
      </TabPanel>
      <TabPanel value={value} index="two">
        <Bio userInfo={props.userInfo}/>
      </TabPanel>
      <TabPanel value={value} index="three">
        <Contact userInfo={props.userInfo}/>
      </TabPanel>
      <TabPanel value={value} index="four">
        <Comments userInfo={props.userInfo}/>
      </TabPanel>
      <TabPanel value={value} index="five">
        <Chat userInfo={props.userInfo}/>
      </TabPanel>
    </div>
  );
}

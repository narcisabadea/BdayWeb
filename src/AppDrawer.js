import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 110;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: '#E32C28'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();

  const drawer = (
    <div>
      <img src="images/ic_launcher-web.png" alt="cover" style={{height: '100px'}}/>
      <div className={classes.toolbar} />
      <List className="drawerContainer">
          <ListItem>
            <i className="material-icons centerButtons">account_circle</i>
          </ListItem>
          <Divider/>
          <ListItem>
           <i className="material-icons centerButtons">group</i>
          </ListItem>
          <Divider/>
          <ListItem>
            <i className="material-icons centerButtons">card_giftcard</i>
          </ListItem>
          <Divider/>
          <ListItem>
            <i className="material-icons centerButtons">settings_applications</i>
          </ListItem>
        </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;
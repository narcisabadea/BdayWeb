import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const drawerWidth = 110;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: 0
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    // background: "#E32C28",
    // border: "1px solid #E32C28",
    height: "677px",
    marginTop: "7%"
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <List className="drawerContainer">
        <ListItem>
          <Button className={classes.button}>
            <a href="/">
              <img src="images/2ic_launcher-web.png" alt="cover" id="barLogo" />
            </a>
          </Button>
        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip title="Profile" placement="right" TransitionComponent={Zoom}>
            <Button className={classes.button}>
              <Link to="/profile">
                <i className="material-icons centerButtons">account_circle</i>
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip title="People" placement="right" TransitionComponent={Zoom}>
            <Button className={classes.button}>
              <Link to="/people">
                <i className="material-icons centerButtons">group</i>
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip title="Gifts" placement="right" TransitionComponent={Zoom}>
            <Button className={classes.button}>
              <Link to="/gifts">
                <i className="material-icons centerButtons">card_giftcard</i>
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip title="Events" placement="right" TransitionComponent={Zoom}>
            <Button className={classes.button}>
              <Link to="/events">
                <i className="material-icons centerButtons">event</i>
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip
            title="Settings"
            placement="right"
            TransitionComponent={Zoom}
          >
            <Button className={classes.button}>
              <Link to="/">
                <i className="material-icons centerButtons">
                  settings_applications
                </i>
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip title="Search" placement="right" TransitionComponent={Zoom}>
            <Button className={classes.button}>
              <Link to="/">
                <i className="material-icons centerButtons">search</i>
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip
            title="Notifications"
            placement="right"
            TransitionComponent={Zoom}
          >
            <Button className={classes.button}>
              <Link to="/">
                <i className="material-icons centerButtons">
                  notification_important
                </i>
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default ResponsiveDrawer;

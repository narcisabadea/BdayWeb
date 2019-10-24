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
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";

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
    height: "620px",
    marginTop: "7%"
  },
  drawerPaperMobile: {
    width: drawerWidth,
    height: "100%"
    // marginTop: "7%"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const [users] = useCollection(firebase.firestore().collection("users"));

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
              <img
                src="/images/2ic_launcher-web.png"
                alt="cover"
                id="barLogo"
              />
            </a>
          </Button>
        </ListItem>
        <Divider />
        <ListItem className="hoverBtn">
          <Tooltip title="Profile" placement="right" TransitionComponent={Zoom}>
            <Button className={classes.button}>
              <Link to="/profile">
                <Grid container justify="center" alignItems="center">
                  {users && (
                    <span>
                      {users.docs.map((doc, index) => {
                        if (doc.id === firebase.auth().currentUser.uid) {
                          return (
                            <span key={index}>
                              <Avatar
                                alt="Avatar"
                                src={
                                  doc.data().photoUrl ||
                                  "/images/user_placeholder_circle.png"
                                }
                                className={classes.bigAvatar}
                              />
                            </span>
                          );
                        }
                      })}
                    </span>
                  )}
                </Grid>
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem className="hoverBtn">
          <Tooltip title="People" placement="right" TransitionComponent={Zoom}>
            <Button className={classes.button}>
              <Link to="/people">
                <i className="material-icons centerButtons">group</i>
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem className="hoverBtn">
          <Tooltip title="Gifts" placement="right" TransitionComponent={Zoom}>
            <Button className={classes.button}>
              <Link to="/gifts">
                <img
                  src="/icons/gift.png"
                  alt="gift"
                  className="centerButtons"
                />
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem className="hoverBtn">
          <Tooltip title="Events" placement="right" TransitionComponent={Zoom}>
            <Button className={classes.button}>
              <Link to="/events">
                <img
                  src="/icons/calendar.png"
                  alt="calendar"
                  className="centerButtons"
                />
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem className="hoverBtn">
          <Tooltip title="Search" placement="right" TransitionComponent={Zoom}>
            <Button className={classes.button}>
              <Link to="/">
                <img
                  src="/icons/lupa.png"
                  alt="search"
                  className="centerButtons"
                />
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem className="hoverBtn">
          <Tooltip title="Alerts" placement="right" TransitionComponent={Zoom}>
            <Button className={classes.button}>
              <Link to="/alerts">
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
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <HideOnScroll {...props}>
            <AppBar position="fixed" style={{ backgroundColor: "white" }}>
              <Toolbar>
                <IconButton
                  color="secondary"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaperMobile
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

export default ResponsiveDrawer;

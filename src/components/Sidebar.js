import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Lottery from "../screens/Lotery";
import Profile from "../screens/Profil";
import Exchange from "../screens/Exchange";
import Roadmap from "../screens/Roadmap";
import Token from "../screens/Token";

import { Router, Route, Redirect } from "react-router-dom";

import funcoupons from "../assets/funcoupons.png";
import mongain from "../assets/mongain.png";
import sideticket from "../assets/sideticket.png";

import history from "../history";

import "./components.css";

const drawerWidth = 240;
// const sidebarbg = "#21215e";
const sidebartext = "#7d5c7f";
const navcolorbg = "#26234a";
// const navsign = "#c04e88";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "ITCAvant, bold",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: navcolorbg,
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - 0px)`,
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    color: sidebartext,
    backgroundColor: navcolorbg,
  },
  drawerContainer: {
    overflow: "auto",
  },

  content: {
    flexGrow: 1,
    // backgroundColor: "#060656",
    background: "rgb(7,4,53)",
    background: "linear-gradient(rgba(7,4,53,1) 41%, rgba(0,0,93,1) 100%)",
    padding: theme.spacing(3),
  },
  divider: {
    height: "65px",
    borderBottom: "2px solid #070435",
  },
}));

function ResponsiveDrawer(props) {
  const { window, approved } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // const [connection, setConnection] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeRoute = (route) => {
    setCurrentRoute(`/${route}`);
    history.push(route);
  };
  const [currentRoute, setCurrentRoute] = React.useState(
    window !== undefined ? window.location.pathname : "/"
  );
  const connectToMetaMask = (e) => {
    //connect here
    e.preventDefault();
    props.onConnectWithMetamask();
  };

  const approvefromWeb3 = (e) => {
    e.preventDefault();
    if (props.address.length === 0) {
      alert("Please connect your metamask wallet");
    } else {
      props.approvefromWeb3();
    }
  };

  useEffect(() => {
    window !== undefined
      ? setCurrentRoute(window.location.pathname)
      : setCurrentRoute("/");
  }, []);
  const drawer = (
    <div>
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {["Lottery", "Profile", "Token", "RoadMap", "Exchange"].map(
            (text, index) => (
              <ListItem
                onClick={() => changeRoute(text)}
                button
                style={{ textAlign: "center" }}
                key={text}
                divider={true}
                selected={`/${text}` === currentRoute}
                classes={{
                  divider: classes.divider,
                }}
              >
                <span
                  style={{
                    color: `/${text}` === currentRoute ? "#dd4d8c" : "#f5a0be",
                    marginLeft: "1rem",
                    fontSize: "20px",
                    fontWeight: "700",
                    fontFamily: "ITCAvant, bold",
                  }}
                >
                  {text}
                </span>
                {/* <ListItemText primary={text} /> */}
              </ListItem>
            )
          )}
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <ListItem key={index} alignItems="center"></ListItem>
          ))}
          <ListItem alignItems="center" button divider={true}>
            <span
              style={{
                marginLeft: "1rem",
              }}
            >
              <img src={mongain} alt="mongain" />
            </span>
          </ListItem>
          <ListItem alignItems="center" button divider={true}>
            <span
              style={{
                marginLeft: "1rem",
              }}
            >
              <img
                src={sideticket}
                alt="sideticket"
                style={{ width: "40px", height: "auto" }}
              />
            </span>
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "20px",
                fontWeight: "700",
                fontFamily: "ITCAvant, bold",
                color: "#dd4d8c",
              }}
            >
              100 $
            </span>
          </ListItem>
        </List>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar
          style={{
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img src={funcoupons} alt="funcoupons" />
          <div>
            <button
              className="connect"
              onClick={approvefromWeb3}
              disabled={approved}
            >
              {approved ? "Approved" : "Approve"}
            </button>
            <button className="connect" onClick={connectToMetaMask}>
              {props.address.length === 0
                ? "Connect"
                : props.address[0].slice(0, 5)}
            </button>
            <span className="connectLang">FR</span>
          </div>
        </Toolbar>
      </AppBar>
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
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Toolbar />
        <Router history={history}>
          <Route exact path="/">
            <Redirect to="/Lottery" />
          </Route>
          <Route exact path="/Lottery" component={Lottery} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Exchange" component={Exchange} />
          <Route exact path="/Roadmap" component={Roadmap} />
          <Route exact path="/Token" component={Token} />
        </Router>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

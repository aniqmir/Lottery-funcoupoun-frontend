import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Lottery from "../screens/Lotery";
import { Router, Route } from "react-router-dom";

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
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: navcolorbg,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    color: sidebartext,
    backgroundColor: navcolorbg,
  },
  drawerContainer: {
    overflow: "auto",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#060656",
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft(props) {
  const classes = useStyles();

  const [currentRoute, setCurrentRoute] = React.useState(
    window.location.pathname
  );

  const changeRoute = (route) => {
    setCurrentRoute(`/${route}`);
    history.push(route);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <img src={funcoupons} alt="funcoupons" />
          <div>
            <button className="connect">Connect</button>
            <span className="connectLang">FR</span>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Lottery", "Profile", "Token", "Road Map", "Exchange"].map(
              (text, index) => (
                <ListItem
                  onClick={() => changeRoute(text)}
                  button
                  key={text}
                  divider={true}
                  selected={`/${text}` === currentRoute}
                >
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <ListItem key={index} alignItems="center"></ListItem>
            ))}
            <ListItem alignItems="center" button divider={true}>
              <img src={mongain} alt="mongain" />
            </ListItem>
            <ListItem alignItems="center" button divider={true}>
              <img src={sideticket} alt="sideticket" />
            </ListItem>
          </List>
        </div>
      </Drawer>

      <main className={classes.content}>
        <Toolbar />
        <Router history={history}>
          <Route path="/Lottery" component={Lottery} />
        </Router>
      </main>
    </div>
  );
}

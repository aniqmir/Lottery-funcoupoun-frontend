import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Lottery from "../screens/Lotery";
import { Router, Route } from "react-router-dom";

import history from "../history";

const drawerWidth = 240;
const sidebarbg = "#21215e";
const sidebartext = "#7d5c7f";
const navcolorbg = "#26234a";
// const navsign = "#c04e88";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: navcolorbg,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    color: sidebartext,
    backgroundColor: sidebarbg,
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

  const changeRoute = (route) => {
    history.push(route);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography> */}
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
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {["Lottery", "Profile", "Token", "Road Map", "Exchange"].map(
            (text, index) => (
              <ListItem
                alignItems="center"
                onClick={() => changeRoute(text)}
                button
                key={text}
                divider={true}
              >
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>

        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router history={history}>
          <Route path="/Lottery" component={Lottery} />
        </Router>
      </main>
    </div>
  );
}

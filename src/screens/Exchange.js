import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Select from "../components/Select";

import settings from "../assets/settings.png";
import refresh from "../assets/refresh.png";
import exchangearrow from "../assets/exchangearrow.png";
import sideticket from "../assets/sideticket.png";

import "./screens.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    background: "#323159",
    borderRadius: "10px",
    color: "#a2ffe2",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div className="exchangeCard">
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6} container>
              <Grid item xs={12}>
                <span className="exchangeTitle">Exchange</span>
              </Grid>
              <Grid item xs={12}>
                <span>Trade Tokens in an Instant</span>
              </Grid>
            </Grid>
            <Grid item xs={6} container>
              <Grid item xs={6}>
                {/* <img src={settings} /> */}
              </Grid>
              <Grid item xs={3}>
                <img alt="settings" className="exchangeIcon" src={settings} />
              </Grid>
              <Grid item xs={3}>
                <img alt="refresh" className="exchangeIcon" src={refresh} />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <div className="fromCard">
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    From
                  </Grid>
                  <Grid item xs={5}>
                    0.0
                  </Grid>
                  <Grid item xs={7} container spacing={4}>
                    <Grid item xs={2}>
                      <span>
                        <img
                          alt="sideticket"
                          style={{ marginTop: "5px", width: "30px" }}
                          src={sideticket}
                        />
                      </span>
                    </Grid>
                    <Grid item xs={10}>
                      <Select />
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} container justify="center" spacing={0}>
              <img
                alt="exchangeicon"
                src={exchangearrow}
                className="exchangeIcon"
              />
            </Grid>
            <Grid item xs={12}>
              <div className="fromCard">
                <Grid container>
                  <Grid item xs={12}>
                    To
                  </Grid>
                  <Grid item xs={6}>
                    0.0
                  </Grid>
                  <Grid item xs={6}>
                    <Select />
                    {/* <select
                      className="fromSelect"
                      placeholder="Select a Currency"
                      defaultValue={"Select Your Currency"}
                    >
                      <option
                        className="select-items"
                        onClick={() => console.log("option1")}
                      >
                        Option 1
                      </option>
                      <option className="select-items">Option 2</option>
                    </select> */}
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <button className="unlockButton">Unlock Button</button>
        </CardActions>
      </Card>
    </div>
  );
}

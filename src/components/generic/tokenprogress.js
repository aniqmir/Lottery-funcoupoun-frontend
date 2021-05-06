import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

import "./genericcomponents.css";

const BorderLinearProgress = withStyles({
  root: {
    height: 35,
    backgroundColor: "#444165",
    borderRadius: 30,
  },
  bar: {
    borderRadius: 35,
    // background: "rgb(123,50,249)",
    background:
      "linear-gradient(90deg, rgba(123,50,249,1) 0%, rgba(123,120,240,1) 35%, rgba(158,246,227,1) 100%)",
  },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const TokenProgress = () => {
  const classes = useStyles();

  return (
    <Grid container className="tokenprogress">
      <Grid item md={2}>
        <p>#1</p>
      </Grid>
      <Grid
        item
        md={10}
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
      >
        <p>$ 100</p>
      </Grid>
      <Grid item md={12}>
        <div>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={50}
          />
        </div>
      </Grid>
      <Grid item container md={4}>
        <Grid item xs={6}>
          1
        </Grid>
        <Grid item xs={6}>
          2
        </Grid>
        <Grid item xs={6}>
          3
        </Grid>
        <Grid item xs={6}>
          4
        </Grid>
        <Grid item xs={6}>
          5
        </Grid>
        <Grid item xs={6}>
          6
        </Grid>
      </Grid>
      <Grid item md={4}>
        <div
          style={{
            background: "#b4ffa4",
            borderRadius: "50px",
            padding: "10px",
            margin: "10px",
            width: "50px",
            color: "black",
            fontSize: "20px",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          i
        </div>
      </Grid>
      <Grid item md={4}>
        <div
          style={{
            background: "#b4ffa4",
            color: "black",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px",
          }}
        >
          Tickets Disponibles : 12
        </div>
      </Grid>
    </Grid>
  );
};

export default TokenProgress;

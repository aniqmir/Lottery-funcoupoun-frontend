import React from "react";
import {
  // makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

// import ticket from "../../assets/ticket.png";
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

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

const TokenProgress = () => {
  // const classes = useStyles();

  return (
    <Grid
      container
      className="tokenprogress"
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      spacing={1}
      style={{ margin: "15px", width: "75%" }}
    >
      <Grid item xs={4} md={12}>
        <span style={{ color: "#9026ff", fontSize: "1.2rem", fontWeight: 700 }}>
          #1
        </span>
      </Grid>
      <Grid item xs={8} md={12} container direction="row" justify="flex-end">
        <span className="ticketPrice">$ 100</span>
      </Grid>
      <Grid item xs={12} md={12}>
        <div>
          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={50}
          />
        </div>
      </Grid>
      <Grid item container xs={12} md={12} lg={4}>
        <Grid item xs={6}>
          K : 100 $
        </Grid>
        <Grid item xs={6}>
          4e : 200 $
        </Grid>
        <Grid item xs={6}>
          L : 300 $
        </Grid>
        <Grid item xs={6}>
          5e : 400 $
        </Grid>
        <Grid item xs={6}>
          M : 500 $
        </Grid>
        <Grid item xs={6}>
          6e : 600 $
        </Grid>
      </Grid>
      <Grid item xs={4} md={6} lg={4}>
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
      <Grid item xs={8} md={6} lg={4}>
        {/* <img src={ticket} alt="ticket" /> */}
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

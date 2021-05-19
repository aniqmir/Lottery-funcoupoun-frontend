import React from "react";
import {
  // makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

import sideticket from "../../assets/sideticket.png";
import equal from "../../assets/equal.png";
import goldcrown from "../../assets/goldcrown.svg";
import silvercrown from "../../assets/silvercrown.svg";
import bronzecrown from "../../assets/bronzecrown.svg";

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
    // background: "rgb(144,38,255)",
    background:
      "linear-gradient(90deg, rgba(144,38,255,1) 41%, rgba(95,255,226,1) 100%)",
  },
})(LinearProgress);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

const TokenProgress = (props) => {
  // const classes = useStyles();

  console.log(props, "props");
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
      <Grid item xs={2} md={12}>
        <span style={{ color: "#9026ff", fontSize: "1.2rem", fontWeight: 700 }}>
          #{props.keys}
        </span>
      </Grid>
      <Grid item xs={10} md={12} container direction="row">
        <Grid item xs={1} md={6}></Grid>
        <Grid item md={6} container justify="flex-end" alignContent="flex-end">
          <Grid
            item
            xs={3}
            md={3}
            container
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <span className="fcPrice"> {10 * props.lotteryAmount} Fc</span>
          </Grid>
          <Grid item xs={3} md={2}>
            <img src={sideticket} alt="sideticket" style={{ width: "40px" }} />
          </Grid>
          <Grid
            item
            xs={2}
            md={2}
            container
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <img alt="equal" src={equal} />
          </Grid>
          <Grid item xs={6} md={4}>
            <span className="ticketPrice">$ {props.lotteryAmount}</span>
          </Grid>
        </Grid>
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
      <Grid item container xs={12} md={12} lg={3}>
        <Grid item xs={12}>
          <img src={goldcrown} alt="goldcrown" style={{ width: "20px" }} /> :{" "}
          {props.position1} $
        </Grid>
        <Grid item xs={12}>
          <img src={silvercrown} alt="silvercrown" style={{ width: "20px" }} />{" "}
          : {props.position2} $
        </Grid>
        <Grid item xs={6}>
          <img src={bronzecrown} alt="bronzecrown" style={{ width: "20px" }} />{" "}
          : {props.position3} $
        </Grid>
      </Grid>

      <Grid item container xs={12} md={12} lg={4}>
        <Grid item xs={12}>
          {props.position4.name} : {props.position4.price} $ to share
        </Grid>
        <Grid item xs={12}>
          {props.position5.name} : {props.position5.price} $ to share
        </Grid>
        <Grid item xs={12}>
          {props.position6.name} : {props.position6.price} $ to share
        </Grid>
        <Grid item xs={12}>
          {props.position7.name} : {props.position7.price} $ to share
        </Grid>
      </Grid>

      <Grid item xs={4} md={6} lg={1}>
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

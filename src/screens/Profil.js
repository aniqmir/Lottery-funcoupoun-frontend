import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import LotteryTicket from "../components/generic/lotteryticket";

import downarrows from "../assets/downarrows.png";
import sideticket from "../assets/sideticket.png";

import "./screens.css";
import { Container } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#060656",
//     color: "white",
//     textTransform: "none",
//   },
// }));

export default function Profile() {
  // const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={6}>
        <Grid container item spacing={3}>
          <Grid item xs={12}>
            <div style={{ display: "flex" }}>
              <div>
                <div className="infoicon">i</div>
              </div>
              <div className="rewardimage">
                <p className="rewardtext">REWARD</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className="rewardcenter">
              <button className="claim">Claim</button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <p className="headtext">Tirages en Course</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <LotteryTicket />
          </Grid>
          <Grid item xs={12} md={4}>
            <LotteryTicket />
          </Grid>
          <Grid item xs={12} md={4}>
            <LotteryTicket />
          </Grid>
          <Grid item xs={12}>
            <div className="downarrows">
              <img src={downarrows} alt="downarrows" />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} item>
          <Grid item xs={12}>
            <div style={{ display: "flex" }}>
              <div>
                <div className="infoicon">i</div>
              </div>
              <div className="rewardprice">
                <span className="rewardpricetext">
                  8540 &nbsp;
                  <span>
                    <img
                      src={sideticket}
                      alt="sideticket"
                      style={{ width: "40px", height: "auto" }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className="rewardcenter">
              <button className="claim">Claim</button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <p className="headtext">Tirages en Course</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <LotteryTicket />
          </Grid>
          <Grid item xs={12} md={4}>
            <LotteryTicket />
          </Grid>
          <Grid item xs={12} md={4}>
            <LotteryTicket />
          </Grid>


          <Grid item xs={12}>
            <div style={{ display: "flex" }}>
              <div>
                <div className="infoicon">i</div>
              </div>
              <div className="rewardprice">
                <span className="rewardpricetext">
                  8540 &nbsp;
                  <span>
                    <img
                      src={sideticket}
                      alt="sideticket"
                      style={{ width: "40px", height: "auto" }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="rewardcenter">
              <button className="claim">Claim</button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <p className="headtext">Tirages en Course</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <LotteryTicket />
          </Grid>
          <Grid item xs={12} md={4}>
            <LotteryTicket />
          </Grid>
          <Grid item xs={12} md={4}>
            <LotteryTicket />
          </Grid>

          <Grid item xs={12}>
            <div className="downarrows">
              <img src={downarrows} alt="downarrows" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

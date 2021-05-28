import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import LotteryTicket from "../components/generic/lotteryticket";

import downarrows from "../assets/downarrows.png";
import sideticket from "../assets/sideticket.png";

import "./screens.css";
import { Container } from "@material-ui/core";

import {
  FUN_LOTTERY_ABI,
  FUN_LOTTERY_ADDRESS,
} from "../smartcontract/funlottery";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#060656",
//     color: "white",
//     textTransform: "none",
//   },
// }));

export default function Profile() {
  // const classes = useStyles();


  const getAllLotteries = async (size) => {
    const web3 = window.web3;
    size = 100; 

    const accounts = await web3.eth.getAccounts();

    const todoList = new web3.eth.Contract(
      FUN_LOTTERY_ABI,
      FUN_LOTTERY_ADDRESS
    );

    var latestid = await todoList.methods.getLottoId(size);

    for (let i=latestid;i>0;i--){

      var lotteryCnt = await todoList.methods.getUserTickets(latestid,accounts,size).call();
      console.log(lotteryCnt);
    }
        
    size = 1000; 
  
    latestid = await todoList.methods.getLottoId(size);

    for (let i=latestid;i>0;i--){

      lotteryCnt = await todoList.methods.getUserTickets(latestid,accounts,size).call();
      console.log(lotteryCnt);
    }

   // return 
  };



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

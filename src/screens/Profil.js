import React, { useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import LotteryTicket from "../components/generic/lotteryticket";

import downarrows from "../assets/downarrows.png";
import sideticket from "../assets/sideticket.png";

import "./screens.css";
import { Container } from "@material-ui/core";
import Web3 from "web3";

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

  var numberofRows = 4;

  // const getAllLotteries = async (size) => {
  //   const web3 = new Web3(
  //     Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545/"
  //   );

  //   const contractFunLottery = new web3.eth.Contract(
  //     FUN_LOTTERY_ABI,
  //     FUN_LOTTERY_ADDRESS
  //   );

  //   //const lotteryCount = await todoList.methods.getTicketsPurchased().call();

  //   size = 100;

  //   var latestid = await contractFunLottery.methods.getLottoId(size).call();

  //   // const accounts = await web3.eth.getAccounts();
  //   for (let i = latestid; i > 0; i--) {
  //     var lotteryCnt = await contractFunLottery.methods
  //       .getUserTickets(
  //         latestid,
  //         "0x4d23c8E0e601C5e37b062832427b2D62777fAEF9",
  //         size
  //       )
  //       .call();
  //     console.log("latestId, size,result:", latestid, size, lotteryCnt);
  //   }

  //   size = 1000;

  //   latestid = await contractFunLottery.methods.getLottoId(size).call();

  //   for (let i = latestid; i > 0; i--) {
  //     lotteryCnt = await contractFunLottery.methods
  //       .getUserTickets(
  //         latestid,
  //         "0x4d23c8E0e601C5e37b062832427b2D62777fAEF9",
  //         size
  //       )
  //       .call();
  //     console.log("latestId, size,result:", latestid, size, lotteryCnt);
  //   }

  //   size = 10000;

  //   latestid = await contractFunLottery.methods.getLottoId(size).call();

  //   for (let i = latestid; i > 0; i--) {
  //     lotteryCnt = await contractFunLottery.methods
  //       .getUserTickets(
  //         latestid,
  //         "0x4d23c8E0e601C5e37b062832427b2D62777fAEF9",
  //         size
  //       )
  //       .call();
  //     console.log("latestId, size,result:", latestid, size, lotteryCnt);
  //   }

  //   size = 100000;

  //   latestid = await contractFunLottery.methods.getLottoId(size).call();

  //   for (let i = latestid; i > 0; i--) {
  //     lotteryCnt = await contractFunLottery.methods
  //       .getUserTickets(
  //         latestid,
  //         "0x4d23c8E0e601C5e37b062832427b2D62777fAEF9",
  //         size
  //       )
  //       .call();
  //     console.log("latestId, size,result:", latestid, size, lotteryCnt);
  //   }

  //   // return
  // };

  const getLatestId = async (size) => {
    const web3 = new Web3(
      Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545/"
    );

    const contractFunLottery = new web3.eth.Contract(
      FUN_LOTTERY_ABI,
      FUN_LOTTERY_ADDRESS
    );

    var latestid = await contractFunLottery.methods.getLottoId(size).call();
    return latestid;
  };

  useEffect(() => {
    // getAllLotteries(100);
  }, []);

  var rows = [];

  const claim = () => {
    //claim logic here
  };

  const makeRows = () => {
    for (let i = 0; i < numberofRows; i++) {
      rows.push(
        <>
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
              <button className="claim" onClick={claim}>
                Claim
              </button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <p className="headtext">Tirages en Course</p>
          </Grid>
          {[100, 1000, 10000, 100000].map((price, index) => {
            return (
              <Grid item xs={12} md={3} key={index}>
                <LotteryTicket price={price} latestId={getLatestId(price)} />
              </Grid>
            );
          })}
        </>
      );
    }
    return rows;
  };
  return (
    <Container>
      <Grid container spacing={6}>
        {/* <Grid container item spacing={3}>
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
          <Grid item xs={12} md={3}>
            <LotteryTicket />
          </Grid>
          <Grid item xs={12} md={3}>
            <LotteryTicket />
          </Grid>
          <Grid item xs={12} md={3}>
            <LotteryTicket />
          </Grid>
          <Grid item xs={12} md={3}>
            <LotteryTicket />
          </Grid>
          <Grid item xs={12}>
            <div className="downarrows">
              <img src={downarrows} alt="downarrows" />
            </div>
          </Grid>
        </Grid> */}
        <Grid container spacing={3} item>
          {makeRows()}
        </Grid>
      </Grid>
    </Container>
  );
}

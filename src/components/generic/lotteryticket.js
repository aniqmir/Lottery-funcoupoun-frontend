import React, { useEffect } from "react";
import { Grid, Tooltip } from "@material-ui/core";
import extendedinfo from "../../assets/extendedinfo.png";

import Web3 from "web3";

import {
  FUN_LOTTERY_ABI,
  FUN_LOTTERY_ADDRESS,
} from "../../smartcontract/funlottery";

import "./genericcomponents.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

const LotteryTicket = (props) => {
  // const classes = useStyles();
  const {
    price,
    updateSizes,
    updateLotteryIDs,
    updateTicketNum,
    rowNum,
    getRewardValue,
    latestId,
  } = props;
  // const [latestId, setLatestId] = React.useState(0);
  const [lotteryCount, setLotteryCount] = React.useState([]);

  const getLotteryId = async () => {
    //get Lottery ID here

    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");

    const contractFunLottery = new web3.eth.Contract(
      FUN_LOTTERY_ABI,
      FUN_LOTTERY_ADDRESS
    );

    // var latestid = await contractFunLottery.methods
    //   .getLottoId(price * 10)
    //   .call();

    // setLatestId(latestid);

    // const accounts = await web3.eth.getAccounts();
    const accounts = localStorage.getItem("accounts");

    // for (let i = latestId; i > 0; i--) {
    if (latestId && accounts) {
      var lotteryCnt = await contractFunLottery.methods
        .getUserTickets(latestId, accounts, price)
        .call();

      setLotteryCount(lotteryCnt);

      for (let i = 0; i < lotteryCnt.length; i++) {
        const checkMapNavigator = await contractFunLottery.methods
          .userTickets(
            accounts, // todo
            price,
            1,
            lotteryCnt[i]
          )
          .call();
        getRewardValue(price, latestId, lotteryCnt[i], rowNum);

        if (!checkMapNavigator.redeemed) {
          updateTicketNum(lotteryCnt[i], rowNum);
          updateSizes(price, rowNum);
          updateLotteryIDs(latestId, rowNum);
        }
      }
    }
  };

  useEffect(() => {
    getLotteryId();
  }, []);

  return (
    <Grid
      container
      className="lotteryticket"
      direction="row"
      // justify="center"
      // alignItems="center"
      // alignContent="center"
      spacing={1}
      style={{ textAlign: "center", width: "80%", minHeight: "290px" }}
    >
      <Grid item xs={12}>
        <span className="lotteryhead"> Lottery # {latestId}</span>
      </Grid>
      <Grid item xs={12}>
        <span className="lotteryprice"> {price} $</span>
      </Grid>
      <Grid item xs={12}>
        <div className="lotteryticketbg">
          <div className="yourtickets">YOUR TICKETS</div>
          <Grid container spacing={1}>
            {lotteryCount.map(
              (item, index) =>
                index <= 5 && (
                  <Grid item xs={6} key={index}>
                    <span
                      style={{
                        background: "white",
                        borderRadius: "10px",
                        display: "inline-block",
                        margin: "2px",
                        padding: "3px",
                      }}
                    ></span>
                    &nbsp;&nbsp;
                    <span>{item}</span>
                  </Grid>
                )
            )}
          </Grid>
        </div>

        {/* <img src={lotteryticket} alt="lotteryticket" /> */}
      </Grid>
      <Tooltip
        title={
          <Grid container spacing={1}>
            {lotteryCount.map((item, index) => (
              <Grid item xs={3} key={index}>
                <span>{item}</span>
              </Grid>
            ))}
          </Grid>
        }
      >
        <Grid item xs={12}>
          <img src={extendedinfo} alt="extendedinfo" />
        </Grid>
      </Tooltip>
    </Grid>
  );
};

export default LotteryTicket;

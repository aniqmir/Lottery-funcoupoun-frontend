import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
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
  const { price, updateSizes, updateLotteryIDs, updateTicketNum, rowNum } =
    props;

  const [latestId, setLatestId] = React.useState(0);
  const [lotteryCount, setLotteryCount] = React.useState([]);

  const getLotteryId = async () => {
    //get Lottery ID here

    const web3 = new Web3(
      Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545/"
    );

    const contractFunLottery = new web3.eth.Contract(
      FUN_LOTTERY_ABI,
      FUN_LOTTERY_ADDRESS
    );

    var latestid = await contractFunLottery.methods.getLottoId(price).call();

    setLatestId(latestid);

    const accounts = await web3.eth.getAccounts();

    // for (let i = latestId; i > 0; i--) {
    var lotteryCnt = await contractFunLottery.methods
      .getUserTickets(
        latestid,
        "0x4d23c8E0e601C5e37b062832427b2D62777fAEF9",
        price
      )
      .call();

    setLotteryCount(lotteryCnt);

    for (let i = 0; i < lotteryCnt.length; i++) {
      updateSizes(price, rowNum);
      updateLotteryIDs(latestid, rowNum);

      const checkMapNavigator = await contractFunLottery.methods
        .userTickets(
          "0x4d23c8E0e601C5e37b062832427b2D62777fAEF9",
          price,
          1,
          latestid
        )
        .call();
      if (!checkMapNavigator.redeemed) {
        updateTicketNum(lotteryCnt[i], rowNum);
      }
    }
    // }
  };

  useEffect(() => {
    getLotteryId();
  }, []);

  return (
    <Grid
      container
      className="lotteryticket"
      direction="row"
      justify="center"
      alignItems="center"
      alignContent="center"
      spacing={1}
      style={{ textAlign: "center", width: "80%" }}
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
            {lotteryCount.map((item, index) => (
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
            ))}
          </Grid>
        </div>

        {/* <img src={lotteryticket} alt="lotteryticket" /> */}
      </Grid>
      <Grid item xs={12}>
        <img src={extendedinfo} alt="extendedinfo" />
      </Grid>
    </Grid>
  );
};

export default LotteryTicket;

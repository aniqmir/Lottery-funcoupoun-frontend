import React from "react";
import { Grid } from "@material-ui/core";
import extendedinfo from "../../assets/extendedinfo.png";

import "./genericcomponents.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

const LotteryTicket = () => {
  // const classes = useStyles();

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
        <span className="lotteryhead"> Lottery # 2</span>
      </Grid>
      <Grid item xs={12}>
        <span className="lotteryprice"> 1000 $</span>
      </Grid>
      <Grid item xs={12}>
        <div className="lotteryticketbg">
          <div className="yourtickets">YOUR TICKETS</div>
          <Grid container spacing={1}>
            {[18, 25, 65, 91, 54, 23].map((item, index) => (
              <Grid item xs={6}>
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

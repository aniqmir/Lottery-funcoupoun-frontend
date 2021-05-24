import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TokenProgress from "../components/generic/tokenprogress";

import Web3 from "web3";
import {
  FUN_LOTTERY_ABI,
  FUN_LOTTERY_ADDRESS,
} from "../smartcontract/funlottery";

import { FUN_COIN_ADDRESS, FUN_COIN_ABI } from "../smartcontract/funcoin";

import { ethers } from "ethers";

import downarrows from "../assets/downarrows.png";

import "./screens.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "#060656",
    background: "rgb(7,4,53)",
    background: "linear-gradient(rgba(7,4,53,1) 41%, rgba(0,0,93,1) 100%)",
    color: "white",
    textTransform: "none",
  },
  rootbar: {
    flexGrow: 1,
    backgroundColor: "rgb(7,4,53)",
    color: "#a2ffe2",
    boxShadow: "none",
    textTransform: "none",
  },
  indicator: {
    backgroundColor: "#211e47",
    width: "10%",
  },
  tabsroot: {
    textTransform: "none",
    fontSize: "24px",
    fontWeight: 700,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const lotteryArray = [100, 1000, 10000, 100000];

  const [progressValue, setProgressValue] = React.useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  });
  const [address, setAddress] = React.useState();

  React.useEffect(() => {
    const getLotteryNumbersfromEth = async () => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const accounts = await web3.eth.getAccounts();
      setAddress(accounts[0]);
      const todoList = new web3.eth.Contract(
        FUN_LOTTERY_ABI,
        FUN_LOTTERY_ADDRESS
      );

      const lotteryCount = await todoList.methods.getTicketsPurchased().call();
      console.log(lotteryCount);

      setProgressValue(lotteryCount);
    };
    getLotteryNumbersfromEth();
  }, []);

  const buyLotteryfromWeb3 = async (param1, param2, param3) => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

    const SimpleContract = new web3.eth.Contract(
      FUN_COIN_ABI,
      FUN_COIN_ADDRESS
    );

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      FUN_COIN_ADDRESS,
      FUN_COIN_ABI,
      signer
    );
    const transaction = await contract.approve(
      "0x4d23c8E0e601C5e37b062832427b2D62777fAEF9",
      10000000
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const lotteryValues = [
    {
      position1: "50",
      position2: "10",
      position3: "5",
      position4: { name: "4 - 10th", price: "18" },
      position5: { name: "11 - 20th", price: "6" },
      position6: { name: "21 - 30th", price: "7" },
      position7: { name: "31 - 40th", price: "4" },
      total: 120,
    },
    {
      position1: "500",
      position2: "100",
      position3: "50",
      position4: { name: "4 - 100th", price: "180" },
      position5: { name: "101 - 200th", price: "60" },
      position6: { name: "201 - 300th", price: "70" },
      position7: { name: "301 - 400th", price: "40" },
      total: 1200,
    },
    {
      position1: "5000",
      position2: "1000",
      position3: "500",
      position4: { name: "4 - 1000th", price: "1800" },
      position5: { name: "1001 - 2000th", price: "600" },
      position6: { name: "2001 - 3000th", price: "700" },
      position7: { name: "3001 - 4000th", price: "400" },
      total: 12000,
    },
    {
      position1: "50000",
      position2: "10000",
      position3: "5000",
      position4: { name: "4 - 10000th", price: "18000" },
      position5: { name: "10001 - 20000th", price: "6000" },
      position6: { name: "20001 - 30000th", price: "7000" },
      position7: { name: "30001 - 40000th", price: "4000" },
      total: 120000,
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.rootbar}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          classes={{
            indicator: classes.indicator,
          }}
        >
          <LinkTab
            classes={{
              root: classes.tabsroot,
            }}
            label="Lotery"
            // href="/trash"
            {...a11yProps(0)}
          />
          <LinkTab
            classes={{
              root: classes.tabsroot,
            }}
            label="Saving Lotery"
            // href="/drafts"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {lotteryValues.map((value, index) => (
          <div className="tokenProgressMain">
            <TokenProgress
              key={index}
              keys={index + 1}
              lotteryAmount={lotteryArray[index]}
              progressValue={progressValue[index]}
              address={address}
              buyLotteryfromWeb3={buyLotteryfromWeb3}
              {...value}
            />
          </div>
        ))}
        <div className="downarrows">
          <img src={downarrows} alt="downarrows" />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page One
      </TabPanel>
    </div>
  );
}

import "./App.css";
import Sidebar from "./components/Sidebar";
import Web3 from "web3";
import { useState } from "react";

import {
  FUN_LOTTERY_ABI,
  FUN_LOTTERY_ADDRESS,
} from "./smartcontract/funlottery";
//import { FUN_COIN_ADDRESS,FUN_COIN_ABI } from "./smartcontract/funcoin";

import {
  FUN_COIN_ADDRESS,
  FUN_COIN_ABI,
} from "./smartcontract/funcoin";

function App() {
  const [address, setAddress] = useState("");
  const connectToMetaMask = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }

    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    if (accounts != undefined) {
      setAddress(accounts);
      console.log(accounts);
    }
  };

  const approvefromWeb3 = async () => {
    //approve function
    console.log("12312321321",FUN_COIN_ABI,FUN_COIN_ADDRESS,FUN_LOTTERY_ADDRESS);
    //check balance of user
    // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    // const accounts = await web3.eth.getAccounts();

    // console.log(FUN_LOTTERY_ABI,FUN_LOTTERY_ADDRESS);
    // const todoList = new web3.eth.Contract(
    //   (FUN_LOTTERY_ABI),
    //   FUN_LOTTERY_ADDRESS
    // );
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

    const contracts = new web3.eth.Contract(
      (FUN_COIN_ABI),
      FUN_COIN_ADDRESS
    );
 

    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await contracts.methods.approve("0xd1095190f9Cb451c6AA2F7dD0119834b9F91cE8E",10000000).estimateGas();
    const result = await contracts.methods.approve("0xd1095190f9Cb451c6AA2F7dD0119834b9F91cE8E",10000000).send({
      from: account,
      gas 
    })
    console.log(result);

  };

  return (
    <div>
      <Sidebar
        onConnectWithMetamask={connectToMetaMask}
        approvefromWeb3={approvefromWeb3}
        address={address}
      />
    </div>
  );
}

export default App;

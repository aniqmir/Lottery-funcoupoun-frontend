import "./App.css";
import Sidebar from "./components/Sidebar";
import Web3 from "web3";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

import {
  // FUN_LOTTERY_ABI,
  FUN_LOTTERY_ADDRESS,
} from "./smartcontract/funlottery";

import { FUN_COIN_ADDRESS, FUN_COIN_ABI } from "./smartcontract/funcoin";

function App() {
  const [address, setAddress] = useState([]);
  const [approved, setApproved] = useState(false);

  const connectToMetaMask = async () => {
    if (address.length === 0) {
      if (window.ethereum) {
        console.log("herer 1");
        window.web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          updateAddress();
        } catch (err) {
          console.log(err);
        }
      } else if (window.web3) {
        console.log("herer 2");
        window.web3 = new Web3(window.web3.currentProvider);
        updateAddress();
      } else {
        alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    } else {
      alert("Already Connected");
    }
  };

  const updateAddress = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    if (accounts !== undefined) {
      setAddress(accounts);
    }
  };

  useEffect(() => {
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      updateAddress();
    }
  }, []);

  const approvefromWeb3 = async () => {
    // const accounts = await window.ethereum.enable();
    //approve function
    // console.log(
    //   "12312321321",
    //   FUN_COIN_ABI,
    //   FUN_COIN_ADDRESS,
    //   FUN_LOTTERY_ADDRESS,
    //   "asdfg",
    //   accounts[0]
    // );
    //check balance of user
    // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    // const accounts = await web3.eth.getAccounts();

    // console.log(FUN_LOTTERY_ABI,FUN_LOTTERY_ADDRESS);
    // const todoList = new web3.eth.Contract(
    //   (FUN_LOTTERY_ABI),
    //   FUN_LOTTERY_ADDRESS
    // );
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

    const SimpleContract = new web3.eth.Contract(
      FUN_COIN_ABI,
      FUN_COIN_ADDRESS
    );

    // const account = accounts[0];

    // const gas = await contracts.methods
    //   .approve(account, 10000000)
    //   .estimateGas();
    // const result = await contracts.methods.approve("0x4d23c8E0e601C5e37b062832427b2D62777fAEF9", 10000000).send();
    // console.log(result);

    // const accounts = await window.ethereum.enable();
    // const account = accounts[0];
    // const gas = await SimpleContract.methods.approve("0x4d23c8E0e601C5e37b062832427b2D62777fAEF9", 10000000).estimateGas();
    // const result = await SimpleContract.methods.approve("0x4d23c8E0e601C5e37b062832427b2D62777fAEF9", 10000000).send({ from: account, gas });
    // console.log(result);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      FUN_COIN_ADDRESS,
      FUN_COIN_ABI,
      signer
    );
    const transaction = await contract.approve(FUN_LOTTERY_ADDRESS, 100000000);
    if (!!transaction.hash) {
      setApproved(true);
    }
  };

  return (
    <div>
      <Sidebar
        onConnectWithMetamask={connectToMetaMask}
        approvefromWeb3={approvefromWeb3}
        address={address}
        approved={approved}
      />
    </div>
  );
}

export default App;

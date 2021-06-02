import "./App.css";
import Sidebar from "./components/Sidebar";
import Web3 from "web3";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

import {
  FUN_LOTTERY_ABI,
  FUN_LOTTERY_ADDRESS,
} from "./smartcontract/funlottery";

import { FUN_COIN_ADDRESS, FUN_COIN_ABI } from "./smartcontract/funcoin";

function App() {
  const [address, setAddress] = useState([]);
  const [approved, setApproved] = useState(false);

  const connectToMetaMask = async () => {
    if (address.length === 0) {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          updateAddress();
        } catch (err) {
          console.log(err);
        }
      } else if (window.web3) {
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
    const network = await web3.eth.net.getId();

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
    const web3 = new Web3(Web3.givenProvider);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      FUN_COIN_ADDRESS,
      FUN_COIN_ABI,
      signer
    );

    const accounts = await web3.eth.getAccounts();

    if (accounts.length > 0) {
      const balance = await contract.balanceOf(accounts[0]);
      const transaction = await contract.approve(
        FUN_LOTTERY_ADDRESS,
        balance.toNumber()
      );
      if (!!transaction.hash) {
        setApproved(true);
      }
    }
  };

  const claimMultiple = async () => {
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");

    var sizes = [100]; //size  100, 100, 100 , 1000

    var lotteryIDs = [1]; // latestID  1, 1, 1 , 1

    var ticketNum = []; // All number of Lottery array  1,4, 5 , 12

    web3.eth.handleRevert = true;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      FUN_LOTTERY_ADDRESS,
      FUN_LOTTERY_ABI,
      signer
    );

    console.log("signer", signer, contract, sizes, lotteryIDs, ticketNum);

    const transaction = await contract.claimMultiple(
      sizes,
      lotteryIDs,
      ticketNum
    );

    console.log("transaction", transaction);
    //const claimMultiple(uint256[] memory _sizes, uint256[] memory _lotteryids, uint256[] memory _ticketnums)
    if (!!transaction.hash) {
      console.log("transaction:", transaction);
    }
    // wait for 5 seconds
    await web3.eth.getTransactionReceipt(transaction.hash, (err, txReceipt) =>
      console.log("Err:", err, "txReciept:", txReceipt)
    );
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

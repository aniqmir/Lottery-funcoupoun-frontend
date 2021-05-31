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
      console.log(transaction, "transaction");
      if (!!transaction.hash) {
        setApproved(true);
      }
    }
  };

  const claimMultiple = async () => {
    const web3 = new Web3(Web3.givenProvider);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      FUN_COIN_ADDRESS,
      FUN_COIN_ABI,
      signer
    );

    var sizes = [100, 100, 1000]; //size

    var lotteryIDs = [1, 1, 1]; // latestID

    var ticketNum = [2, 3, 1]; // All number of Lottery array

    const transaction = await contract.claimMultiple(
      sizes,
      lotteryIDs,
      ticketNum
    );
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

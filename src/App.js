import "./App.css";
import Sidebar from "./components/Sidebar";
import Web3 from "web3";
import { useState } from "react";

import {
  FUN_LOTTERY_ABI,
  FUN_LOTTERY_ADDRESS,
} from "./smartcontract/funlottery";
import { FUN_COIN_ABI, FUN_COIN_ADDRESS } from "./smartcontract/funcoin";

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

  const approvefromWeb3 = () => {
    //approve function

    //check balance of user

    const web3 = window.web3;

    const contract = new web3.eth.Contract(
      JSON.parse(FUN_LOTTERY_ABI),
      FUN_LOTTERY_ADDRESS
    );

    //to do approve
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

import "./App.css";
import Sidebar from "./components/Sidebar";
import Web3 from 'web3';

function App() {
  const connectToMetaMask = () => {
    //connect here
   // try {
    // const web3 = window.web3
    // const accounts = web3.eth.getAccounts()
   
    
      // if (accounts != undefined){
      //   console.log(accounts);
      // }
      //else{
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          window.ethereum.enable();
        }
        else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
        }
        else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }

    const web3 = window.web3
    const accounts = web3.eth.getAccounts()
    if (accounts != undefined){
        console.log(accounts)
    }
   // }
    // }
    // catch (error) {
    //   console.log("Error:"+error)

    // }


  };

  return (
    <div>
      <Sidebar onConnectWithMetamask={connectToMetaMask}/>
    </div>
  );
}

export default App;

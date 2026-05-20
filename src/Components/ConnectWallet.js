// src/Components/ConnectWallet.js
import React, { useState } from "react";
import { ethers } from "ethers";

function ConnectWallet() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!account ? (
        <button className="wallet-btn" onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <div className="connected-box">
          <strong>Connected:</strong> {account}
        </div>
      )}
    </div>
  );
}

export default ConnectWallet;
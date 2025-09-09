import { ethers } from "ethers";

let account;

// Get references to UI elements
const connectButton = document.getElementById("connect");
const signButton = document.getElementById("sign");
const status = document.getElementById("status");

// Connect to MetaMask
connectButton.addEventListener("click", async () => {
    console.log("Connecting to MetaMask...");
    
  if (typeof window.ethereum === "undefined") {
    status.innerText = "MetaMask is not installed!";
    return;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    account = accounts[0];
    status.innerText = `Connected: ${account}`;
  } catch (error) {
    status.innerText = `Error: ${error.message}`;
  }
});

// Sign a message
signButton.addEventListener("click", async () => {
  if (!account) {
    status.innerText = "Connect MetaMask first!";
    return;
  }

  const message = "Hello from WaleeChain!";
  try {
    const signature = await window.ethereum.request({
      method: "personal_sign",
      params: [message, account],
    });

    // Verify signature
    const recovered = ethers.verifyMessage(message, signature);

    status.innerText = `Signature: ${signature}\nRecovered: ${recovered}`;
  } catch (error) {
    status.innerText = `Error: ${error.message}`;
  }
});

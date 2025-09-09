import { ethers } from "ethers";

let account;

// Get references to UI elements
const connectButton = document.getElementById("connect");
const signButton = document.getElementById("sign");
const status = document.getElementById("status");
const messageInput = document.getElementById("message-input");

<!-- Add this above your "Sign Message" button -->
<input type="text" id="message-input" placeholder="Enter message to sign" style="width: 100%; margin-bottom: 10px;" />

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

  const message = messageInput.value.trim();
  if (!message) {
    status.innerText = "Please enter a message to sign.";
    return;
  }

  try {
    const signature = await window.ethereum.request({
      method: "personal_sign",
      params: [message, account],
    });

    const recovered = ethers.utils.verifyMessage(message, signature);
    status.innerText = `Signature: ${signature}\nRecovered: ${recovered}`;
  } catch (error) {
    status.innerText = `Error: ${error.message}`;
  }
});

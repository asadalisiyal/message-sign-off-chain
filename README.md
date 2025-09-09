# MetaMask & Keplr Sign Demo

This project demonstrates message signing using MetaMask (Ethereum) and Keplr (Cosmos) wallets in a simple HTML/JS frontend.

## Features

- Connect MetaMask and sign messages using Ethers.js
- Connect Keplr and sign messages using Amino signing

## Prerequisites

- [Node.js](https://nodejs.org/) installed (for running a local server)
- MetaMask browser extension installed
- Keplr browser extension installed

## Installation

No dependencies required for the frontend.  
To run locally, you can use any static server. Here are two options:

### Option 1: Using VS Code Live Server

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.

### Option 2: Using Node.js `http-server`

1. Install `http-server` globally:
    ```bash
    npm install -g http-server
    ```
2. Run the server in the project directory:
    ```bash
    http-server ./public
    ```
3. Open [http://localhost:8080](http://localhost:8080) in your browser.

## Usage

1. Open the app in your browser.
2. Use the MetaMask section to connect and sign a message.
3. Use the Keplr section to connect and sign a message (make sure your Keplr extension supports the `wle` chain or change the chain ID as needed).

## Notes

- For Keplr, the chain ID (`wle`) must be added to your Keplr extension.  
- This demo is for educational purposes and does not include
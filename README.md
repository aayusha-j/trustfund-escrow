# 🔐 TrustFund Escrow — Decentralized Escrow Payment DApp

> A Web3-powered escrow platform built on Ethereum that enables trustless, transparent payments between buyers and sellers — without any middlemen.

---

## 🌐 Live Demo

> Deployed on Sepolia Testnet  
> Connect MetaMask to interact with real smart contracts

---

## 📸 Screenshots

<img width="1920" height="919" alt="Screenshot (217)" src="https://github.com/user-attachments/assets/8250621d-98f8-4485-a730-5c15bfe425a4" />
<img width="1920" height="934" alt="Screenshot (216)" src="https://github.com/user-attachments/assets/dfa0ab7a-af8b-42b5-b763-a674476575c0" />
<img width="1920" height="895" alt="Screenshot (215)" src="https://github.com/user-attachments/assets/a05b1fab-353b-426f-b3cb-5da923d9c6e3" />
<img width="1920" height="924" alt="Screenshot (214)" src="https://github.com/user-attachments/assets/2f111a8e-2980-4d8b-8a48-2a41f661c1c2" />
<img width="1920" height="928" alt="Screenshot (213)" src="https://github.com/user-attachments/assets/1cdc087a-f25d-4c11-b714-95d123e4193b" />


---

## 📖 Description

**TrustFund Escrow** is a decentralized application (DApp) that allows buyers and sellers to transact securely using Ethereum smart contracts. Instead of trusting a third party with your funds, the smart contract holds the ETH until the buyer confirms delivery — only then are funds released to the seller.

If the buyer is unsatisfied, they can trigger a full refund directly from the app. Every transaction is recorded permanently on the Ethereum blockchain, ensuring complete transparency and security.

Built with **React.js** on the frontend and **Solidity** smart contracts deployed on the **Sepolia testnet**.

---

## ✨ Features

- 🦊 **MetaMask Wallet Integration** — Connect your wallet in one click
- 🟢 **Live Network Detection** — Warns if you're on the wrong network and lets you switch to Sepolia instantly
- 🔐 **Create Escrow Contracts** — Deploy a new escrow smart contract with seller address and ETH amount
- ✅ **Approve Payment** — Release locked ETH to the seller after confirming delivery
- ↩️ **Refund Buyer** — Return locked ETH to yourself if delivery is not satisfactory
- 📋 **Copy Contract Address** — One-click copy of the deployed contract address after creation
- 🔍 **Live Contract Status Checker** — Fetch real-time on-chain data from any escrow contract
- 📊 **Transaction Dashboard** — View all your transactions with status badges (Pending / Approved / Refunded)
- 💾 **Persistent Storage** — Transaction history saved to localStorage, survives page refreshes
- 🗂️ **Stats Overview** — Live count of Total, Approved, Refunded, and Pending transactions
- 🎨 **Beautiful UI** — Frosted glass design with purple-blue gradient theme
- ✅ **Confirmation Modals** — Every critical action requires confirmation before executing
- 📬 **Toast Notifications** — Success and error feedback after every action

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, CSS3 |
| Blockchain | Ethereum (Solidity ^0.8.22) |
| Web3 Library | ethers.js v6 |
| Wallet | MetaMask |
| Network | Sepolia Testnet |
| Styling | Inline styles + CSS (Poppins font) |
| Storage | localStorage (transaction persistence) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [MetaMask](https://metamask.io/) browser extension
- Sepolia testnet ETH (get from [Sepolia Faucet](https://sepoliafaucet.com/))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/trustfund-escrow.git

# 2. Navigate into the project
cd trustfund-escrow

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at `http://localhost:3000`

---

## 🔧 How to Use

### 1. Connect Wallet
- Click **Connect Wallet** in the navbar
- Approve the MetaMask popup
- Make sure you are on the **Sepolia** testnet

### 2. Create an Escrow
- Fill in the **Seller Name**, **Seller Wallet Address**, and **Amount (ETH)**
- Click **🚀 Create Escrow**
- Confirm the transaction in MetaMask
- The deployed **Contract Address** appears — copy it for later

### 3. Approve or Refund
- Paste the contract address in the **Approve or Refund** panel
- Click **✅ Approve** to release ETH to the seller
- Click **↩️ Refund** to return ETH to yourself
- Confirm in MetaMask — status updates instantly in the table

### 4. Check Any Contract
- Use the **🔍 Live Contract Status Checker**
- Paste any escrow contract address
- View real-time balance, buyer, seller, and status on-chain

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── NavbarWithSections.jsx   # Navbar + Hero + How It Works + Features + Roles
│   ├── EscrowPage.js            # Main dashboard (Create + Approve/Refund + History)
│   ├── EscrowActions.js         # (Legacy) Create escrow form
│   ├── EscrowInteract.js        # (Legacy) Approve/refund panel
│   ├── ConnectWallet.js         # Wallet connection component
│   └── TransactionHistory.js   # Transaction table component
├── Contracts/
│   ├── Config.js                # Contract ABI + Bytecode config
│   └── TrustFundEscrow.json    # Compiled contract artifact
├── App.js                       # Root component
└── App.css                      # Global styles
```

---

## 📜 Smart Contract

The escrow smart contract is written in **Solidity ^0.8.22** and deployed on the **Sepolia testnet**.

### Key Functions

| Function | Description |
|---|---|
| `constructor(address _seller)` | Deploys contract, sets buyer, seller, locks ETH |
| `approvePayment()` | Buyer releases ETH to seller |
| `refundBuyer()` | Buyer reclaims locked ETH |
| `getBalance()` | Returns current contract ETH balance |
| `isApproved()` | Returns whether payment was approved |
| `isRefunded()` | Returns whether refund was issued |

### Security Features
- ✅ Only the **buyer** can approve or refund
- ✅ **Reentrancy protection** — transaction marked before transfer
- ✅ **One-time execution** — cannot approve and refund the same contract

---

## ⚙️ Environment

This project runs on the **Sepolia Ethereum testnet**. No real ETH is used.

Get free Sepolia ETH from:
- https://sepoliafaucet.com/
- https://faucet.sepolia.dev/

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "Add your feature"
git push origin feature/your-feature-name
# Open a Pull Request
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**  
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)  
- LinkedIn: [Your LinkedIn](https://linkedin.com)

---

## ⭐ Show Your Support

If you found this project helpful, please give it a **⭐ star** on GitHub — it means a lot!

---

> Built with ❤️ using React.js + Ethereum + MetaMask

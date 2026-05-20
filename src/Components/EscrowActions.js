// import React, { useState } from "react";
// import { ethers } from "ethers";

// // ✅ Your ABI
// const contractABI = [
//   {
//     "inputs": [{ "internalType": "address", "name": "_seller", "type": "address" }],
//     "stateMutability": "payable",
//     "type": "constructor"
//   },
//   { "inputs": [], "name": "amount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
//   { "inputs": [], "name": "approvePayment", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
//   { "inputs": [], "name": "buyer", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
//   { "inputs": [], "name": "getBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
//   { "inputs": [], "name": "isApproved", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
//   { "inputs": [], "name": "isRefunded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
//   { "inputs": [], "name": "refundBuyer", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
//   { "inputs": [], "name": "seller", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
// ];

// // ✅ Your Bytecode (unchanged)
// const contractBytecode = "0x6080604052604051610b25380380610b258339818101604052810190610025919061010f565b335f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346002819055505061013a565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100de826100b5565b9050919050565b6100ee816100d4565b81146100f8575f5ffd5b50565b5f81519050610109816100e5565b92915050565b5f60208284031215610124576101236100b1565b5b5f610131848285016100fb565b91505092915050565b6109de806101475f395ff3fe608060405234801561000f575f5ffd5b5060043610610086575f3560e01c8063779cd08311610059578063779cd0831461010257806396fd340914610120578063aa8c217c1461012a578063e8a61cc81461014857610086565b806308551a531461008a57806312065fe0146100a857806328f371aa146100c65780637150d8ae146100e4575b5f5ffd5b610092610152565b60405161009f91906106d2565b60405180910390f35b6100b0610177565b6040516100bd9190610703565b60405180910390f35b6100ce61017e565b6040516100db9190610736565b60405180910390f35b6100ec610190565b6040516100f991906106d2565b60405180910390f35b61010a6101b4565b6040516101179190610736565b60405180910390f35b6101286101c7565b005b61013261042a565b60405161013f9190610703565b60405180910390f35b610150610430565b005b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f47905090565b60035f9054906101000a900460ff1681565b5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360019054906101000a900460ff1681565b600360029054906101000a900460ff1615610217576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020e906107a9565b60405180910390fd5b6001600360026101000a81548160ff0219169083151502179055505f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b790610811565b60405180910390fd5b60035f9054906101000a900460ff161580156102e95750600360019054906101000a900460ff16155b610328576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031f90610879565b60405180910390fd5b600160035f6101000a81548160ff0219169083151502179055505f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660025460405161038a906108c4565b5f6040518083038185875af1925050503d805f81146103c4576040519150601f19603f3d011682016040523d82523d5f602084013e6103c9565b606091505b505090508061040d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040490610922565b60405180910390fd5b505f600360026101000a81548160ff021916908315150217905550565b60025481565b600360029054906101000a900460ff1615610480576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610477906107a9565b60405180910390fd5b6001600360026101000a81548160ff0219169083151502179055505f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610529576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090610811565b60405180910390fd5b60035f9054906101000a900460ff161580156105525750600360019054906101000a900460ff16155b610591576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058890610879565b60405180910390fd5b6001600360016101000a81548160ff0219169083151502179055505f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166002546040516105f3906108c4565b5f6040518083038185875af1925050503d805f811461062d576040519150601f19603f3d011682016040523d82523d5f602084013e610632565b606091505b5050905080610676576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066d9061098a565b60405180910390fd5b505f600360026101000a81548160ff021916908315150217905550565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6106bc82610693565b9050919050565b6106cc816106b2565b82525050565b5f6020820190506106e55f8301846106c3565b92915050565b5f819050919050565b6106fd816106eb565b82525050565b5f6020820190506107165f8301846106f4565b92915050565b5f8115159050919050565b6107308161071c565b82525050565b5f6020820190506107495f830184610727565b92915050565b5f82825260208201905092915050565b7f5265656e7472616e742063616c6c2064657465637465640000000000000000005f82015250565b5f61079360178361074f565b915061079e8261075f565b602082019050919050565b5f6020820190508181035f8301526107c081610787565b9050919050565b7f4f6e6c79206275796572000000000000000000000000000000000000000000005f82015250565b5f6107fb600a8361074f565b9150610806826107c7565b602082019050919050565b5f6020820190508181035f830152610828816107ef565b9050919050565b7f416c72656164792070726f6365737365640000000000000000000000000000005f82015250565b5f61086360118361074f565b915061086e8261082f565b602082019050919050565b5f6020820190508181035f83015261089081610857565b9050919050565b5f81905092915050565b50565b5f6108af5f83610897565b91506108ba826108a1565b5f82019050919050565b5f6108ce826108a4565b9150819050919050565b7f5472616e73666572206661696c656400000000000000000000000000000000005f82015250565b5f61090c600f8361074f565b9150610917826108d8565b602082019050919050565b5f6020820190508181035f83015261093981610900565b9050919050565b7f526566756e64206661696c6564000000000000000000000000000000000000005f82015250565b5f610974600d8361074f565b915061097f82610940565b602082019050919050565b5f6020820190508181035f8301526109a181610968565b905091905056fea2646970667358221220c12036e16d6b692d9ef67cc58e5edafeab4bda21b62a4006351a7757feaadfe964736f6c63430008220033";

// function EscrowActions() {
//   const [sellerName, setSellerName]       = useState("");
//   const [sellerAddress, setSellerAddress] = useState("");
//   const [value, setValue]                 = useState("");

//   const handleCreateEscrow = async (e) => {
//     e.preventDefault();
//     try {
//       if (!window.ethereum) { alert("Please install MetaMask"); return; }

//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer   = await provider.getSigner();
//       const factory  = new ethers.ContractFactory(contractABI, contractBytecode, signer);
//       const contract = await factory.deploy(sellerAddress, {
//         value: ethers.parseEther(value),
//       });

//       console.log("Deploying contract...");
//       await contract.waitForDeployment();

//       const address = await contract.getAddress();
//       console.log("Escrow Contract Address:", address);
//       alert(`Escrow Created!\nContract Address:\n${address}`);

//       setSellerName(""); setSellerAddress(""); setValue("");
//     } catch (error) {
//       console.error(error);
//       alert("Transaction Failed");
//     }
//   };

//   /* ── same frosted-glass card used everywhere else ── */
//   const glassCard = {
//     background: "rgba(255, 255, 255, 0.55)",
//     backdropFilter: "blur(14px)",
//     WebkitBackdropFilter: "blur(14px)",
//     border: "1px solid rgba(255, 255, 255, 0.45)",
//     borderRadius: "24px",
//     boxShadow: "0 8px 32px rgba(99, 102, 241, 0.12)",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "14px 16px",
//     marginBottom: "16px",
//     borderRadius: "12px",
//     border: "1px solid #dbeafe",
//     background: "rgba(255,255,255,0.85)",
//     color: "#0f172a",
//     fontSize: "15px",
//     fontFamily: "Poppins, sans-serif",
//     boxSizing: "border-box",
//     outline: "none",
//     transition: "border-color 0.2s, box-shadow 0.2s",
//   };

//   return (
//     /* ✅ background: "transparent" — body gradient shows through */
//     <div
//       id="escrow-section"
//       style={{
//         padding: "80px 20px 120px",
//         background: "transparent",
//         textAlign: "center",
//       }}
//     >
//       {/* Section badge */}
//       <div
//         style={{
//           display: "inline-block",
//           padding: "8px 22px",
//           borderRadius: "40px",
//           background: "rgba(255,255,255,0.7)",
//           border: "1px solid rgba(255,255,255,0.5)",
//           backdropFilter: "blur(10px)",
//           color: "#6366f1",
//           fontSize: "13px",
//           fontWeight: 700,
//           marginBottom: "20px",
//           letterSpacing: "0.5px",
//         }}
//       >
//         🔐 Powered by Ethereum Smart Contracts
//       </div>

//       <h1
//         style={{
//           fontSize: "40px",
//           fontWeight: 800,
//           color: "#0f172a",
//           marginBottom: "10px",
//           lineHeight: 1.2,
//         }}
//       >
//         Create Your{" "}
//         <span
//           style={{
//             background: "linear-gradient(90deg, #a855f7, #2563eb)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Secure Escrow
//         </span>
//       </h1>

//       <p style={{ color: "#64748b", marginBottom: "50px", fontSize: "16px" }}>
//         Deploy a smart contract and lock funds until delivery is confirmed
//       </p>

//       {/* Frosted glass form card */}
//       <div
//         style={{
//           ...glassCard,
//           maxWidth: "520px",
//           margin: "0 auto",
//           padding: "44px 40px",
//           textAlign: "left",
//         }}
//       >
//         <form onSubmit={handleCreateEscrow}>

//           {/* Seller Name */}
//           <label style={{ fontSize: "13px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "6px" }}>
//             Seller Name
//           </label>
//           <input
//             type="text"
//             placeholder="e.g. ABC Corp"
//             value={sellerName}
//             onChange={(e) => setSellerName(e.target.value)}
//             style={inputStyle}
//             required
//           />

//           {/* Seller Address */}
//           <label style={{ fontSize: "13px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "6px" }}>
//             Seller Wallet Address
//           </label>
//           <input
//             type="text"
//             placeholder="0x..."
//             value={sellerAddress}
//             onChange={(e) => setSellerAddress(e.target.value)}
//             style={inputStyle}
//             required
//           />

//           {/* Amount */}
//           <label style={{ fontSize: "13px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "6px" }}>
//             Amount (ETH)
//           </label>
//           <input
//             type="number"
//             placeholder="e.g. 0.5"
//             step="0.001"
//             min="0"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             style={inputStyle}
//             required
//           />

//           {/* Submit */}
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "16px",
//               marginTop: "8px",
//               background: "linear-gradient(135deg, #a855f7, #2563eb)",
//               color: "white",
//               border: "none",
//               borderRadius: "14px",
//               fontSize: "16px",
//               fontWeight: 700,
//               cursor: "pointer",
//               boxShadow: "0 10px 28px rgba(99,102,241,0.28)",
//               transition: "transform 0.2s",
//               fontFamily: "Poppins, sans-serif",
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
//             onMouseOut={(e)  => (e.currentTarget.style.transform = "translateY(0)")}
//           >
//             🚀 Create Escrow
//           </button>
//         </form>

//         {/* Info note */}
//         <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "13px", marginTop: "20px", marginBottom: 0 }}>
//           Funds are locked in the contract until you approve or request a refund.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default EscrowActions;
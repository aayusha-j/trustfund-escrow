// import React, { useState } from "react";
// import { ethers } from "ethers";

// /* ── ABI ── */
// const contractABI = [
//   { "inputs": [{ "internalType": "address", "name": "_seller", "type": "address" }], "stateMutability": "payable", "type": "constructor" },
//   { "inputs": [], "name": "approvePayment", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
//   { "inputs": [], "name": "refundBuyer",    "outputs": [], "stateMutability": "nonpayable", "type": "function" },
//   { "inputs": [], "name": "getBalance",     "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
//   { "inputs": [], "name": "isApproved",     "outputs": [{ "internalType": "bool",    "name": "", "type": "bool"    }], "stateMutability": "view", "type": "function" },
//   { "inputs": [], "name": "isRefunded",     "outputs": [{ "internalType": "bool",    "name": "", "type": "bool"    }], "stateMutability": "view", "type": "function" },
//   { "inputs": [], "name": "buyer",          "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
//   { "inputs": [], "name": "seller",         "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
//   { "inputs": [], "name": "amount",         "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
// ];

// const contractBytecode = "0x6080604052604051610b25380380610b258339818101604052810190610025919061010f565b335f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346002819055505061013a565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100de826100b5565b9050919050565b6100ee816100d4565b81146100f8575f5ffd5b50565b5f81519050610109816100e5565b92915050565b5f60208284031215610124576101236100b1565b5b5f610131848285016100fb565b91505092915050565b6109de806101475f395ff3fe608060405234801561000f575f5ffd5b5060043610610086575f3560e01c8063779cd08311610059578063779cd0831461010257806396fd340914610120578063aa8c217c1461012a578063e8a61cc81461014857610086565b806308551a531461008a57806312065fe0146100a857806328f371aa146100c65780637150d8ae146100e4575b5f5ffd5b610092610152565b60405161009f91906106d2565b60405180910390f35b6100b0610177565b6040516100bd9190610703565b60405180910390f35b6100ce61017e565b6040516100db9190610736565b60405180910390f35b6100ec610190565b6040516100f991906106d2565b60405180910390f35b61010a6101b4565b6040516101179190610736565b60405180910390f35b6101286101c7565b005b61013261042a565b60405161013f9190610703565b60405180910390f35b610150610430565b005b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f47905090565b60035f9054906101000a900460ff1681565b5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360019054906101000a900460ff1681565b600360029054906101000a900460ff1615610217576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020e906107a9565b60405180910390fd5b6001600360026101000a81548160ff0219169083151502179055505f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b790610811565b60405180910390fd5b60035f9054906101000a900460ff161580156102e95750600360019054906101000a900460ff16155b610328576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031f90610879565b60405180910390fd5b600160035f6101000a81548160ff0219169083151502179055505f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660025460405161038a906108c4565b5f6040518083038185875af1925050503d805f81146103c4576040519150601f19603f3d011682016040523d82523d5f602084013e6103c9565b606091505b505090508061040d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040490610922565b60405180910390fd5b505f600360026101000a81548160ff021916908315150217905550565b60025481565b600360029054906101000a900460ff1615610480576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610477906107a9565b60405180910390fd5b6001600360026101000a81548160ff0219169083151502179055505f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610529576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090610811565b60405180910390fd5b60035f9054906101000a900460ff161580156105525750600360019054906101000a900460ff16155b610591576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058890610879565b60405180910390fd5b6001600360016101000a81548160ff0219169083151502179055505f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166002546040516105f3906108c4565b5f6040518083038185875af1925050503d805f811461062d576040519150601f19603f3d011682016040523d82523d5f602084013e610632565b606091505b5050905080610676576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066d9061098a565b60405180910390fd5b505f600360026101000a81548160ff021916908315150217905550565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6106bc82610693565b9050919050565b6106cc816106b2565b82525050565b5f6020820190506106e55f8301846106c3565b92915050565b5f819050919050565b6106fd816106eb565b82525050565b5f6020820190506107165f8301846106f4565b92915050565b5f8115159050919050565b6107308161071c565b82525050565b5f6020820190506107495f830184610727565b92915050565b5f82825260208201905092915050565b7f5265656e7472616e742063616c6c2064657465637465640000000000000000005f82015250565b5f61079360178361074f565b915061079e8261075f565b602082019050919050565b5f6020820190508181035f8301526107c081610787565b9050919050565b7f4f6e6c79206275796572000000000000000000000000000000000000000000005f82015250565b5f6107fb600a8361074f565b9150610806826107c7565b602082019050919050565b5f6020820190508181035f830152610828816107ef565b9050919050565b7f416c72656164792070726f6365737365640000000000000000000000000000005f82015250565b5f61086360118361074f565b915061086e8261082f565b602082019050919050565b5f6020820190508181035f83015261089081610857565b9050919050565b5f81905092915050565b50565b5f6108af5f83610897565b91506108ba826108a1565b5f82019050919050565b5f6108ce826108a4565b9150819050919050565b7f5472616e73666572206661696c656400000000000000000000000000000000005f82015250565b5f61090c600f8361074f565b9150610917826108d8565b602082019050919050565b5f6020820190508181035f83015261093981610900565b9050919050565b7f526566756e64206661696c6564000000000000000000000000000000000000005f82015250565b5f610974600d8361074f565b915061097f82610940565b602082019050919050565b5f6020820190508181035f8301526109a181610968565b905091905056fea2646970667358221220c12036e16d6b692d9ef67cc58e5edafeab4bda21b62a4006351a7757feaadfe964736f6c63430008220033";

// /* ── helpers ── */
// const glass = {
//   background: "rgba(255,255,255,0.55)",
//   backdropFilter: "blur(14px)",
//   WebkitBackdropFilter: "blur(14px)",
//   border: "1px solid rgba(255,255,255,0.45)",
//   borderRadius: "22px",
//   boxShadow: "0 8px 32px rgba(99,102,241,0.10)",
// };

// const statusColors = {
//   Approved: { color: "#16a34a", bg: "rgba(22,163,74,0.10)",  border: "rgba(22,163,74,0.25)"  },
//   Refunded: { color: "#dc2626", bg: "rgba(220,38,38,0.10)",  border: "rgba(220,38,38,0.25)"  },
//   Pending:  { color: "#d97706", bg: "rgba(217,119,6,0.10)",  border: "rgba(217,119,6,0.25)"  },
// };

// const short = (addr) => addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

// /* ── Toast ── */
// function Toast({ msg, type }) {
//   if (!msg) return null;
//   const ok = type === "success";
//   return (
//     <div style={{
//       display: "flex", alignItems: "center", gap: "10px",
//       padding: "13px 18px", borderRadius: "12px", marginBottom: "18px",
//       background: ok ? "rgba(22,163,74,0.12)" : "rgba(220,38,38,0.12)",
//       border: `1px solid ${ok ? "rgba(22,163,74,0.35)" : "rgba(220,38,38,0.35)"}`,
//       color: ok ? "#15803d" : "#b91c1c",
//       fontWeight: 700, fontSize: "14px",
//       animation: "fadeIn 0.3s ease",
//     }}>
//       <span style={{ fontSize: "18px" }}>{ok ? "✅" : "❌"}</span>
//       {msg}
//     </div>
//   );
// }

// /* ── Copy chip ── */
// function CopyAddress({ address }) {
//   const [copied, setCopied] = useState(false);
//   return (
//     <span
//       onClick={() => { navigator.clipboard.writeText(address); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
//       title={address}
//       style={{
//         cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "4px",
//         padding: "3px 10px", borderRadius: "8px",
//         background: copied ? "rgba(22,163,74,0.12)" : "rgba(37,99,235,0.08)",
//         color: copied ? "#16a34a" : "#2563eb",
//         fontWeight: 600, fontSize: "12px", fontFamily: "monospace",
//         border: `1px solid ${copied ? "rgba(22,163,74,0.3)" : "rgba(37,99,235,0.18)"}`,
//         transition: "all 0.2s", userSelect: "none", whiteSpace: "nowrap",
//       }}
//     >
//       {copied ? "✓ Copied!" : short(address)}
//       {!copied && (
//         <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
//         </svg>
//       )}
//     </span>
//   );
// }

// export default function EscrowPage() {

//   /* ── Create Escrow state ── */
//   const [sellerName,    setSellerName]    = useState("");
//   const [sellerAddress, setSellerAddress] = useState("");
//   const [value,         setValue]         = useState("");
//   const [createToast,   setCreateToast]   = useState({ msg: "", type: "" });

//   /* ── Approve / Refund state ── */
//   const [contractAddr, setContractAddr] = useState("");
//   const [actionToast,  setActionToast]  = useState({ msg: "", type: "" });
//   const [loading,      setLoading]      = useState("");

//   /* ── Transaction history ── */
//   const [transactions, setTransactions] = useState([
//     { id: 1, contract: "0xA1B2C3D4E5F67890ABCDEF1234567890ABCDEF12", seller: "0xABC1234567890DEF1234567890ABCDEF12345678", amount: "1.2 ETH", status: "Approved" },
//     { id: 2, contract: "0xB2C3D4E5F6789012BCDEF1234567890BCDEF1234", seller: "0xDEF1234567890ABC1234567890ABCDEF56789012", amount: "0.8 ETH", status: "Refunded" },
//     { id: 3, contract: "0xC3D4E5F678901234CDEF1234567890CDEF123456", seller: "0x1234567890ABCDEF1234567890ABCDEF78901234", amount: "2.0 ETH", status: "Pending"  },
//   ]);

//   const showToast = (setter, msg, type) => {
//     setter({ msg, type });
//     setTimeout(() => setter({ msg: "", type: "" }), 4500);
//   };

//   /* ── Create escrow ── */
//   const handleCreateEscrow = async (e) => {
//     e.preventDefault();
//     try {
//       if (!window.ethereum) { alert("Please install MetaMask"); return; }
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer   = await provider.getSigner();
//       const factory  = new ethers.ContractFactory(contractABI, contractBytecode, signer);
//       const contract = await factory.deploy(sellerAddress, { value: ethers.parseEther(value) });
//       await contract.waitForDeployment();
//       const address = await contract.getAddress();

//       /* add to history */
//       setTransactions(prev => [...prev, {
//         id: prev.length + 1,
//         contract: address,
//         seller: sellerAddress,
//         amount: `${value} ETH`,
//         status: "Pending",
//       }]);

//       showToast(setCreateToast, `Escrow created! Contract: ${short(address)}`, "success");
//       setSellerName(""); setSellerAddress(""); setValue("");
//     } catch (err) {
//       console.error(err);
//       showToast(setCreateToast, "Transaction failed. Please try again.", "error");
//     }
//   };

//   /* ── Approve ── */
//   const handleApprove = async () => {
//     if (!contractAddr) { showToast(setActionToast, "Enter a contract address first.", "error"); return; }
//     setLoading("approve");
//     try {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer   = await provider.getSigner();
//       const contract = new ethers.Contract(contractAddr, contractABI, signer);
//       const tx = await contract.approvePayment();
//       await tx.wait();
//       setTransactions(prev => prev.map(t =>
//         t.contract.toLowerCase() === contractAddr.toLowerCase() ? { ...t, status: "Approved" } : t
//       ));
//       showToast(setActionToast, "Transaction Approved Successfully!", "success");
//     } catch (err) {
//       console.error(err);
//       showToast(setActionToast, "Approval failed. Check address & wallet.", "error");
//     }
//     setLoading("");
//   };

//   /* ── Refund ── */
//   const handleRefund = async () => {
//     if (!contractAddr) { showToast(setActionToast, "Enter a contract address first.", "error"); return; }
//     setLoading("refund");
//     try {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer   = await provider.getSigner();
//       const contract = new ethers.Contract(contractAddr, contractABI, signer);
//       const tx = await contract.refundBuyer();
//       await tx.wait();
//       setTransactions(prev => prev.map(t =>
//         t.contract.toLowerCase() === contractAddr.toLowerCase() ? { ...t, status: "Refunded" } : t
//       ));
//       showToast(setActionToast, "Transaction Refunded Successfully!", "success");
//     } catch (err) {
//       console.error(err);
//       showToast(setActionToast, "Refund failed. Check address & wallet.", "error");
//     }
//     setLoading("");
//   };

//   /* ── shared input style ── */
//   const inputStyle = {
//     width: "100%", padding: "13px 15px", borderRadius: "12px",
//     border: "1.5px solid #dbeafe", background: "rgba(255,255,255,0.85)",
//     color: "#0f172a", fontSize: "14px", fontFamily: "Poppins, sans-serif",
//     outline: "none", boxSizing: "border-box", marginBottom: "14px",
//     transition: "border-color 0.2s",
//   };

//   const label = (text) => (
//     <label style={{ fontSize: "12px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "5px" }}>
//       {text}
//     </label>
//   );

//   /* stats */
//   const total    = transactions.length;
//   const approved = transactions.filter(t => t.status === "Approved").length;
//   const refunded = transactions.filter(t => t.status === "Refunded").length;
//   const pending  = transactions.filter(t => t.status === "Pending").length;

//   const thStyle = {
//     padding: "13px 16px", fontWeight: 700, color: "#0f172a", fontSize: "13px",
//     textAlign: "left", whiteSpace: "nowrap",
//     borderBottom: "1px solid rgba(226,232,240,0.7)",
//     background: "rgba(99,102,241,0.06)",
//   };
//   const tdStyle = {
//     padding: "13px 16px", fontSize: "13px", color: "#334155",
//     borderBottom: "1px solid rgba(226,232,240,0.5)", verticalAlign: "middle",
//   };

//   return (
//     <div style={{ background: "transparent", padding: "80px 40px 120px" }}>

//       {/* ════ ROW 1: Create Escrow (left) + Approve/Refund (right) ════ */}
//       <div style={{ marginBottom: "20px", textAlign: "center" }}>
//         <h1 style={{ fontSize: "38px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px" }}>
//           Your Escrow{" "}
//           <span style={{ background: "linear-gradient(90deg,#a855f7,#2563eb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//             Dashboard
//           </span>
//         </h1>
//         <p style={{ color: "#64748b", fontSize: "15px", margin: 0 }}>
//           Create a new escrow on the left · Approve or refund an existing one on the right
//         </p>
//       </div>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", marginTop: "40px", alignItems: "start" }}>

//         {/* ── LEFT: Create Escrow form ── */}
//         <div>
//           <Toast msg={createToast.msg} type={createToast.type} />
//           <div style={{ ...glass, padding: "36px 32px" }}>

//             {/* Badge */}
//             <div style={{
//               display: "inline-block", padding: "6px 16px", borderRadius: "40px",
//               background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.5)",
//               color: "#6366f1", fontSize: "12px", fontWeight: 700, marginBottom: "16px",
//             }}>
//               🔐 Powered by Ethereum Smart Contracts
//             </div>

//             <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>
//               Create Your{" "}
//               <span style={{ background: "linear-gradient(90deg,#a855f7,#2563eb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                 Secure Escrow
//               </span>
//             </h2>
//             <p style={{ color: "#64748b", fontSize: "13px", marginTop: 0, marginBottom: "24px" }}>
//               Deploy a smart contract and lock funds until delivery is confirmed
//             </p>

//             <form onSubmit={handleCreateEscrow}>
//               {label("Seller Name")}
//               <input type="text" placeholder="e.g. ABC Corp" value={sellerName}
//                 onChange={e => setSellerName(e.target.value)} style={inputStyle} required
//                 onFocus={e => e.target.style.borderColor = "#6366f1"}
//                 onBlur={e  => e.target.style.borderColor = "#dbeafe"} />

//               {label("Seller Wallet Address")}
//               <input type="text" placeholder="0x..." value={sellerAddress}
//                 onChange={e => setSellerAddress(e.target.value)} style={{ ...inputStyle, fontFamily: "monospace" }} required
//                 onFocus={e => e.target.style.borderColor = "#6366f1"}
//                 onBlur={e  => e.target.style.borderColor = "#dbeafe"} />

//               {label("Amount (ETH)")}
//               <input type="number" placeholder="e.g. 0.5" step="0.001" min="0" value={value}
//                 onChange={e => setValue(e.target.value)} style={inputStyle} required
//                 onFocus={e => e.target.style.borderColor = "#6366f1"}
//                 onBlur={e  => e.target.style.borderColor = "#dbeafe"} />

//               <button type="submit" style={{
//                 width: "100%", padding: "15px", marginTop: "6px",
//                 background: "linear-gradient(135deg,#a855f7,#2563eb)",
//                 color: "white", border: "none", borderRadius: "13px",
//                 fontSize: "15px", fontWeight: 700, cursor: "pointer",
//                 boxShadow: "0 10px 28px rgba(99,102,241,0.28)",
//                 fontFamily: "Poppins, sans-serif", transition: "transform 0.2s",
//               }}
//                 onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
//                 onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
//               >
//                 🚀 Create Escrow
//               </button>
//             </form>

//             <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "12px", marginTop: "16px", marginBottom: 0 }}>
//               Funds are locked in the contract until you approve or request a refund.
//             </p>
//           </div>
//         </div>

//         {/* ── RIGHT: Approve / Refund ── */}
//         <div>
//           <Toast msg={actionToast.msg} type={actionToast.type} />
//           <div style={{ ...glass, padding: "36px 32px" }}>

//             <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
//               <span style={{ fontSize: "22px" }}>⚡</span>
//               <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 800, color: "#0f172a" }}>
//                 Approve or Refund
//               </h2>
//             </div>

//             <p style={{ color: "#64748b", fontSize: "13px", marginTop: 0, marginBottom: "22px", lineHeight: 1.6 }}>
//               Paste a deployed contract address below and choose an action.
//               Only the <strong>buyer</strong> wallet can approve or refund.
//             </p>

//             {label("Contract Address")}
//             <input
//               type="text" placeholder="0x..." value={contractAddr}
//               onChange={e => setContractAddr(e.target.value)}
//               style={{ ...inputStyle, fontFamily: "monospace", marginBottom: "22px" }}
//               onFocus={e => e.target.style.borderColor = "#6366f1"}
//               onBlur={e  => e.target.style.borderColor = "#dbeafe"}
//             />

//             <div style={{ display: "flex", gap: "14px", marginBottom: "22px" }}>
//               <button onClick={handleApprove} disabled={!!loading} style={{
//                 flex: 1, padding: "14px", borderRadius: "13px", border: "none",
//                 background: loading === "approve" ? "rgba(22,163,74,0.5)" : "linear-gradient(135deg,#16a34a,#15803d)",
//                 color: "white", fontWeight: 700, fontSize: "15px",
//                 cursor: loading ? "not-allowed" : "pointer",
//                 boxShadow: "0 8px 22px rgba(22,163,74,0.25)",
//                 fontFamily: "Poppins, sans-serif", transition: "transform 0.2s",
//               }}
//                 onMouseOver={e => { if (!loading) e.currentTarget.style.transform = "translateY(-2px)"; }}
//                 onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
//               >
//                 {loading === "approve" ? "⏳ Approving…" : "✅ Approve"}
//               </button>

//               <button onClick={handleRefund} disabled={!!loading} style={{
//                 flex: 1, padding: "14px", borderRadius: "13px", border: "none",
//                 background: loading === "refund" ? "rgba(220,38,38,0.5)" : "linear-gradient(135deg,#dc2626,#b91c1c)",
//                 color: "white", fontWeight: 700, fontSize: "15px",
//                 cursor: loading ? "not-allowed" : "pointer",
//                 boxShadow: "0 8px 22px rgba(220,38,38,0.25)",
//                 fontFamily: "Poppins, sans-serif", transition: "transform 0.2s",
//               }}
//                 onMouseOver={e => { if (!loading) e.currentTarget.style.transform = "translateY(-2px)"; }}
//                 onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
//               >
//                 {loading === "refund" ? "⏳ Refunding…" : "↩️ Refund"}
//               </button>
//             </div>

//             <div style={{
//               padding: "14px 16px", borderRadius: "12px",
//               background: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.15)",
//             }}>
//               <p style={{ margin: 0, fontSize: "13px", color: "#475569", lineHeight: 1.7 }}>
//                 <strong>💡 How it works:</strong><br />
//                 <b>Approve</b> → releases locked ETH to the seller.<br />
//                 <b>Refund</b> → returns locked ETH back to you (the buyer).
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ════ ROW 2: Stats + Transaction History (full width) ════ */}
//       <div style={{ marginTop: "60px" }}>

//         {/* Stat pills */}
//         <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "36px" }}>
//           {[
//             { label: "Total",    value: total,    emoji: "📊", color: "#6366f1" },
//             { label: "Approved", value: approved, emoji: "✅", color: "#16a34a" },
//             { label: "Refunded", value: refunded, emoji: "↩️", color: "#dc2626" },
//             { label: "Pending",  value: pending,  emoji: "⏳", color: "#d97706" },
//           ].map(s => (
//             <div key={s.label} style={{ ...glass, padding: "16px 32px", textAlign: "center", minWidth: "110px" }}>
//               <div style={{ fontSize: "22px" }}>{s.emoji}</div>
//               <div style={{ fontSize: "26px", fontWeight: 800, color: s.color }}>{s.value}</div>
//               <div style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>{s.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Transaction History table */}
//         <div style={{ ...glass, overflow: "hidden" }}>
//           <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(226,232,240,0.6)", display: "flex", alignItems: "center", gap: "10px" }}>
//             <span style={{ fontSize: "20px" }}>📋</span>
//             <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>Transaction History</h2>
//           </div>
//           <div style={{ overflowX: "auto" }}>
//             <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
//               <thead>
//                 <tr>
//                   {["#", "Contract Address", "Seller Address", "Amount", "Status"].map(h => (
//                     <th key={h} style={thStyle}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((tx, i) => {
//                   const sc = statusColors[tx.status];
//                   return (
//                     <tr key={tx.id}
//                       onMouseOver={e  => e.currentTarget.style.background = "rgba(99,102,241,0.04)"}
//                       onMouseOut={e   => e.currentTarget.style.background = "transparent"}
//                       style={{ transition: "background 0.2s" }}
//                     >
//                       <td style={{ ...tdStyle, color: "#94a3b8", fontWeight: 700 }}>#{tx.id}</td>
//                       <td style={tdStyle}><CopyAddress address={tx.contract} /></td>
//                       <td style={tdStyle}><CopyAddress address={tx.seller}   /></td>
//                       <td style={{ ...tdStyle, color: "#2563eb", fontWeight: 700 }}>{tx.amount}</td>
//                       <td style={tdStyle}>
//                         <span style={{
//                           padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 700,
//                           color: sc.color, background: sc.bg, border: `1px solid ${sc.border}`,
//                         }}>
//                           {tx.status}
//                         </span>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
//         @media (max-width: 900px) {
//           .escrow-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </div>
//   );
// }
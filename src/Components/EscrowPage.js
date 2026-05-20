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

// /* ── Confirmation Modal ── */
// function ConfirmModal({ modal, onConfirm, onCancel }) {
//   if (!modal) return null;
//   const isApprove  = modal.action === "approve";
//   const isRefund   = modal.action === "refund";
//   const isMetaMask = modal.action === "metamask";
//   const accent = isApprove ? "#16a34a" : isRefund ? "#dc2626" : "#2563eb";
//   const icon   = isApprove ? "✅" : isRefund ? "↩️" : "🦊";

//   return (
//     <div style={{
//       position: "fixed", inset: 0, zIndex: 9999,
//       background: "rgba(15,23,42,0.55)",
//       backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
//       display: "flex", alignItems: "center", justifyContent: "center",
//       animation: "fadeIn 0.2s ease",
//     }}>
//       <div style={{
//         background: "rgba(255,255,255,0.95)",
//         backdropFilter: "blur(20px)",
//         borderRadius: "24px",
//         padding: "40px 36px",
//         maxWidth: "420px", width: "90%",
//         boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
//         textAlign: "center",
//         animation: "slideUp 0.25s ease",
//       }}>
//         {/* Icon */}
//         <div style={{
//           width: "64px", height: "64px", borderRadius: "50%", margin: "0 auto 20px",
//           background: `rgba(${isApprove?"22,163,74":isRefund?"220,38,38":"37,99,235"},0.12)`,
//           border: `2px solid rgba(${isApprove?"22,163,74":isRefund?"220,38,38":"37,99,235"},0.3)`,
//           display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px",
//         }}>
//           {icon}
//         </div>

//         <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", margin: "0 0 10px" }}>
//           {modal.title}
//         </h2>
//         <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.7, margin: "0 0 28px" }}>
//           {modal.message}
//         </p>

//         {/* Detail chip if address provided */}
//         {modal.detail && (
//           <div style={{
//             padding: "10px 16px", borderRadius: "10px", marginBottom: "24px",
//             background: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.15)",
//             fontFamily: "monospace", fontSize: "13px", color: "#334155",
//             wordBreak: "break-all",
//           }}>
//             {modal.detail}
//           </div>
//         )}

//         <div style={{ display: "flex", gap: "12px" }}>
//           <button onClick={onCancel} style={{
//             flex: 1, padding: "13px", borderRadius: "12px",
//             background: "rgba(100,116,139,0.10)", border: "1px solid rgba(100,116,139,0.20)",
//             color: "#475569", fontWeight: 700, fontSize: "14px", cursor: "pointer",
//             fontFamily: "Poppins, sans-serif", transition: "background 0.2s",
//           }}
//             onMouseOver={e => e.currentTarget.style.background = "rgba(100,116,139,0.18)"}
//             onMouseOut={e  => e.currentTarget.style.background = "rgba(100,116,139,0.10)"}
//           >
//             Cancel
//           </button>
//           <button onClick={onConfirm} style={{
//             flex: 1, padding: "13px", borderRadius: "12px", border: "none",
//             background: `linear-gradient(135deg,${accent},${isApprove?"#15803d":isRefund?"#b91c1c":"#4f46e5"})`,
//             color: "white", fontWeight: 700, fontSize: "14px", cursor: "pointer",
//             fontFamily: "Poppins, sans-serif",
//             boxShadow: `0 8px 20px rgba(${isApprove?"22,163,74":isRefund?"220,38,38":"37,99,235"},0.30)`,
//           }}>
//             {modal.confirmText}
//           </button>
//         </div>
//       </div>

//       <style>{`
//         @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
//       `}</style>
//     </div>
//   );
// }


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

// /* ══════════════════════════════════════
//    Live Contract Status Checker
// ══════════════════════════════════════ */
// function LiveStatusChecker({ glass }) {
//   const [addr,    setAddr]    = useState("");
//   const [status,  setStatus]  = useState(null);   // fetched data
//   const [loading, setLoading] = useState(false);
//   const [error,   setError]   = useState("");

//   const contractABI = [
//     { "inputs": [], "name": "getBalance",  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
//     { "inputs": [], "name": "isApproved",  "outputs": [{ "internalType": "bool",    "name": "", "type": "bool"    }], "stateMutability": "view", "type": "function" },
//     { "inputs": [], "name": "isRefunded",  "outputs": [{ "internalType": "bool",    "name": "", "type": "bool"    }], "stateMutability": "view", "type": "function" },
//     { "inputs": [], "name": "buyer",       "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
//     { "inputs": [], "name": "seller",      "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
//     { "inputs": [], "name": "amount",      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
//   ];

//   const short = (a) => a ? `${a.slice(0,6)}...${a.slice(-4)}` : "—";

//   const fetchStatus = async () => {
//     if (!addr.trim()) { setError("Please enter a contract address."); return; }
//     if (!window.ethereum) { setError("MetaMask not detected."); return; }
//     setLoading(true); setError(""); setStatus(null);
//     try {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const contract = new ethers.Contract(addr.trim(), contractABI, provider);

//       const [bal, isApproved, isRefunded, buyer, seller, amount] = await Promise.all([
//         contract.getBalance(),
//         contract.isApproved(),
//         contract.isRefunded(),
//         contract.buyer(),
//         contract.seller(),
//         contract.amount(),
//       ]);

//       const state = isApproved ? "Approved" : isRefunded ? "Refunded" : "Pending";

//       setStatus({
//         balance:    parseFloat(ethers.formatEther(bal)).toFixed(6)  + " ETH",
//         amount:     parseFloat(ethers.formatEther(amount)).toFixed(6) + " ETH",
//         isApproved, isRefunded, state, buyer, seller,
//       });
//     } catch (err) {
//       console.error(err);
//       setError("Could not fetch contract. Check the address and make sure you're on the right network.");
//     }
//     setLoading(false);
//   };

//   const stateColor = { Approved: "#16a34a", Refunded: "#dc2626", Pending: "#d97706" };
//   const stateBg    = { Approved: "rgba(22,163,74,0.10)", Refunded: "rgba(220,38,38,0.10)", Pending: "rgba(217,119,6,0.10)" };

//   const Row = ({ label, value, mono }) => (
//     <div style={{
//       display: "flex", justifyContent: "space-between", alignItems: "center",
//       padding: "12px 0", borderBottom: "1px solid rgba(226,232,240,0.6)",
//     }}>
//       <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600 }}>{label}</span>
//       <span style={{ fontSize: "13px", color: "#0f172a", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit" }}>{value}</span>
//     </div>
//   );

//   return (
//     <div style={{ ...glass, padding: "36px 40px" }}>
//       {/* Header */}
//       <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "6px" }}>
//         <div style={{
//           width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
//           background: "linear-gradient(135deg,#a855f7,#2563eb)",
//           display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px",
//         }}>🔍</div>
//         <div>
//           <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 800, color: "#0f172a" }}>
//             Live Contract Status Checker
//           </h2>
//           <p style={{ margin: 0, color: "#64748b", fontSize: "13px" }}>
//             Fetch real-time on-chain data from any deployed escrow contract
//           </p>
//         </div>
//       </div>

//       <div style={{ height: "1px", background: "rgba(226,232,240,0.7)", margin: "20px 0" }} />

//       {/* Input + button */}
//       <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
//         <input
//           type="text" placeholder="Paste contract address (0x...)" value={addr}
//           onChange={e => { setAddr(e.target.value); setError(""); setStatus(null); }}
//           onKeyDown={e => e.key === "Enter" && fetchStatus()}
//           style={{
//             flex: 1, padding: "13px 16px", borderRadius: "12px",
//             border: "1.5px solid #dbeafe", background: "rgba(255,255,255,0.85)",
//             color: "#0f172a", fontSize: "14px", fontFamily: "monospace",
//             outline: "none", boxSizing: "border-box",
//             transition: "border-color 0.2s",
//           }}
//           onFocus={e => e.target.style.borderColor = "#6366f1"}
//           onBlur={e  => e.target.style.borderColor = "#dbeafe"}
//         />
//         <button onClick={fetchStatus} disabled={loading} style={{
//           padding: "13px 28px", borderRadius: "12px", border: "none",
//           background: loading ? "rgba(99,102,241,0.5)" : "linear-gradient(135deg,#a855f7,#2563eb)",
//           color: "white", fontWeight: 700, fontSize: "14px",
//           cursor: loading ? "not-allowed" : "pointer",
//           fontFamily: "Poppins, sans-serif", whiteSpace: "nowrap",
//           boxShadow: "0 8px 20px rgba(99,102,241,0.25)",
//           transition: "transform 0.2s",
//         }}
//           onMouseOver={e => { if (!loading) e.currentTarget.style.transform = "translateY(-2px)"; }}
//           onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
//         >
//           {loading ? "⏳ Fetching…" : "🔍 Check Status"}
//         </button>
//       </div>

//       {/* Error */}
//       {error && (
//         <div style={{
//           padding: "12px 16px", borderRadius: "12px", marginBottom: "16px",
//           background: "rgba(220,38,38,0.10)", border: "1px solid rgba(220,38,38,0.25)",
//           color: "#b91c1c", fontSize: "14px", fontWeight: 600,
//           display: "flex", alignItems: "center", gap: "8px",
//         }}>
//           ❌ {error}
//         </div>
//       )}

//       {/* Results */}
//       {status && (
//         <div style={{ animation: "fadeIn 0.3s ease" }}>
//           {/* State badge */}
//           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
//             <span style={{
//               padding: "6px 18px", borderRadius: "20px", fontWeight: 800, fontSize: "14px",
//               color: stateColor[status.state], background: stateBg[status.state],
//               border: `1px solid ${stateColor[status.state]}44`,
//             }}>
//               {status.state === "Approved" ? "✅" : status.state === "Refunded" ? "↩️" : "⏳"} {status.state}
//             </span>
//             <span style={{ color: "#94a3b8", fontSize: "13px" }}>
//               {status.state === "Approved" ? "Funds released to seller" : status.state === "Refunded" ? "Funds returned to buyer" : "Awaiting buyer action"}
//             </span>
//           </div>

//           {/* Data grid */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 40px" }}>
//             <div>
//               <Row label="Locked Amount"    value={status.amount}  mono />
//               <Row label="Current Balance"  value={status.balance} mono />
//               <Row label="Payment Approved" value={status.isApproved ? "✅ Yes" : "❌ No"} />
//             </div>
//             <div>
//               <Row label="Buyer Address"  value={short(status.buyer)}  mono />
//               <Row label="Seller Address" value={short(status.seller)} mono />
//               <Row label="Refund Issued"  value={status.isRefunded ? "✅ Yes" : "❌ No"} />
//             </div>
//           </div>

//           {/* Etherscan link */}
//           <div style={{ marginTop: "18px", textAlign: "right" }}>
//             <a
//               href={`https://sepolia.etherscan.io/address/${addr}`}
//               target="_blank" rel="noreferrer"
//               style={{
//                 fontSize: "13px", fontWeight: 700, color: "#6366f1",
//                 textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px",
//               }}
//             >
//               View on Etherscan ↗
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
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

//   /* ── Transaction history — starts empty, populated by real on-chain actions ── */
//   const [transactions, setTransactions] = useState([]);

//   const showToast = (setter, msg, type) => {
//     setter({ msg, type });
//     setTimeout(() => setter({ msg: "", type: "" }), 4500);
//   };

//   const [lastCreatedAddress, setLastCreatedAddress] = useState("");
//   const [addrCopied,         setAddrCopied]         = useState(false);

//   /* ── Modal ── */
//   const [modal,    setModal]    = useState(null);   // { action, title, message, detail, confirmText, onConfirm }

//   const openModal = (config) => setModal(config);
//   const closeModal = () => setModal(null);

//   /* ── Create escrow ── */
//   const handleCreateEscrow = async (e) => {
//     e.preventDefault();
//     if (!window.ethereum) {
//       openModal({ action: "metamask", title: "MetaMask Required", message: "Please install MetaMask to create and interact with escrow contracts.", detail: null, confirmText: "Got it", onConfirm: closeModal });
//       return;
//     }
//     /* ask for confirmation first */
//     openModal({
//       action: "approve",
//       title: "Create Escrow Contract?",
//       message: `You are about to deploy a new escrow contract and lock ${value} ETH for seller "${sellerName}". This action cannot be undone.`,
//       detail: `Seller: ${sellerAddress}`,
//       confirmText: "🚀 Confirm & Deploy",
//       onConfirm: async () => {
//         closeModal();
//         await deployEscrow();
//       },
//     });
//   };

//   const deployEscrow = async () => {
//     try {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer   = await provider.getSigner();
//       const factory  = new ethers.ContractFactory(contractABI, contractBytecode, signer);
//       const contract = await factory.deploy(sellerAddress, { value: ethers.parseEther(value) });
//       await contract.waitForDeployment();
//       const address = await contract.getAddress();

//       const now = new Date();
//       const dateStr = now.toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" })
//                     + " " + now.toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" });

//       setTransactions(prev => [...prev, {
//         id: prev.length + 1, contract: address,
//         sellerName, seller: sellerAddress,
//         amount: `${value} ETH`, status: "Pending", date: dateStr,
//       }]);

//       showToast(setCreateToast, `✅ Escrow created! Contract: ${short(address)}`, "success");
//       setLastCreatedAddress(address);
//       setAddrCopied(false);
//       setSellerName(""); setSellerAddress(""); setValue("");
//     } catch (err) {
//       console.error(err);
//       showToast(setCreateToast, "Transaction failed. Please try again.", "error");
//     }
//   };

//   /* ── Approve ── */
//   const handleApprove = () => {
//     if (!contractAddr) { showToast(setActionToast, "Enter a contract address first.", "error"); return; }
//     openModal({
//       action: "approve",
//       title: "Approve Payment?",
//       message: "This will release the locked ETH to the seller. This action is permanent and cannot be undone.",
//       detail: `Contract: ${contractAddr}`,
//       confirmText: "✅ Yes, Approve",
//       onConfirm: async () => { closeModal(); await executeApprove(); },
//     });
//   };

//   const executeApprove = async () => {
//     setLoading("approve");
//     try {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer   = await provider.getSigner();
//       const contract = new ethers.Contract(contractAddr, contractABI, signer);
//       const tx = await contract.approvePayment();
//       await tx.wait();
//       const stamp = new Date().toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" }) + " " + new Date().toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" });
//       setTransactions(prev => prev.map(t =>
//         t.contract.toLowerCase() === contractAddr.toLowerCase() ? { ...t, status: "Approved", date: stamp } : t
//       ));
//       showToast(setActionToast, "Transaction Approved Successfully!", "success");
//     } catch (err) {
//       console.error(err);
//       showToast(setActionToast, "Approval failed. Check address & wallet.", "error");
//     }
//     setLoading("");
//   };

//   /* ── Refund ── */
//   const handleRefund = () => {
//     if (!contractAddr) { showToast(setActionToast, "Enter a contract address first.", "error"); return; }
//     openModal({
//       action: "refund",
//       title: "Refund Buyer?",
//       message: "This will return the locked ETH back to you (the buyer). This action is permanent and cannot be undone.",
//       detail: `Contract: ${contractAddr}`,
//       confirmText: "↩️ Yes, Refund",
//       onConfirm: async () => { closeModal(); await executeRefund(); },
//     });
//   };

//   const executeRefund = async () => {
//     setLoading("refund");
//     try {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer   = await provider.getSigner();
//       const contract = new ethers.Contract(contractAddr, contractABI, signer);
//       const tx = await contract.refundBuyer();
//       await tx.wait();
//       const stamp = new Date().toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" }) + " " + new Date().toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" });
//       setTransactions(prev => prev.map(t =>
//         t.contract.toLowerCase() === contractAddr.toLowerCase() ? { ...t, status: "Refunded", date: stamp } : t
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
//     <div id="escrow-section" style={{ background: "transparent", padding: "80px 40px 120px" }}>

//       {/* Confirmation modal — renders above everything */}
//       <ConfirmModal
//         modal={modal}
//         onConfirm={modal?.onConfirm}
//         onCancel={closeModal}
//       />

//       {/* ════ ROW 1: big glass frame wrapping heading + cards + scroll button ════ */}
//       <div style={{
//         ...glass,
//         padding: "48px 40px 40px",
//         marginBottom: "0",
//       }}>

//         {/* Heading */}
//         <div style={{ marginBottom: "36px", textAlign: "center" }}>
//           <h1 style={{ fontSize: "38px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px" }}>
//             Your Escrow{" "}
//             <span style={{ background: "linear-gradient(90deg,#a855f7,#2563eb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//               Dashboard
//             </span>
//           </h1>
//           <p style={{ color: "#64748b", fontSize: "15px", margin: 0 }}>
//             Create a new escrow on the left · Approve or refund an existing one on the right
//           </p>
//         </div>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", alignItems: "start" }}>

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

//               {/* ── Copy Contract Address — appears after successful deploy ── */}
//               {lastCreatedAddress && (
//                 <div style={{
//                   marginBottom: "14px",
//                   padding: "14px 16px",
//                   borderRadius: "12px",
//                   background: "rgba(99,102,241,0.07)",
//                   border: "1px solid rgba(99,102,241,0.18)",
//                 }}>
//                   <div style={{ fontSize: "11px", fontWeight: 700, color: "#6366f1", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
//                     🎉 Last Created Contract Address
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                     {/* address pill */}
//                     <span style={{
//                       flex: 1, fontFamily: "monospace", fontSize: "12px",
//                       color: "#334155", fontWeight: 600,
//                       wordBreak: "break-all", lineHeight: 1.5,
//                     }}>
//                       {lastCreatedAddress}
//                     </span>
//                     {/* copy button */}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         navigator.clipboard.writeText(lastCreatedAddress);
//                         setAddrCopied(true);
//                         setTimeout(() => setAddrCopied(false), 2000);
//                       }}
//                       style={{
//                         flexShrink: 0,
//                         padding: "8px 14px",
//                         borderRadius: "10px",
//                         border: "none",
//                         background: addrCopied
//                           ? "linear-gradient(135deg,#16a34a,#15803d)"
//                           : "linear-gradient(135deg,#6366f1,#4f46e5)",
//                         color: "white",
//                         fontWeight: 700,
//                         fontSize: "12px",
//                         cursor: "pointer",
//                         fontFamily: "Poppins, sans-serif",
//                         transition: "background 0.2s, transform 0.2s",
//                         whiteSpace: "nowrap",
//                         boxShadow: addrCopied
//                           ? "0 4px 12px rgba(22,163,74,0.30)"
//                           : "0 4px 12px rgba(99,102,241,0.30)",
//                       }}
//                       onMouseOver={e => e.currentTarget.style.transform = "translateY(-1px)"}
//                       onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
//                     >
//                       {addrCopied ? "✓ Copied!" : "📋 Copy ID"}
//                     </button>
//                   </div>
//                 </div>
//               )}

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

//         {/* ── RIGHT: Approve / Refund ── same card style as Create Escrow ── */}
//         <div>
//           <Toast msg={actionToast.msg} type={actionToast.type} />
//           <div style={{ ...glass, padding: "36px 32px" }}>

//             {/* Badge — mirrors "🔐 Powered by Ethereum Smart Contracts" */}
//             <div style={{
//               display: "inline-block", padding: "6px 16px", borderRadius: "40px",
//               background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.5)",
//               color: "#6366f1", fontSize: "12px", fontWeight: 700, marginBottom: "16px",
//             }}>
//               ⚡ Manage Your Escrow Contract
//             </div>

//             {/* Heading — mirrors "Create Your Secure Escrow" */}
//             <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>
//               Approve or{" "}
//               <span style={{ background: "linear-gradient(90deg,#a855f7,#2563eb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                 Refund
//               </span>
//             </h2>

//             {/* Subtitle — mirrors "Deploy a smart contract…" */}
//             <p style={{ color: "#64748b", fontSize: "13px", marginTop: 0, marginBottom: "24px" }}>
//               Paste a contract address and release or return the locked funds
//             </p>

//             {/* Input */}
//             {label("Contract Address")}
//             <input
//               type="text" placeholder="0x..." value={contractAddr}
//               onChange={e => setContractAddr(e.target.value)}
//               style={{ ...inputStyle, fontFamily: "monospace" }}
//               onFocus={e => e.target.style.borderColor = "#6366f1"}
//               onBlur={e  => e.target.style.borderColor = "#dbeafe"}
//             />

//             {/* Approve button — full width, same height as Create Escrow button */}
//             <button onClick={handleApprove} disabled={!!loading} style={{
//               width: "100%", padding: "15px", marginTop: "6px",
//               background: loading === "approve"
//                 ? "rgba(22,163,74,0.5)"
//                 : "linear-gradient(135deg,#16a34a,#15803d)",
//               color: "white", border: "none", borderRadius: "13px",
//               fontSize: "15px", fontWeight: 700,
//               cursor: loading ? "not-allowed" : "pointer",
//               boxShadow: "0 10px 28px rgba(22,163,74,0.25)",
//               fontFamily: "Poppins, sans-serif", transition: "transform 0.2s",
//               marginBottom: "12px",
//             }}
//               onMouseOver={e => { if (!loading) e.currentTarget.style.transform = "translateY(-2px)"; }}
//               onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
//             >
//               {loading === "approve" ? "⏳ Approving…" : "✅ Approve Payment"}
//             </button>

//             {/* Refund button — full width, same height */}
//             <button onClick={handleRefund} disabled={!!loading} style={{
//               width: "100%", padding: "15px",
//               background: loading === "refund"
//                 ? "rgba(220,38,38,0.5)"
//                 : "linear-gradient(135deg,#dc2626,#b91c1c)",
//               color: "white", border: "none", borderRadius: "13px",
//               fontSize: "15px", fontWeight: 700,
//               cursor: loading ? "not-allowed" : "pointer",
//               boxShadow: "0 10px 28px rgba(220,38,38,0.22)",
//               fontFamily: "Poppins, sans-serif", transition: "transform 0.2s",
//             }}
//               onMouseOver={e => { if (!loading) e.currentTarget.style.transform = "translateY(-2px)"; }}
//               onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
//             >
//               {loading === "refund" ? "⏳ Refunding…" : "↩️ Refund Buyer"}
//             </button>

//             {/* Footer note — mirrors "Funds are locked in the contract…" */}
//             <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "12px", marginTop: "16px", marginBottom: 0 }}>
//               Only the <strong>buyer</strong> wallet can approve or refund this escrow.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ── Scroll Down button ── */}
//       <div style={{ textAlign: "center", marginTop: "36px" }}>
//         <button
//           onClick={() => document.getElementById("transaction-history").scrollIntoView({ behavior: "smooth" })}
//           style={{
//             display: "inline-flex", alignItems: "center", gap: "10px",
//             padding: "14px 32px", borderRadius: "50px",
//             background: "linear-gradient(135deg,#a855f7,#2563eb)",
//             border: "none",
//             boxShadow: "0 8px 24px rgba(99,102,241,0.25)",
//             color: "white", fontWeight: 700, fontSize: "15px",
//             cursor: "pointer", fontFamily: "Poppins, sans-serif",
//             transition: "transform 0.2s, box-shadow 0.2s",
//           }}
//           onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(99,102,241,0.35)"; }}
//           onMouseOut={e  => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.25)"; }}
//         >
//           View Transaction History
//           <span style={{ animation: "bounce 1.4s infinite", display: "inline-block" }}>↓</span>
//         </button>
//       </div>

//       </div>{/* ── end glass frame ── */}

//       {/* ════ Live Contract Status Checker ════ */}
//       <div style={{ marginTop: "40px" }}>
//         <LiveStatusChecker glass={glass} />
//       </div>

//       {/* ════ ROW 2: Stats + Transaction History (full width) ════ */}
//       <div id="transaction-history" style={{ marginTop: "60px" }}>

//         {/* Stat cards — horizontal layout */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "40px" }}>
//           {[
//             { label: "Total Escrows", value: total,    emoji: "📊", color: "#6366f1", bg: "rgba(99,102,241,0.10)",  border: "rgba(99,102,241,0.22)"  },
//             { label: "Approved",      value: approved, emoji: "✅", color: "#16a34a", bg: "rgba(22,163,74,0.10)",   border: "rgba(22,163,74,0.25)"   },
//             { label: "Refunded",      value: refunded, emoji: "↩️", color: "#dc2626", bg: "rgba(220,38,38,0.10)",   border: "rgba(220,38,38,0.25)"   },
//             { label: "Pending",       value: pending,  emoji: "⏳", color: "#d97706", bg: "rgba(217,119,6,0.10)",   border: "rgba(217,119,6,0.25)"   },
//           ].map(s => (
//             <div key={s.label}
//               style={{
//                 display: "flex", alignItems: "center", gap: "18px",
//                 padding: "22px 26px",
//                 background: s.bg,
//                 border: `1.5px solid ${s.border}`,
//                 borderRadius: "18px",
//                 backdropFilter: "blur(14px)",
//                 WebkitBackdropFilter: "blur(14px)",
//                 boxShadow: `0 4px 18px ${s.border}`,
//                 transition: "transform 0.22s, box-shadow 0.22s",
//                 cursor: "default",
//               }}
//               onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 10px 28px ${s.border}`; }}
//               onMouseOut={e  => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = `0 4px 18px ${s.border}`; }}
//             >
//               {/* icon circle */}
//               <div style={{
//                 width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
//                 background: "rgba(255,255,255,0.70)",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: "26px",
//                 boxShadow: `0 2px 10px ${s.border}`,
//               }}>
//                 {s.emoji}
//               </div>
//               {/* text */}
//               <div>
//                 <div style={{ fontSize: "30px", fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.value}</div>
//                 <div style={{ fontSize: "13px", color: "#475569", fontWeight: 700, marginTop: "5px" }}>{s.label}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Transaction History table */}
//         <div style={{ ...glass, overflow: "hidden" }}>
//           <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(226,232,240,0.6)", display: "flex", alignItems: "center", gap: "10px" }}>
//             <span style={{ fontSize: "20px" }}>📋</span>
//             <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>Transaction History</h2>
//             <span style={{ marginLeft: "auto", fontSize: "13px", color: "#94a3b8", fontWeight: 600 }}>
//               Live — updates instantly
//             </span>
//           </div>
//           <div style={{ overflowX: "auto" }}>
//             <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
//               <thead>
//                 <tr>
//                   {["#", "Contract Address", "Seller Name", "Seller Address", "Amount", "Status", "Date & Time"].map(h => (
//                     <th key={h} style={thStyle}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.length === 0 ? (
//                   <tr>
//                     <td colSpan="7" style={{ textAlign: "center", padding: "48px 20px", color: "#94a3b8" }}>
//                       <div style={{ fontSize: "36px", marginBottom: "10px" }}>📭</div>
//                       <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>No transactions yet</div>
//                       <div style={{ fontSize: "13px" }}>Create your first escrow above — it will appear here instantly.</div>
//                     </td>
//                   </tr>
//                 ) : (
//                   transactions.map((tx) => {
//                     const sc = statusColors[tx.status];
//                     return (
//                       <tr key={tx.id}
//                         onMouseOver={e  => e.currentTarget.style.background = "rgba(99,102,241,0.04)"}
//                         onMouseOut={e   => e.currentTarget.style.background = "transparent"}
//                         style={{ transition: "background 0.2s" }}
//                       >
//                         <td style={{ ...tdStyle, color: "#94a3b8", fontWeight: 700 }}>#{tx.id}</td>
//                         <td style={tdStyle}><CopyAddress address={tx.contract} /></td>
//                         <td style={{ ...tdStyle, fontWeight: 600, color: "#0f172a" }}>{tx.sellerName || "—"}</td>
//                         <td style={tdStyle}><CopyAddress address={tx.seller} /></td>
//                         <td style={{ ...tdStyle, color: "#2563eb", fontWeight: 700 }}>{tx.amount}</td>
//                         <td style={tdStyle}>
//                           <span style={{
//                             padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 700,
//                             color: sc.color, background: sc.bg, border: `1px solid ${sc.border}`,
//                           }}>
//                             {tx.status}
//                           </span>
//                         </td>
//                         <td style={{ ...tdStyle, color: "#64748b", fontSize: "12px", whiteSpace: "nowrap" }}>{tx.date || "—"}</td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
//         @keyframes bounce { 0%,100% { transform:translateY(0); } 50% { transform:translateY(5px); } }
//         @media (max-width: 900px) {
//           .escrow-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState } from "react";
import { ethers } from "ethers";

/* ── ABI ── */
const contractABI = [
  { "inputs": [{ "internalType": "address", "name": "_seller", "type": "address" }], "stateMutability": "payable", "type": "constructor" },
  { "inputs": [], "name": "approvePayment", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [], "name": "refundBuyer",    "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [], "name": "getBalance",     "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "isApproved",     "outputs": [{ "internalType": "bool",    "name": "", "type": "bool"    }], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "isRefunded",     "outputs": [{ "internalType": "bool",    "name": "", "type": "bool"    }], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "buyer",          "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "seller",         "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "amount",         "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
];

const contractBytecode = "0x6080604052604051610b25380380610b258339818101604052810190610025919061010f565b335f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346002819055505061013a565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100de826100b5565b9050919050565b6100ee816100d4565b81146100f8575f5ffd5b50565b5f81519050610109816100e5565b92915050565b5f60208284031215610124576101236100b1565b5b5f610131848285016100fb565b91505092915050565b6109de806101475f395ff3fe608060405234801561000f575f5ffd5b5060043610610086575f3560e01c8063779cd08311610059578063779cd0831461010257806396fd340914610120578063aa8c217c1461012a578063e8a61cc81461014857610086565b806308551a531461008a57806312065fe0146100a857806328f371aa146100c65780637150d8ae146100e4575b5f5ffd5b610092610152565b60405161009f91906106d2565b60405180910390f35b6100b0610177565b6040516100bd9190610703565b60405180910390f35b6100ce61017e565b6040516100db9190610736565b60405180910390f35b6100ec610190565b6040516100f991906106d2565b60405180910390f35b61010a6101b4565b6040516101179190610736565b60405180910390f35b6101286101c7565b005b61013261042a565b60405161013f9190610703565b60405180910390f35b610150610430565b005b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f47905090565b60035f9054906101000a900460ff1681565b5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360019054906101000a900460ff1681565b600360029054906101000a900460ff1615610217576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020e906107a9565b60405180910390fd5b6001600360026101000a81548160ff0219169083151502179055505f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b790610811565b60405180910390fd5b60035f9054906101000a900460ff161580156102e95750600360019054906101000a900460ff16155b610328576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031f90610879565b60405180910390fd5b600160035f6101000a81548160ff0219169083151502179055505f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660025460405161038a906108c4565b5f6040518083038185875af1925050503d805f81146103c4576040519150601f19603f3d011682016040523d82523d5f602084013e6103c9565b606091505b505090508061040d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040490610922565b60405180910390fd5b505f600360026101000a81548160ff021916908315150217905550565b60025481565b600360029054906101000a900460ff1615610480576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610477906107a9565b60405180910390fd5b6001600360026101000a81548160ff0219169083151502179055505f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610529576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090610811565b60405180910390fd5b60035f9054906101000a900460ff161580156105525750600360019054906101000a900460ff16155b610591576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058890610879565b60405180910390fd5b6001600360016101000a81548160ff0219169083151502179055505f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166002546040516105f3906108c4565b5f6040518083038185875af1925050503d805f811461062d576040519150601f19603f3d011682016040523d82523d5f602084013e610632565b606091505b5050905080610676576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066d9061098a565b60405180910390fd5b505f600360026101000a81548160ff021916908315150217905550565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6106bc82610693565b9050919050565b6106cc816106b2565b82525050565b5f6020820190506106e55f8301846106c3565b92915050565b5f819050919050565b6106fd816106eb565b82525050565b5f6020820190506107165f8301846106f4565b92915050565b5f8115159050919050565b6107308161071c565b82525050565b5f6020820190506107495f830184610727565b92915050565b5f82825260208201905092915050565b7f5265656e7472616e742063616c6c2064657465637465640000000000000000005f82015250565b5f61079360178361074f565b915061079e8261075f565b602082019050919050565b5f6020820190508181035f8301526107c081610787565b9050919050565b7f4f6e6c79206275796572000000000000000000000000000000000000000000005f82015250565b5f6107fb600a8361074f565b9150610806826107c7565b602082019050919050565b5f6020820190508181035f830152610828816107ef565b9050919050565b7f416c72656164792070726f6365737365640000000000000000000000000000005f82015250565b5f61086360118361074f565b915061086e8261082f565b602082019050919050565b5f6020820190508181035f83015261089081610857565b9050919050565b5f81905092915050565b50565b5f6108af5f83610897565b91506108ba826108a1565b5f82019050919050565b5f6108ce826108a4565b9150819050919050565b7f5472616e73666572206661696c656400000000000000000000000000000000005f82015250565b5f61090c600f8361074f565b9150610917826108d8565b602082019050919050565b5f6020820190508181035f83015261093981610900565b9050919050565b7f526566756e64206661696c6564000000000000000000000000000000000000005f82015250565b5f610974600d8361074f565b915061097f82610940565b602082019050919050565b5f6020820190508181035f8301526109a181610968565b905091905056fea2646970667358221220c12036e16d6b692d9ef67cc58e5edafeab4bda21b62a4006351a7757feaadfe964736f6c63430008220033";

/* ── helpers ── */
const glass = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.45)",
  borderRadius: "22px",
  boxShadow: "0 8px 32px rgba(99,102,241,0.10)",
};

const statusColors = {
  Approved: { color: "#16a34a", bg: "rgba(22,163,74,0.10)",  border: "rgba(22,163,74,0.25)"  },
  Refunded: { color: "#dc2626", bg: "rgba(220,38,38,0.10)",  border: "rgba(220,38,38,0.25)"  },
  Pending:  { color: "#d97706", bg: "rgba(217,119,6,0.10)",  border: "rgba(217,119,6,0.25)"  },
};

const short = (addr) => addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

/* ── Confirmation Modal ── */
function ConfirmModal({ modal, onConfirm, onCancel }) {
  if (!modal) return null;
  const isApprove  = modal.action === "approve";
  const isRefund   = modal.action === "refund";
  const isMetaMask = modal.action === "metamask";
  const accent = isApprove ? "#16a34a" : isRefund ? "#dc2626" : "#2563eb";
  const icon   = isApprove ? "✅" : isRefund ? "↩️" : "🦊";

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(15,23,42,0.55)",
      backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      animation: "fadeIn 0.2s ease",
    }}>
      <div style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
        borderRadius: "24px",
        padding: "40px 36px",
        maxWidth: "420px", width: "90%",
        boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
        textAlign: "center",
        animation: "slideUp 0.25s ease",
      }}>
        {/* Icon */}
        <div style={{
          width: "64px", height: "64px", borderRadius: "50%", margin: "0 auto 20px",
          background: `rgba(${isApprove?"22,163,74":isRefund?"220,38,38":"37,99,235"},0.12)`,
          border: `2px solid rgba(${isApprove?"22,163,74":isRefund?"220,38,38":"37,99,235"},0.3)`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px",
        }}>
          {icon}
        </div>

        <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", margin: "0 0 10px" }}>
          {modal.title}
        </h2>
        <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.7, margin: "0 0 28px" }}>
          {modal.message}
        </p>

        {/* Detail chip if address provided */}
        {modal.detail && (
          <div style={{
            padding: "10px 16px", borderRadius: "10px", marginBottom: "24px",
            background: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.15)",
            fontFamily: "monospace", fontSize: "13px", color: "#334155",
            wordBreak: "break-all",
          }}>
            {modal.detail}
          </div>
        )}

        <div style={{ display: "flex", gap: "12px" }}>
          <button onClick={onCancel} style={{
            flex: 1, padding: "13px", borderRadius: "12px",
            background: "rgba(100,116,139,0.10)", border: "1px solid rgba(100,116,139,0.20)",
            color: "#475569", fontWeight: 700, fontSize: "14px", cursor: "pointer",
            fontFamily: "Poppins, sans-serif", transition: "background 0.2s",
          }}
            onMouseOver={e => e.currentTarget.style.background = "rgba(100,116,139,0.18)"}
            onMouseOut={e  => e.currentTarget.style.background = "rgba(100,116,139,0.10)"}
          >
            Cancel
          </button>
          <button onClick={onConfirm} style={{
            flex: 1, padding: "13px", borderRadius: "12px", border: "none",
            background: `linear-gradient(135deg,${accent},${isApprove?"#15803d":isRefund?"#b91c1c":"#4f46e5"})`,
            color: "white", fontWeight: 700, fontSize: "14px", cursor: "pointer",
            fontFamily: "Poppins, sans-serif",
            boxShadow: `0 8px 20px rgba(${isApprove?"22,163,74":isRefund?"220,38,38":"37,99,235"},0.30)`,
          }}>
            {modal.confirmText}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}


function Toast({ msg, type }) {
  if (!msg) return null;
  const ok = type === "success";
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "10px",
      padding: "13px 18px", borderRadius: "12px", marginBottom: "18px",
      background: ok ? "rgba(22,163,74,0.12)" : "rgba(220,38,38,0.12)",
      border: `1px solid ${ok ? "rgba(22,163,74,0.35)" : "rgba(220,38,38,0.35)"}`,
      color: ok ? "#15803d" : "#b91c1c",
      fontWeight: 700, fontSize: "14px",
      animation: "fadeIn 0.3s ease",
    }}>
      <span style={{ fontSize: "18px" }}>{ok ? "✅" : "❌"}</span>
      {msg}
    </div>
  );
}

/* ── Copy chip ── */
function CopyAddress({ address }) {
  const [copied, setCopied] = useState(false);
  return (
    <span
      onClick={() => { navigator.clipboard.writeText(address); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
      title={address}
      style={{
        cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "4px",
        padding: "3px 10px", borderRadius: "8px",
        background: copied ? "rgba(22,163,74,0.12)" : "rgba(37,99,235,0.08)",
        color: copied ? "#16a34a" : "#2563eb",
        fontWeight: 600, fontSize: "12px", fontFamily: "monospace",
        border: `1px solid ${copied ? "rgba(22,163,74,0.3)" : "rgba(37,99,235,0.18)"}`,
        transition: "all 0.2s", userSelect: "none", whiteSpace: "nowrap",
      }}
    >
      {copied ? "✓ Copied!" : short(address)}
      {!copied && (
        <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
        </svg>
      )}
    </span>
  );
}

/* ══════════════════════════════════════
   Live Contract Status Checker
══════════════════════════════════════ */
function LiveStatusChecker({ glass }) {
  const [addr,    setAddr]    = useState("");
  const [status,  setStatus]  = useState(null);   // fetched data
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

  const contractABI = [
    { "inputs": [], "name": "getBalance",  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "isApproved",  "outputs": [{ "internalType": "bool",    "name": "", "type": "bool"    }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "isRefunded",  "outputs": [{ "internalType": "bool",    "name": "", "type": "bool"    }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "buyer",       "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "seller",      "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "amount",      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
  ];

  const short = (a) => a ? `${a.slice(0,6)}...${a.slice(-4)}` : "—";

  const fetchStatus = async () => {
    if (!addr.trim()) { setError("Please enter a contract address."); return; }
    if (!window.ethereum) { setError("MetaMask not detected."); return; }
    setLoading(true); setError(""); setStatus(null);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(addr.trim(), contractABI, provider);

      const [bal, isApproved, isRefunded, buyer, seller, amount] = await Promise.all([
        contract.getBalance(),
        contract.isApproved(),
        contract.isRefunded(),
        contract.buyer(),
        contract.seller(),
        contract.amount(),
      ]);

      const state = isApproved ? "Approved" : isRefunded ? "Refunded" : "Pending";

      setStatus({
        balance:    parseFloat(ethers.formatEther(bal)).toFixed(6)  + " ETH",
        amount:     parseFloat(ethers.formatEther(amount)).toFixed(6) + " ETH",
        isApproved, isRefunded, state, buyer, seller,
      });
    } catch (err) {
      console.error(err);
      setError("Could not fetch contract. Check the address and make sure you're on the right network.");
    }
    setLoading(false);
  };

  const stateColor = { Approved: "#16a34a", Refunded: "#dc2626", Pending: "#d97706" };
  const stateBg    = { Approved: "rgba(22,163,74,0.10)", Refunded: "rgba(220,38,38,0.10)", Pending: "rgba(217,119,6,0.10)" };

  const Row = ({ label, value, mono }) => (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "12px 0", borderBottom: "1px solid rgba(226,232,240,0.6)",
    }}>
      <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600 }}>{label}</span>
      <span style={{ fontSize: "13px", color: "#0f172a", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit" }}>{value}</span>
    </div>
  );

  return (
    <div style={{ ...glass, padding: "36px 40px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "6px" }}>
        <div style={{
          width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
          background: "linear-gradient(135deg,#a855f7,#2563eb)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px",
        }}>🔍</div>
        <div>
          <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 800, color: "#0f172a" }}>
            Live Contract Status Checker
          </h2>
          <p style={{ margin: 0, color: "#64748b", fontSize: "13px" }}>
            Fetch real-time on-chain data from any deployed escrow contract
          </p>
        </div>
      </div>

      <div style={{ height: "1px", background: "rgba(226,232,240,0.7)", margin: "20px 0" }} />

      {/* Input + button */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <input
          type="text" placeholder="Paste contract address (0x...)" value={addr}
          onChange={e => { setAddr(e.target.value); setError(""); setStatus(null); }}
          onKeyDown={e => e.key === "Enter" && fetchStatus()}
          style={{
            flex: 1, padding: "13px 16px", borderRadius: "12px",
            border: "1.5px solid #dbeafe", background: "rgba(255,255,255,0.85)",
            color: "#0f172a", fontSize: "14px", fontFamily: "monospace",
            outline: "none", boxSizing: "border-box",
            transition: "border-color 0.2s",
          }}
          onFocus={e => e.target.style.borderColor = "#6366f1"}
          onBlur={e  => e.target.style.borderColor = "#dbeafe"}
        />
        <button onClick={fetchStatus} disabled={loading} style={{
          padding: "13px 28px", borderRadius: "12px", border: "none",
          background: loading ? "rgba(99,102,241,0.5)" : "linear-gradient(135deg,#a855f7,#2563eb)",
          color: "white", fontWeight: 700, fontSize: "14px",
          cursor: loading ? "not-allowed" : "pointer",
          fontFamily: "Poppins, sans-serif", whiteSpace: "nowrap",
          boxShadow: "0 8px 20px rgba(99,102,241,0.25)",
          transition: "transform 0.2s",
        }}
          onMouseOver={e => { if (!loading) e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
        >
          {loading ? "⏳ Fetching…" : "🔍 Check Status"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div style={{
          padding: "12px 16px", borderRadius: "12px", marginBottom: "16px",
          background: "rgba(220,38,38,0.10)", border: "1px solid rgba(220,38,38,0.25)",
          color: "#b91c1c", fontSize: "14px", fontWeight: 600,
          display: "flex", alignItems: "center", gap: "8px",
        }}>
          ❌ {error}
        </div>
      )}

      {/* Results */}
      {status && (
        <div style={{ animation: "fadeIn 0.3s ease" }}>
          {/* State badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{
              padding: "6px 18px", borderRadius: "20px", fontWeight: 800, fontSize: "14px",
              color: stateColor[status.state], background: stateBg[status.state],
              border: `1px solid ${stateColor[status.state]}44`,
            }}>
              {status.state === "Approved" ? "✅" : status.state === "Refunded" ? "↩️" : "⏳"} {status.state}
            </span>
            <span style={{ color: "#94a3b8", fontSize: "13px" }}>
              {status.state === "Approved" ? "Funds released to seller" : status.state === "Refunded" ? "Funds returned to buyer" : "Awaiting buyer action"}
            </span>
          </div>

          {/* Data grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 40px" }}>
            <div>
              <Row label="Locked Amount"    value={status.amount}  mono />
              <Row label="Current Balance"  value={status.balance} mono />
              <Row label="Payment Approved" value={status.isApproved ? "✅ Yes" : "❌ No"} />
            </div>
            <div>
              <Row label="Buyer Address"  value={short(status.buyer)}  mono />
              <Row label="Seller Address" value={short(status.seller)} mono />
              <Row label="Refund Issued"  value={status.isRefunded ? "✅ Yes" : "❌ No"} />
            </div>
          </div>

          {/* Etherscan link */}
          <div style={{ marginTop: "18px", textAlign: "right" }}>
            <a
              href={`https://sepolia.etherscan.io/address/${addr}`}
              target="_blank" rel="noreferrer"
              style={{
                fontSize: "13px", fontWeight: 700, color: "#6366f1",
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px",
              }}
            >
              View on Etherscan ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EscrowPage() {

  /* ── Create Escrow state ── */
  const [sellerName,    setSellerName]    = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [value,         setValue]         = useState("");
  const [createToast,   setCreateToast]   = useState({ msg: "", type: "" });

  /* ── Approve / Refund state ── */
  const [contractAddr, setContractAddr] = useState("");
  const [actionToast,  setActionToast]  = useState({ msg: "", type: "" });
  const [loading,      setLoading]      = useState("");

  /* ── Transaction history — persisted in localStorage ── */
  const STORAGE_KEY = "trustfund_transactions";

  const loadTransactions = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  };

  const [transactions, setTransactions] = useState(loadTransactions);

  /* save to localStorage whenever transactions change */
  const saveTransactions = (updated) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch {}
    setTransactions(updated);
  };

  const showToast = (setter, msg, type) => {
    setter({ msg, type });
    setTimeout(() => setter({ msg: "", type: "" }), 4500);
  };

  const [lastCreatedAddress, setLastCreatedAddress] = useState("");
  const [addrCopied,         setAddrCopied]         = useState(false);

  /* ── Modal ── */
  const [modal,    setModal]    = useState(null);   // { action, title, message, detail, confirmText, onConfirm }

  const openModal = (config) => setModal(config);
  const closeModal = () => setModal(null);

  /* ── Create escrow ── */
  const handleCreateEscrow = async (e) => {
    e.preventDefault();
    if (!window.ethereum) {
      openModal({ action: "metamask", title: "MetaMask Required", message: "Please install MetaMask to create and interact with escrow contracts.", detail: null, confirmText: "Got it", onConfirm: closeModal });
      return;
    }
    /* ask for confirmation first */
    openModal({
      action: "approve",
      title: "Create Escrow Contract?",
      message: `You are about to deploy a new escrow contract and lock ${value} ETH for seller "${sellerName}". This action cannot be undone.`,
      detail: `Seller: ${sellerAddress}`,
      confirmText: "🚀 Confirm & Deploy",
      onConfirm: async () => {
        closeModal();
        await deployEscrow();
      },
    });
  };

  const deployEscrow = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer   = await provider.getSigner();
      const factory  = new ethers.ContractFactory(contractABI, contractBytecode, signer);
      const contract = await factory.deploy(sellerAddress, { value: ethers.parseEther(value) });
      await contract.waitForDeployment();
      const address = await contract.getAddress();

      const now = new Date();
      const dateStr = now.toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" })
                    + " " + now.toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" });

      const updated = [...transactions, {
        id: transactions.length + 1, contract: address,
        sellerName, seller: sellerAddress,
        amount: `${value} ETH`, status: "Pending", date: dateStr,
      }];
      saveTransactions(updated);

      showToast(setCreateToast, `✅ Escrow created! Contract: ${short(address)}`, "success");
      setLastCreatedAddress(address);
      setAddrCopied(false);
      setSellerName(""); setSellerAddress(""); setValue("");
    } catch (err) {
      console.error(err);
      showToast(setCreateToast, "Transaction failed. Please try again.", "error");
    }
  };

  /* ── Approve ── */
  const handleApprove = () => {
    if (!contractAddr) { showToast(setActionToast, "Enter a contract address first.", "error"); return; }
    openModal({
      action: "approve",
      title: "Approve Payment?",
      message: "This will release the locked ETH to the seller. This action is permanent and cannot be undone.",
      detail: `Contract: ${contractAddr}`,
      confirmText: "✅ Yes, Approve",
      onConfirm: async () => { closeModal(); await executeApprove(); },
    });
  };

  const executeApprove = async () => {
    setLoading("approve");
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer   = await provider.getSigner();
      const contract = new ethers.Contract(contractAddr, contractABI, signer);
      const tx = await contract.approvePayment();
      await tx.wait();
      const stamp = new Date().toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" }) + " " + new Date().toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" });
      const updated = transactions.map(t =>
        t.contract.toLowerCase() === contractAddr.toLowerCase() ? { ...t, status: "Approved", date: stamp } : t
      );
      saveTransactions(updated);
      showToast(setActionToast, "Transaction Approved Successfully!", "success");
    } catch (err) {
      console.error(err);
      showToast(setActionToast, "Approval failed. Check address & wallet.", "error");
    }
    setLoading("");
  };

  /* ── Refund ── */
  const handleRefund = () => {
    if (!contractAddr) { showToast(setActionToast, "Enter a contract address first.", "error"); return; }
    openModal({
      action: "refund",
      title: "Refund Buyer?",
      message: "This will return the locked ETH back to you (the buyer). This action is permanent and cannot be undone.",
      detail: `Contract: ${contractAddr}`,
      confirmText: "↩️ Yes, Refund",
      onConfirm: async () => { closeModal(); await executeRefund(); },
    });
  };

  const executeRefund = async () => {
    setLoading("refund");
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer   = await provider.getSigner();
      const contract = new ethers.Contract(contractAddr, contractABI, signer);
      const tx = await contract.refundBuyer();
      await tx.wait();
      const stamp = new Date().toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" }) + " " + new Date().toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" });
      const updated = transactions.map(t =>
        t.contract.toLowerCase() === contractAddr.toLowerCase() ? { ...t, status: "Refunded", date: stamp } : t
      );
      saveTransactions(updated);
      showToast(setActionToast, "Transaction Refunded Successfully!", "success");
    } catch (err) {
      console.error(err);
      showToast(setActionToast, "Refund failed. Check address & wallet.", "error");
    }
    setLoading("");
  };

  /* ── shared input style ── */
  const inputStyle = {
    width: "100%", padding: "13px 15px", borderRadius: "12px",
    border: "1.5px solid #dbeafe", background: "rgba(255,255,255,0.85)",
    color: "#0f172a", fontSize: "14px", fontFamily: "Poppins, sans-serif",
    outline: "none", boxSizing: "border-box", marginBottom: "14px",
    transition: "border-color 0.2s",
  };

  const label = (text) => (
    <label style={{ fontSize: "12px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "5px" }}>
      {text}
    </label>
  );

  /* stats */
  const total    = transactions.length;
  const approved = transactions.filter(t => t.status === "Approved").length;
  const refunded = transactions.filter(t => t.status === "Refunded").length;
  const pending  = transactions.filter(t => t.status === "Pending").length;

  const thStyle = {
    padding: "13px 16px", fontWeight: 700, color: "#0f172a", fontSize: "13px",
    textAlign: "left", whiteSpace: "nowrap",
    borderBottom: "1px solid rgba(226,232,240,0.7)",
    background: "rgba(99,102,241,0.06)",
  };
  const tdStyle = {
    padding: "13px 16px", fontSize: "13px", color: "#334155",
    borderBottom: "1px solid rgba(226,232,240,0.5)", verticalAlign: "middle",
  };

  return (
    <div id="escrow-section" style={{ background: "transparent", padding: "80px 40px 120px" }}>

      {/* Confirmation modal — renders above everything */}
      <ConfirmModal
        modal={modal}
        onConfirm={modal?.onConfirm}
        onCancel={closeModal}
      />

      {/* ════ ROW 1: big glass frame wrapping heading + cards + scroll button ════ */}
      <div style={{
        ...glass,
        padding: "48px 40px 40px",
        marginBottom: "0",
      }}>

        {/* Heading */}
        <div style={{ marginBottom: "36px", textAlign: "center" }}>
          <h1 style={{ fontSize: "38px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px" }}>
            Your Escrow{" "}
            <span style={{ background: "linear-gradient(90deg,#a855f7,#2563eb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Dashboard
            </span>
          </h1>
          <p style={{ color: "#64748b", fontSize: "15px", margin: 0 }}>
            Create a new escrow on the left · Approve or refund an existing one on the right
          </p>
        </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", alignItems: "start" }}>

        {/* ── LEFT: Create Escrow form ── */}
        <div>
          <Toast msg={createToast.msg} type={createToast.type} />
          <div style={{ ...glass, padding: "36px 32px" }}>

            {/* Badge */}
            <div style={{
              display: "inline-block", padding: "6px 16px", borderRadius: "40px",
              background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.5)",
              color: "#6366f1", fontSize: "12px", fontWeight: 700, marginBottom: "16px",
            }}>
              🔐 Powered by Ethereum Smart Contracts
            </div>

            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>
              Create Your{" "}
              <span style={{ background: "linear-gradient(90deg,#a855f7,#2563eb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Secure Escrow
              </span>
            </h2>
            <p style={{ color: "#64748b", fontSize: "13px", marginTop: 0, marginBottom: "24px" }}>
              Deploy a smart contract and lock funds until delivery is confirmed
            </p>

            <form onSubmit={handleCreateEscrow}>
              {label("Seller Name")}
              <input type="text" placeholder="e.g. ABC Corp" value={sellerName}
                onChange={e => setSellerName(e.target.value)} style={inputStyle} required
                onFocus={e => e.target.style.borderColor = "#6366f1"}
                onBlur={e  => e.target.style.borderColor = "#dbeafe"} />

              {label("Seller Wallet Address")}
              <input type="text" placeholder="0x..." value={sellerAddress}
                onChange={e => setSellerAddress(e.target.value)} style={{ ...inputStyle, fontFamily: "monospace" }} required
                onFocus={e => e.target.style.borderColor = "#6366f1"}
                onBlur={e  => e.target.style.borderColor = "#dbeafe"} />

              {label("Amount (ETH)")}
              <input type="number" placeholder="e.g. 0.5" step="0.001" min="0" value={value}
                onChange={e => setValue(e.target.value)} style={inputStyle} required
                onFocus={e => e.target.style.borderColor = "#6366f1"}
                onBlur={e  => e.target.style.borderColor = "#dbeafe"} />

              {/* ── Copy Contract Address — appears after successful deploy ── */}
              {lastCreatedAddress && (
                <div style={{
                  marginBottom: "14px",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  background: "rgba(99,102,241,0.07)",
                  border: "1px solid rgba(99,102,241,0.18)",
                }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#6366f1", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    🎉 Last Created Contract Address
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {/* address pill */}
                    <span style={{
                      flex: 1, fontFamily: "monospace", fontSize: "12px",
                      color: "#334155", fontWeight: 600,
                      wordBreak: "break-all", lineHeight: 1.5,
                    }}>
                      {lastCreatedAddress}
                    </span>
                    {/* copy button */}
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(lastCreatedAddress);
                        setAddrCopied(true);
                        setTimeout(() => setAddrCopied(false), 2000);
                      }}
                      style={{
                        flexShrink: 0,
                        padding: "8px 14px",
                        borderRadius: "10px",
                        border: "none",
                        background: addrCopied
                          ? "linear-gradient(135deg,#16a34a,#15803d)"
                          : "linear-gradient(135deg,#6366f1,#4f46e5)",
                        color: "white",
                        fontWeight: 700,
                        fontSize: "12px",
                        cursor: "pointer",
                        fontFamily: "Poppins, sans-serif",
                        transition: "background 0.2s, transform 0.2s",
                        whiteSpace: "nowrap",
                        boxShadow: addrCopied
                          ? "0 4px 12px rgba(22,163,74,0.30)"
                          : "0 4px 12px rgba(99,102,241,0.30)",
                      }}
                      onMouseOver={e => e.currentTarget.style.transform = "translateY(-1px)"}
                      onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
                    >
                      {addrCopied ? "✓ Copied!" : "📋 Copy ID"}
                    </button>
                  </div>
                </div>
              )}

              <button type="submit" style={{
                width: "100%", padding: "15px", marginTop: "6px",
                background: "linear-gradient(135deg,#a855f7,#2563eb)",
                color: "white", border: "none", borderRadius: "13px",
                fontSize: "15px", fontWeight: 700, cursor: "pointer",
                boxShadow: "0 10px 28px rgba(99,102,241,0.28)",
                fontFamily: "Poppins, sans-serif", transition: "transform 0.2s",
              }}
                onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
              >
                🚀 Create Escrow
              </button>
            </form>

            <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "12px", marginTop: "16px", marginBottom: 0 }}>
              Funds are locked in the contract until you approve or request a refund.
            </p>
          </div>
        </div>

        {/* ── RIGHT: Approve / Refund ── same card style as Create Escrow ── */}
        <div>
          <Toast msg={actionToast.msg} type={actionToast.type} />
          <div style={{ ...glass, padding: "36px 32px" }}>

            {/* Badge — mirrors "🔐 Powered by Ethereum Smart Contracts" */}
            <div style={{
              display: "inline-block", padding: "6px 16px", borderRadius: "40px",
              background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.5)",
              color: "#6366f1", fontSize: "12px", fontWeight: 700, marginBottom: "16px",
            }}>
              ⚡ Manage Your Escrow Contract
            </div>

            {/* Heading — mirrors "Create Your Secure Escrow" */}
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>
              Approve or{" "}
              <span style={{ background: "linear-gradient(90deg,#a855f7,#2563eb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Refund
              </span>
            </h2>

            {/* Subtitle — mirrors "Deploy a smart contract…" */}
            <p style={{ color: "#64748b", fontSize: "13px", marginTop: 0, marginBottom: "24px" }}>
              Paste a contract address and release or return the locked funds
            </p>

            {/* Input */}
            {label("Contract Address")}
            <input
              type="text" placeholder="0x..." value={contractAddr}
              onChange={e => setContractAddr(e.target.value)}
              style={{ ...inputStyle, fontFamily: "monospace" }}
              onFocus={e => e.target.style.borderColor = "#6366f1"}
              onBlur={e  => e.target.style.borderColor = "#dbeafe"}
            />

            {/* Approve button — full width, same height as Create Escrow button */}
            <button onClick={handleApprove} disabled={!!loading} style={{
              width: "100%", padding: "15px", marginTop: "6px",
              background: loading === "approve"
                ? "rgba(22,163,74,0.5)"
                : "linear-gradient(135deg,#16a34a,#15803d)",
              color: "white", border: "none", borderRadius: "13px",
              fontSize: "15px", fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "0 10px 28px rgba(22,163,74,0.25)",
              fontFamily: "Poppins, sans-serif", transition: "transform 0.2s",
              marginBottom: "12px",
            }}
              onMouseOver={e => { if (!loading) e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
            >
              {loading === "approve" ? "⏳ Approving…" : "✅ Approve Payment"}
            </button>

            {/* Refund button — full width, same height */}
            <button onClick={handleRefund} disabled={!!loading} style={{
              width: "100%", padding: "15px",
              background: loading === "refund"
                ? "rgba(220,38,38,0.5)"
                : "linear-gradient(135deg,#dc2626,#b91c1c)",
              color: "white", border: "none", borderRadius: "13px",
              fontSize: "15px", fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "0 10px 28px rgba(220,38,38,0.22)",
              fontFamily: "Poppins, sans-serif", transition: "transform 0.2s",
            }}
              onMouseOver={e => { if (!loading) e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
            >
              {loading === "refund" ? "⏳ Refunding…" : "↩️ Refund Buyer"}
            </button>

            {/* Footer note — mirrors "Funds are locked in the contract…" */}
            <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "12px", marginTop: "16px", marginBottom: 0 }}>
              Only the <strong>buyer</strong> wallet can approve or refund this escrow.
            </p>
          </div>
        </div>
      </div>

      {/* ── Scroll Down button ── */}
      <div style={{ textAlign: "center", marginTop: "36px" }}>
        <button
          onClick={() => document.getElementById("transaction-history").scrollIntoView({ behavior: "smooth" })}
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "14px 32px", borderRadius: "50px",
            background: "linear-gradient(135deg,#a855f7,#2563eb)",
            border: "none",
            boxShadow: "0 8px 24px rgba(99,102,241,0.25)",
            color: "white", fontWeight: 700, fontSize: "15px",
            cursor: "pointer", fontFamily: "Poppins, sans-serif",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(99,102,241,0.35)"; }}
          onMouseOut={e  => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.25)"; }}
        >
          View Transaction History
          <span style={{ animation: "bounce 1.4s infinite", display: "inline-block" }}>↓</span>
        </button>
      </div>

      </div>{/* ── end glass frame ── */}

      {/* ════ Live Contract Status Checker ════ */}
      <div style={{ marginTop: "40px" }}>
        <LiveStatusChecker glass={glass} />
      </div>

      {/* ════ ROW 2: Stats + Transaction History (full width) ════ */}
      <div id="transaction-history" style={{ marginTop: "60px" }}>

        {/* Stat cards — horizontal layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "40px" }}>
          {[
            { label: "Total Escrows", value: total,    emoji: "📊", color: "#6366f1", bg: "rgba(99,102,241,0.10)",  border: "rgba(99,102,241,0.22)"  },
            { label: "Approved",      value: approved, emoji: "✅", color: "#16a34a", bg: "rgba(22,163,74,0.10)",   border: "rgba(22,163,74,0.25)"   },
            { label: "Refunded",      value: refunded, emoji: "↩️", color: "#dc2626", bg: "rgba(220,38,38,0.10)",   border: "rgba(220,38,38,0.25)"   },
            { label: "Pending",       value: pending,  emoji: "⏳", color: "#d97706", bg: "rgba(217,119,6,0.10)",   border: "rgba(217,119,6,0.25)"   },
          ].map(s => (
            <div key={s.label}
              style={{
                display: "flex", alignItems: "center", gap: "18px",
                padding: "22px 26px",
                background: s.bg,
                border: `1.5px solid ${s.border}`,
                borderRadius: "18px",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow: `0 4px 18px ${s.border}`,
                transition: "transform 0.22s, box-shadow 0.22s",
                cursor: "default",
              }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 10px 28px ${s.border}`; }}
              onMouseOut={e  => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = `0 4px 18px ${s.border}`; }}
            >
              {/* icon circle */}
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
                background: "rgba(255,255,255,0.70)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "26px",
                boxShadow: `0 2px 10px ${s.border}`,
              }}>
                {s.emoji}
              </div>
              {/* text */}
              <div>
                <div style={{ fontSize: "30px", fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "13px", color: "#475569", fontWeight: 700, marginTop: "5px" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Transaction History table */}
        <div style={{ ...glass, overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(226,232,240,0.6)", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "20px" }}>📋</span>
            <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>Transaction History</h2>
            <span style={{ marginLeft: "auto", fontSize: "13px", color: "#94a3b8", fontWeight: 600 }}>
              Live — updates instantly
            </span>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr>
                  {["#", "Contract Address", "Seller Name", "Seller Address", "Amount", "Status", "Date & Time"].map(h => (
                    <th key={h} style={thStyle}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: "center", padding: "48px 20px", color: "#94a3b8" }}>
                      <div style={{ fontSize: "36px", marginBottom: "10px" }}>📭</div>
                      <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>No transactions yet</div>
                      <div style={{ fontSize: "13px" }}>Create your first escrow above — it will appear here instantly.</div>
                    </td>
                  </tr>
                ) : (
                  transactions.map((tx) => {
                    const sc = statusColors[tx.status];
                    return (
                      <tr key={tx.id}
                        onMouseOver={e  => e.currentTarget.style.background = "rgba(99,102,241,0.04)"}
                        onMouseOut={e   => e.currentTarget.style.background = "transparent"}
                        style={{ transition: "background 0.2s" }}
                      >
                        <td style={{ ...tdStyle, color: "#94a3b8", fontWeight: 700 }}>#{tx.id}</td>
                        <td style={tdStyle}><CopyAddress address={tx.contract} /></td>
                        <td style={{ ...tdStyle, fontWeight: 600, color: "#0f172a" }}>{tx.sellerName || "—"}</td>
                        <td style={tdStyle}><CopyAddress address={tx.seller} /></td>
                        <td style={{ ...tdStyle, color: "#2563eb", fontWeight: 700 }}>{tx.amount}</td>
                        <td style={tdStyle}>
                          <span style={{
                            padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 700,
                            color: sc.color, background: sc.bg, border: `1px solid ${sc.border}`,
                          }}>
                            {tx.status}
                          </span>
                        </td>
                        <td style={{ ...tdStyle, color: "#64748b", fontSize: "12px", whiteSpace: "nowrap" }}>{tx.date || "—"}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
        @keyframes bounce { 0%,100% { transform:translateY(0); } 50% { transform:translateY(5px); } }
        @media (max-width: 900px) {
          .escrow-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
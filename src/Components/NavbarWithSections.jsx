import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function NavbarWithSections() {

  const [activeRole,  setActiveRole]  = useState(null);
  const [account,     setAccount]     = useState("");
  const [balance,     setBalance]     = useState("");
  const [network,     setNetwork]     = useState("");
  const [wrongNet,    setWrongNet]    = useState(false);

  const SEPOLIA_CHAIN_ID = "0xaa36a7";

  const short = (addr) => addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  const fetchAccountInfo = async (provider) => {
    const signer  = await provider.getSigner();
    const addr    = await signer.getAddress();
    const bal     = await provider.getBalance(addr);
    const net     = await provider.getNetwork();
    const chainId = "0x" + net.chainId.toString(16);
    const netName = net.name === "unknown" ? `Chain ${net.chainId}` : net.name.charAt(0).toUpperCase() + net.name.slice(1);
    setAccount(addr);
    setBalance(parseFloat(ethers.formatEther(bal)).toFixed(4));
    setNetwork(netName);
    setWrongNet(chainId !== SEPOLIA_CHAIN_ID);
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) { alert("Please install MetaMask"); return; }
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      await fetchAccountInfo(provider);
    } catch (error) { console.log(error); }
  };

  const switchToSepolia = async () => {
    try {
      await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: SEPOLIA_CHAIN_ID }] });
    } catch (err) { console.log(err); }
  };

  useEffect(() => {
    if (!window.ethereum) return;
    const handleChange = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) await fetchAccountInfo(provider);
      else { setAccount(""); setBalance(""); setNetwork(""); setWrongNet(false); }
    };
    window.ethereum.on("accountsChanged", handleChange);
    window.ethereum.on("chainChanged",    handleChange);
    return () => {
      window.ethereum.removeListener("accountsChanged", handleChange);
      window.ethereum.removeListener("chainChanged",    handleChange);
    };
  }, []);

  const roles = [
    { icon: "🧑‍💼", title: "Buyer",            description: "Creates escrow, deposits funds, and approves or requests refund after verification." },
    { icon: "🏪",   title: "Seller",           description: "Provides goods or services and receives payment after buyer approval." },
    { icon: "📜",   title: "Smart Contract",   description: "Holds funds securely and executes payment rules automatically without middlemen." },
    { icon: "🦊",   title: "MetaMask Wallet",  description: "Used for wallet connection, transaction signing, and secure blockchain interaction." },
    { icon: "⛓️",  title: "Ethereum Network", description: "Records all transactions permanently and ensures transparency through blockchain." },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  const cardStyle = {
    background: "rgba(255, 255, 255, 0.55)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "1px solid rgba(255, 255, 255, 0.45)",
    borderRadius: "18px",
    boxShadow: "0 8px 32px rgba(99, 102, 241, 0.10)",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  return (
    <div>

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "rgba(15, 23, 42, 0.82)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ color: "white", margin: 0 }}>TrustFund Escrow</h2>

        {/* CENTER NAV BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            alignItems: "center",
          }}
        >
          <button onClick={() => scrollToSection("how-it-works")} className="nav-btn">
            How It Works
          </button>
          <button onClick={() => scrollToSection("features")} className="nav-btn">
            Features
          </button>
          <button onClick={() => scrollToSection("roles")} className="nav-btn">
            Roles
          </button>
          <button
            onClick={() => scrollToSection("escrow-section")}
            style={{
              background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 6px 15px rgba(37,99,235,0.3)",
            }}
          >
            Let's Start
          </button>
        </div>

        {/* WALLET DISPLAY */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

          {/* Wrong network warning */}
          {account && wrongNet && (
            <button onClick={switchToSepolia} style={{
              background: "linear-gradient(135deg,#dc2626,#b91c1c)",
              color: "white", border: "none", padding: "8px 14px",
              borderRadius: "10px", fontWeight: 700, fontSize: "12px",
              cursor: "pointer", display: "flex", alignItems: "center", gap: "6px",
              boxShadow: "0 4px 12px rgba(220,38,38,0.35)",
              animation: "pulse 1.8s infinite",
            }}>
              ⚠️ Wrong Network — Switch to Sepolia
            </button>
          )}

          {/* Network badge — only when connected and correct network */}
          {account && !wrongNet && (
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "6px 12px", borderRadius: "10px",
              background: "rgba(22,163,74,0.15)",
              border: "1px solid rgba(22,163,74,0.35)",
            }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
              <span style={{ color: "#22c55e", fontSize: "12px", fontWeight: 700 }}>{network}</span>
            </div>
          )}

          {/* Account chip or Connect button */}
          {account ? (
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "8px 16px", borderRadius: "12px",
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(10px)",
            }}>
              {/* Jazzicon-style avatar */}
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%",
                background: "linear-gradient(135deg,#a855f7,#2563eb)",
                flexShrink: 0,
              }} />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <span style={{ color: "white", fontSize: "13px", fontWeight: 700, fontFamily: "monospace" }}>
                  {short(account)}
                </span>
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "11px", fontWeight: 600 }}>
                  {balance} ETH
                </span>
              </div>
            </div>
          ) : (
            <button onClick={connectWallet} style={{
              background: "linear-gradient(135deg,#2563eb,#4f46e5)",
              color: "white", border: "none", padding: "10px 18px",
              borderRadius: "10px", cursor: "pointer", fontWeight: 700,
              fontSize: "14px", boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
              display: "flex", alignItems: "center", gap: "8px",
              transition: "transform 0.2s",
            }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
            >
              🦊 Connect Wallet
            </button>
          )}
        </div>
      </nav>

      <style>{`
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.75; } }
      `}</style>

      {/* ── HERO SECTION ── */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Secure • Transparent • Web3 Powered</div>
          <h1 className="hero-title">
            DECENTRALIZED <span>ESCROW PAYMENTS</span>
          </h1>
          <p className="hero-subtitle">
            Secure blockchain-based escrow payments between buyers and sellers
            without middlemen using Ethereum smart contracts.
          </p>
          <button className="hero-btn" onClick={() => scrollToSection("escrow-section")}>
            Let's Start →
          </button>
        </div>
      </div>

      {/* ── HOW IT WORKS ──
          background: "transparent" lets the body gradient show through
      */}
      <section
        id="how-it-works"
        style={{ padding: "100px 40px", background: "transparent" }}
      >
        <h1 style={{ textAlign: "center", fontSize: "40px", color: "#0f172a", fontWeight: 800 }}>
          How It Works
        </h1>
        <p style={{ textAlign: "center", color: "#64748b", marginTop: "10px" }}>
          Four simple steps to secure your transaction
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            marginTop: "50px",
          }}
        >
          {[
            ["👛", "Connect Wallet",    "Link your MetaMask in one click"],
            ["📄", "Create Escrow",     "Set amount, seller address & terms"],
            ["✅", "Approve Payment",   "Release funds once satisfied"],
            ["🔗", "Blockchain Record", "Every step recorded on-chain"],
          ].map((item, i) => (
            <div
              key={i}
              style={{
                ...cardStyle,
                padding: "35px 25px",
                textAlign: "center",
              }}
            >
              {/* Step number badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #a855f7, #2563eb)",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: 700,
                  marginBottom: "14px",
                }}
              >
                {i + 1}
              </div>
              <div style={{ fontSize: "42px", marginBottom: "14px" }}>{item[0]}</div>
              <h3 style={{ margin: "0 0 8px", color: "#0f172a", fontSize: "17px" }}>{item[1]}</h3>
              <p style={{ margin: 0, color: "#64748b", fontSize: "14px", lineHeight: 1.6 }}>{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        id="features"
        style={{ padding: "100px 40px", background: "transparent" }}
      >
        <h1 style={{ textAlign: "center", fontSize: "40px", color: "#0f172a", fontWeight: 800 }}>
          Features
        </h1>
        <p style={{ textAlign: "center", color: "#64748b", marginTop: "10px" }}>
          Everything you need for trustless payments
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            marginTop: "50px",
          }}
        >
          {[
            ["🔒", "Secure Escrow",        "Funds are locked until both parties agree"],
            ["🚫", "No Middleman",          "Smart contracts replace costly intermediaries"],
            ["⚡", "Fast Transactions",     "Settlement in seconds on Ethereum"],
            ["↩️", "Approve & Refund",      "Buyer controls release or refund anytime"],
            ["📊", "Transparent History",   "Every action is publicly verifiable on-chain"],
            ["🔔", "Real-Time Updates",     "Instant status updates as the escrow progresses"],
          ].map((feat, i) => (
            <div
              key={i}
              style={{
                ...cardStyle,
                padding: "30px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "32px" }}>{feat[0]}</span>
              <h3 style={{ margin: 0, color: "#0f172a", fontSize: "17px" }}>{feat[1]}</h3>
              <p style={{ margin: 0, color: "#64748b", fontSize: "14px", lineHeight: 1.6 }}>{feat[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ROLES ── */}
      <section
        id="roles"
        style={{ padding: "100px 40px", background: "transparent" }}
      >
        <h1 style={{ textAlign: "center", fontSize: "40px", color: "#0f172a", fontWeight: 800 }}>
          Roles
        </h1>
        <p style={{ textAlign: "center", color: "#64748b", marginTop: "10px" }}>
          Click any role to learn more
        </p>

        <div style={{ maxWidth: "800px", margin: "40px auto" }}>
          {roles.map((role, index) => (
            <div key={index} style={{ marginBottom: "14px" }}>
              <button
                onClick={() => setActiveRole(activeRole === index ? null : index)}
                style={{
                  width: "100%",
                  padding: "18px 22px",
                  background:
                    activeRole === index
                      ? "linear-gradient(135deg, #a855f7, #2563eb)"
                      : "rgba(15, 23, 42, 0.88)",
                  color: "white",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "16px",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  backdropFilter: "blur(8px)",
                  transition: "background 0.3s",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                }}
              >
                <span style={{ fontSize: "22px" }}>{role.icon}</span>
                {role.title}
                <span style={{ marginLeft: "auto", opacity: 0.7 }}>
                  {activeRole === index ? "▲" : "▼"}
                </span>
              </button>

              {activeRole === index && (
                <div
                  style={{
                    ...cardStyle,
                    padding: "18px 22px",
                    marginTop: "6px",
                    color: "#334155",
                    fontSize: "15px",
                    lineHeight: 1.7,
                  }}
                >
                  {role.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
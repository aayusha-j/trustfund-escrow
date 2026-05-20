
// import React from "react";
// import "./App.css";

// import NavbarWithSections from "./Components/NavbarWithSections";
// import EscrowActions from "./Components/EscrowActions";

// function App() {
//   return (
//     <div className="app-container">

//       {/* Navbar + Hero + all sections */}
//       <NavbarWithSections />

//       {/* Spacer — transparent so body gradient shows through */}
//       <div style={{ height: "80px", background: "transparent" }} />

//       {/* Escrow form */}
//       <EscrowActions />

//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";

// import NavbarWithSections from "./Components/NavbarWithSections";
// import EscrowActions      from "./Components/EscrowActions";
// import EscrowInteract     from "./Components/EscrowInteract";

// function App() {
//   return (
//     <div className="app-container">

//       {/* Navbar + Hero + How It Works + Features + Roles */}
//       <NavbarWithSections />

//       {/* Create Escrow form */}
//       <EscrowActions />

//       {/* Transaction History (left) + Approve/Refund panel (right) */}
//       <EscrowInteract />

//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";

import NavbarWithSections from "./Components/NavbarWithSections";
import EscrowPage         from "./Components/EscrowPage";

function App() {
  return (
    <div className="app-container">
      {/* Navbar + Hero + How It Works + Features + Roles */}
      <NavbarWithSections />

      {/* Create Escrow + Approve/Refund side by side, then Transaction History below */}
      <EscrowPage />
    </div>
  );
}

export default App;
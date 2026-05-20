// src/Components/TransactionHistory.js

import React from "react";

function TransactionHistory({ transactions }) {
  return (
    <div className="transaction-box">
      <h2>Recent Escrow Transactions</h2>

      <table className="transaction-table">
        <thead>
          <tr>
            <th>Contract Address</th>
            <th>Seller Address</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions && transactions.length > 0 ? (
            transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.contract}</td>
                <td>{tx.seller}</td>
                <td>{tx.amount}</td>
                <td>
                  <span
                    className={`status ${tx.status.toLowerCase()}`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td>{tx.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  padding: "20px",
                  fontWeight: "bold",
                }}
              >
                No Transactions Yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
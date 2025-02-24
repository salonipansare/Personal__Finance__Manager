import React, { useState, createContext } from 'react';

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Actions
  function addTransaction(transaction) {
    setTransactions([transaction, ...transactions]);
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem('transactions')) || []

export const ExpenseContext = createContext(initialState);


export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  
  const balance = transactions.reduce((acc, currVal) =>{
    return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
  },0)
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };


  return (
    <ExpenseContext.Provider
      value={{
        deleteTransaction, addTransaction,transactions, balance
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

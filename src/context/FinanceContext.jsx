import { createContext, useState, useEffect } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {

const [transactions,setTransactions] = useState(()=>{
const data = localStorage.getItem("transactions");
return data ? JSON.parse(data) : [];
});

useEffect(()=>{
localStorage.setItem("transactions",JSON.stringify(transactions));
},[transactions]);

const addTransaction = (transaction)=>{
setTransactions([...transactions,transaction]);
};

const deleteTransaction = (id)=>{
setTransactions(transactions.filter(t=>t.id!==id));
};

return(
<FinanceContext.Provider value={{transactions,addTransaction,deleteTransaction}}>
{children}
</FinanceContext.Provider>
);

};
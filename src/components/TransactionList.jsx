import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function TransactionList({dark}){

const {transactions,deleteTransaction} = useContext(FinanceContext);

return(

<div className={`${dark ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded-xl shadow`}>

<h3 className="font-semibold mb-3">Transactions</h3>

{transactions.map(t=>(

<div
key={t.id}
className="flex justify-between items-center border-b py-2"
>

<span>
{t.amount>0 ? "🟢" : "🔴"} {t.text} ({t.category})
</span>

<span>₹{t.amount}</span>

<button
onClick={()=>deleteTransaction(t.id)}
className="text-red-500"
>
Delete
</button>

</div>

))}

</div>

);

}

export default TransactionList;
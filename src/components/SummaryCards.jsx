import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function SummaryCards({dark}){

const {transactions} = useContext(FinanceContext);

const income = transactions
.filter(t=>t.amount>0)
.reduce((acc,t)=>acc+t.amount,0);

const expense = transactions
.filter(t=>t.amount<0)
.reduce((acc,t)=>acc+t.amount,0);

const balance = income + expense;

return(

<div className="grid md:grid-cols-3 gap-4">

<div className={`${dark ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded-xl shadow`}>
<p className="text-gray-500">Income</p>
<h2 className="text-2xl font-bold text-green-600">₹{income}</h2>
</div>

<div className={`${dark ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded-xl shadow`}>
<p className="text-gray-500">Expense</p>
<h2 className="text-2xl font-bold text-red-500">₹{Math.abs(expense)}</h2>
</div>

<div className={`${dark ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded-xl shadow`}>
<p className="text-gray-500">Balance</p>
<h2 className="text-2xl font-bold text-blue-600">₹{balance}</h2>
</div>

</div>

);

}

export default SummaryCards;
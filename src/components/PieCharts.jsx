import { Pie } from "react-chartjs-2";
import { Chart as ChartJS,ArcElement,Tooltip,Legend } from "chart.js";
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

ChartJS.register(ArcElement,Tooltip,Legend);

function PieCharts({dark}){

const {transactions} = useContext(FinanceContext);

const income = transactions
.filter(t=>t.amount>0)
.reduce((a,t)=>a+t.amount,0);

const expense = transactions
.filter(t=>t.amount<0)
.reduce((a,t)=>a+Math.abs(t.amount),0);

const data={
labels:["Income","Expense"],
datasets:[{
data:[income,expense],
backgroundColor:["green","red"]
}]
};

return(
<div className={`${dark ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded-xl shadow`}>
<Pie data={data}/>
</div>
);

}

export default PieCharts;
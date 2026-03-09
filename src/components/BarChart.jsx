import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function BarChart({dark}) {

  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((a, t) => a + t.amount, 0);

  const expense = transactions
    .filter(t => t.amount < 0)
    .reduce((a, t) => a + Math.abs(t.amount), 0);

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Finance Analytics",
        data: [income, expense],
        backgroundColor: ["green", "red"]
      }
    ]
  };

  return (
    <div className={`${dark ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded-xl shadow`}>
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
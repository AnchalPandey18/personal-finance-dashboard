import { useState } from "react";
import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import AddTransaction from "../components/AddTransaction";
import PieCharts from "../components/PieCharts";
import BarChart from "../components/BarChart";
import TransactionList from "../components/TransactionList";

function Dashboard() {

  const [dark, setDark] = useState(false);

  return (

    <div className={`min-h-screen ${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} transition-all duration-300`}>

      <Navbar dark={dark} setDark={setDark} />

      <div className="max-w-5xl mx-auto p-6 space-y-6">

        <SummaryCards dark ={dark}/>

        <div className="grid md:grid-cols-2 gap-6">

          <AddTransaction dark={dark} />

          <PieCharts dark ={dark} />

        </div>

        <BarChart dark = {dark} />

        <TransactionList dark={dark} />

      </div>

    </div>

  );
}

export default Dashboard;
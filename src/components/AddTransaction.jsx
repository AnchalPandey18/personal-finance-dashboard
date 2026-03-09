import { useState,useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import { v4 as uuidv4 } from "uuid";

function AddTransaction({dark}){

const {addTransaction} = useContext(FinanceContext);

const [text,setText] = useState("");
const [amount,setAmount] = useState("");
const [category,setCategory] = useState("Food");

const submitHandler = (e)=>{

e.preventDefault();

addTransaction({
id:uuidv4(),
text,
amount:+amount,
category
});

setText("");
setAmount("");

};

return(

<div className={`${dark ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded-xl shadow`}>

<h3 className="font-semibold mb-3">Add Transaction</h3>

<form onSubmit={submitHandler} className="space-y-3">

<input
className="border w-full p-2 rounded"
placeholder="Description"
value={text}
onChange={(e)=>setText(e.target.value)}
/>

<input
className="border w-full p-2 rounded"
placeholder="Amount (+income / -expense)"
type="number"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<select
className="border w-full p-2 rounded"
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

<option>Food</option>
<option>Travel</option>
<option>Shopping</option>
<option>Salary</option>
<option>Other</option>

</select>

<button className="bg-blue-600 text-white w-full py-2 rounded">
Add Transaction
</button>

</form>

</div>

);

}

export default AddTransaction;
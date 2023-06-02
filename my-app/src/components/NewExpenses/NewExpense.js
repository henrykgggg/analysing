import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = () => {

const savehandler =(enteredSaveHandler)=>{
    const expenseData = {
        ...enteredSaveHandler,
        id:Math.random().toString()
    }
console.log(expenseData)
}




    return <div className="new-expense">
<ExpenseForm onSaveHandler={savehandler}/>
    </div>
}
export default NewExpense;
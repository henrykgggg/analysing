import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

const savehandler =(enteredSaveHandler)=>{
    const expenseData = {
        ...enteredSaveHandler,
        id:Math.random().toString()
    }
props.OnAddExpenses(expenseData)
}




    return <div className="new-expense">
<ExpenseForm onSaveHandler={savehandler}/>
    </div>
}
export default NewExpense;
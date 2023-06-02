import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    const [enteredTitle ,setEnteredTitle] = useState('')
    const [enteredAmount ,setEnteredAmount] = useState('')
    const [enteredDate ,setEnteredDate] = useState('')

const titleChangeHandler = (event) =>{
  setEnteredTitle(event.target.value)
}

const AmountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value)
  }
  
const DateChangeHandler = (event) =>{
    setEnteredDate(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
const expenses ={
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate)

}
props.onSaveHandler(expenses);
setEnteredTitle('')
setEnteredAmount('')
setEnteredDate('')
  }


return(
    <form onSubmit={submitHandler}>
<div className="new-expense__controls">
    <div className="new-expense__ontrol">
        <label>TITLE</label>
        <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
    </div>
    <div className="new-expense__ontrol">
        <label>AMOUNT</label>
        <input type="numbeer" min="0.01" step="0.01" onChange={AmountChangeHandler} value={enteredAmount}/>
    </div>
    <div className="new-expense__ontrol">
        <label>DATE</label>
        <input type="date" min="2018-01-01" max="2023-12-31" onChange={DateChangeHandler} value={enteredDate}/>
    </div>
    <div className="new-expense__actions">
        <button type="submit">ADD EXPENSE</button>
    </div>
</div>
    </form>
)
}
export default ExpenseForm;
import React, { useState } from 'react'
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
const ExpenseItem = (props) => {
  const [title , setTitle] = useState(props.title)
const onClickHandler = () => {
  setTitle('updated')
}


  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>                                                                        
        <div className="expense-item__price">${props.amount}</div>  
        <button onClick={onClickHandler}>click me</button>                                                                                          
      </div>                                               
    </Card>
  );
};
export default ExpenseItem;

import React from "react";

const ExpenseForm = () =>{
return(
    <form>
<div className="new-expense__controls">
    <div className="new-expense__ontrol">
        <label>TITLE</label>
        <input type="text" />
    </div>
    <div className="new-expense__ontrol">
        <label>AMOUNT</label>
        <input type="numbeer" min="0.01" step="0.01" />
    </div>
    <div className="new-expense__ontrol">
        <label>DATE</label>
        <input type="date" min="2018-01-01" max="2023-12-31" />
    </div>
    <div className="new-expense__actions">
        <button type="submit">ADD EXPENSE</button>
    </div>
</div>
    </form>
)
}
export default ExpenseForm;
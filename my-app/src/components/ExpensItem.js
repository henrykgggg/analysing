import './ExpenseItem.css'

const ExpenseItem = () => {
const expenseDate =  new Date(2021 , 2 , 24)
const expenseTitle = 'car insurance';
const expenseAmount = 295.67;



  return (
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>  
      </div>
      <div className='expense-item__price'>${expenseAmount}</div>
    </div>
  );
};
export default ExpenseItem;
  
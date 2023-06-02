import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "02",
      title: "car insurance",
      amount: 456,
      date: new Date(2022, 3, 1),
    },
    {
      id: "1",
      title: "car insurance",
      amount: 466,
      date: new Date(2022, 3, 1),
    },
    {
      id: "2",
      title: "ambulance",
      amount: 456,
      date: new Date(2019, 3, 9),
    },
    {
      id: "3",
      title: "hericopteer",
      amount: 458,
      date: new Date(2023, 3, 1),
    },
    {
      id: "4",
      title: "bus",
      amount: 486,
      date: new Date(2022, 8, 1),
    },
  ];

const NewExpenseHandler = (expensesLast) =>{
console.log(expensesLast)
}



  return (
    <div>
       <NewExpense OnAddExpenses={NewExpenseHandler}/>
      <Expenses items={expenses} />
     
    </div>
  );
};

export default App;

import ExpenseItem from "./components/ExpensItem";
const App = () => {
  const expenses = [
    {
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

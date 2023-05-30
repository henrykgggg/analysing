
import ExpenseItem from "./components/ExpensItem";
function App() {
  const expenses = [
    {
    title:'car insurance', amount:456, date: new Date(2022,3,1)
  },
  {
    title:'car insurance', amount:456, date: new Date(2022,3,1)
  },
  {
    title:'car insurance', amount:456, date: new Date(2022,3,1)
  },
  {
    title:'car insurance', amount:456, date: new Date(2022,3,1)
  }
]
  return (
    <div>
<ExpenseItem />
<ExpenseItem />
    </div>
  );
}

export default App;

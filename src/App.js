import { useState } from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
const userData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(userData);

  const addExpenseHandler = (expense) => {
    // Whenever you update state, and you depend on the previous state, you should use an alternative form of this state updating function. React schedules state updates, it doesn't perform them instantly. Therefore, if you schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot.
    setExpenses((prevState) => {

      return [expense, ...prevState];
    });
  }
  return (
    <div>
      <NewExpense
        onAddExpense={addExpenseHandler}
      />
      <Expense
        expenses={expenses}
      />
    </div>
  );
}

export default App;

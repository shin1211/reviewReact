import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = ({ onAddExpense }) => {
    const [addNewExpenses, setAddNewExpenses] = useState(false);
    const userExpenseDataHandler = (userData) => {
        const userExpenseData = {
            ...userData,
            id: Math.random().toString()
        };
        onAddExpense(userExpenseData);
    }

    const addExpensesHandler = () => {
        setAddNewExpenses((preValue) => !preValue);
    }
    return (
        <div className='new-expense'>
            {!addNewExpenses && <button onClick={addExpensesHandler}>Add New Expenses</button>}
            {addNewExpenses &&
                <ExpenseForm
                    onSaveExpenseData={userExpenseDataHandler}
                    addExpensesHandler={addExpensesHandler}
                />
            }
        </div>
    )
};

export default NewExpense;
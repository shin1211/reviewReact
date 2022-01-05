import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = ({ onAddExpense }) => {
    const userExpenseDataHandler = (userData) => {
        const userExpenseData = {
            ...userData,
            id: Math.random().toString()
        };
        onAddExpense(userExpenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm
                onSaveExpenseData={userExpenseDataHandler}
            />
        </div>
    )
};

export default NewExpense;
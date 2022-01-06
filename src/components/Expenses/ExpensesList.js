import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ filteredExpenses }) => {

    if (filteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return (
        <ul className='expenses-list'>
            {
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount} />
                ))
            }
        </ul>
    )

}

export default ExpensesList
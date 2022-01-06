import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ filteredExpenses }) => {

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount} />
        ))
    }

    return (
        <ul>

        </ul>
    )

}

export default ExpensesList
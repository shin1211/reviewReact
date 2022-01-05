import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expense.css'
function Expense({ expenses }) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear);
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter
                onCheckYear={filterChangeHandler}
                selected={filteredYear}
            />
            <ExpenseItem
                title={expenses[0].title}
                date={expenses[0].date}
                amount={expenses[0].amount}
            />
            <ExpenseItem
                title={expenses[1].title}
                date={expenses[1].date}
                amount={expenses[1].amount}
            />
            <ExpenseItem
                title={expenses[2].title}
                date={expenses[2].date}
                amount={expenses[2].amount}
            />
            <ExpenseItem
                title={expenses[3].title}
                date={expenses[3].date}
                amount={expenses[3].amount}
            />
        </Card>
    )
};

export default Expense;
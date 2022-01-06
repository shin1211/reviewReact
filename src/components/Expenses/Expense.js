import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expense.css'
function Expense({ expenses }) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // clean way

    // let expensesContent = <p>No expenses found.</p>;

    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             date={expense.date}
    //             amount={expense.amount} />
    //     ))
    // }

    return (
        <Card className='expenses'>
            <ExpensesFilter
                onCheckYear={filterChangeHandler}
                selected={filteredYear}
            />
            <ExpensesChart
                filteredExpenses={filteredExpenses}
            />
            <ExpensesList filteredExpenses={filteredExpenses} />

            {/* {
                filteredExpenses.length === 0 ? <p>No data</p> :
                    filteredExpenses.map((expense) => (
                        <ExpenseItem 
                        key={expense.id} 
                        title={expense.title} 
                        date={expense.date} 
                        amount={expense.amount} />
                    ))
            } */}

            {/* {filteredExpenses.length === 0 && <p>No data</p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount} />
                ))
            } */}

        </Card>
    )
};

export default Expense;




// import { useState } from 'react';
// import ExpenseItem from './ExpenseItem';
// import ExpensesFilter from './ExpensesFilter';
// import Card from '../UI/Card';
// import './Expense.css'
// function Expense({ expenses }) {
//     const [filteredYear, setFilteredYear] = useState('2020');
//     const [selected, setSelected] = useState([]);
//     const filterChangeHandler = (selectedYear) => {
//         setFilteredYear(selectedYear);
//         const filteredData = expenses.filter((expense) => expense.date.getFullYear().toString() === selectedYear);
//         setSelected(filteredData);
//     }
//     return (
//         <Card className='expenses'>
//             <ExpensesFilter
//                 onCheckYear={filterChangeHandler}
//                 selected={filteredYear}
//             />
//             {
//                 selected.map((expense) => (
//                     <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
//                 ))
//             }
//         </Card>
//     )
// };

// export default Expense;
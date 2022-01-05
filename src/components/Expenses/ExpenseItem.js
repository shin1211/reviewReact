import { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
function ExpenseItem({ date, title, amount }) {
    const [name, setName] = useState(title);
    function clickHandler() {
        setName('hi')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate
                date={date}
            />
            <div className='expense-item__description'>
                <h2>{name}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    )
}

export default ExpenseItem;
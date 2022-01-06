import Chart from '../Chart/Chart';
const ExpensesChart = ({ filteredExpenses }) => {
    const expensesByMonthly = [
        {
            label: 'Jan',
            value: 0
        },
        {
            label: 'Feb',
            value: 0
        },
        {
            label: 'Mar',
            value: 0
        },
        {
            label: 'Apr',
            value: 0
        },
        {
            label: 'May',
            value: 0
        },
        {
            label: 'Jun',
            value: 0
        },
        {
            label: 'Jul',
            value: 0
        },
        {
            label: 'Aug',
            value: 0
        },
        {
            label: 'Sep',
            value: 0
        },
        {
            label: 'Oct',
            value: 0
        },
        {
            label: 'Nov',
            value: 0
        },
        {
            label: 'Dec',
            value: 0
        },
    ];

    for (const expense of filteredExpenses) {
        console.log(expense.date);
        console.log(expense.date.getMonth());
        expensesByMonthly[expense.date.getMonth()].value += expense.amount;
    }
    return (
        <Chart
            expensesByMonthly={expensesByMonthly}
        />
    )
}

export default ExpensesChart;
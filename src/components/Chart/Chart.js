import ChartBar from './ChartBar'
import './Chart.css';

const Chart = ({ expensesByMonthly }) => {
    const values = expensesByMonthly.map((item) => item.value);
    const totalMaxValue = Math.max(...values);

    return (
        <div className='chart'>
            {expensesByMonthly.map((item) => (
                <ChartBar
                    key={item.label}
                    value={item.value}
                    maxValue={totalMaxValue}
                    label={item.label}
                />
            ))
            }
        </div>
    )
}

export default Chart;
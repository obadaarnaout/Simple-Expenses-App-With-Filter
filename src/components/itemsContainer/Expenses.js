import './Expenses.css';
import ExpenseItem from '../items/ExpenseItem';
import Filter from '../filter/Filter';
import Chart from '../chart/Chart';
import { useState } from 'react';

const Expenses = (props) => {
    const [year, changeYear] = useState('all');

    const filterByYear = (y) => {
        changeYear(y);
    }

    const filter_items = props.items.filter((item) => {
        if(year !== 'all'){
            return item.date.toLocaleString('en-us',{year:'numeric'}) === year;
        }
        else{
            return item;
        }
    });

    let render = <p>No items found</p>;
    if(filter_items.length > 0){
        render = filter_items.map(item => <ExpenseItem date={item.date} name={item.name}  price={item.price}  id={item.id}  key={item.id}/>);
    }
    
    return(<div className='expenses'>
                <Filter filterByYear={filterByYear}/>
                <Chart items={filter_items}/>
                {render}
            </div>)
}
export default Expenses;
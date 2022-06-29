import './Chart.css';
import Bar from './Bar';

const Chart = (props) => {
    const months = [
        {label : 'jan' , value : 0},
        {label : 'Feb' , value : 0},
        {label : 'Mar' , value : 0},
        {label : 'Apr' , value : 0},
        {label : 'May' , value : 0},
        {label : 'Jun' , value : 0},
        {label : 'Jul' , value : 0},
        {label : 'Aug' , value : 0},
        {label : 'Sep' , value : 0},
        {label : 'Oct' , value : 0},
        {label : 'Nov' , value : 0},
        {label : 'Dec' , value : 0},
    ];
    
    for (const item of props.items) {
        let item_month = item.date.toLocaleString('en-us',{month:'short'});
        months.map(month => {
            if(month.label === item_month){
                ++month.value;
            }
            return month;
        });
    }

    let barRender = <p>No data found</p>;
    barRender = months.map(month => {
        return <Bar label={month.label} value={month.value} key={month.label} maxValue={5}/> ;
    });

    return <div className='chart'>
        {barRender}
    </div>;



}

export default Chart;
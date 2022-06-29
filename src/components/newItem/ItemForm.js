import './ItemForm.css';
const ItemForm = (props) => {
    const handleForm = (e) =>{
        e.preventDefault();
        if(e.target.elements.title.value.length > 0 && e.target.elements.price.value > 0){
            props.addNewItem(e);
            e.target.title.value = '';
            e.target.date.value = '';
            e.target.price.value = '';
        }
    }
    return <form onSubmit={handleForm}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" name='title'/>
            </div>
            <div className='new-expense__control'>
                <label>Price</label>
                <input type="number" name='price'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" name='date'/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add</button>
        </div>
    </form>
}
export default ItemForm;
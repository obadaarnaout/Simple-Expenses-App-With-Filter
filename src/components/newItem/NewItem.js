import "./NewItem.css";
import ItemForm from "./ItemForm";
import { useState } from "react";
const NewItem = (props) => {
    
    const showForm = () => {
        props.showForm();
    }
    let content = <button onClick={showForm}>Add new item</button>;
    if(props.clicked === true){
        content = <ItemForm addNewItem={props.addNewItem}/>;
    }
    return(<div className="new-expense">
        {content}
    </div>);
}

export default NewItem;
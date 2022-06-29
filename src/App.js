import Expenses from "./components/itemsContainer/Expenses";
import { useState } from "react";
import NewItem from "./components/newItem/NewItem";

function App() {

  const [items, updateItems] = useState([{'id' : 0,
                                          'name' : 'Car Insurance',
                                          'price' : 300,
                                          'date' : new Date(2021,2,3)},
                                          {'id' : 1,
                                          'name' : 'Toy',
                                          'price' : 10,
                                          'date' : new Date(2021,2,2)}]);
  const [clicked,changeClick] = useState(false);
  const addNewItem = (e) => {
      let oldItems = [{'id' : items.length,
                        'name' : e.target.elements.title.value,
                        'price' : e.target.elements.price.value,
                        'date' : new Date(e.target.elements.date.value)},
                        ...items];
      updateItems(oldItems);
      changeClick(false);
  }
  const showForm = () => {
    changeClick(true);
  }
  return (
    <div>
      <NewItem addNewItem={addNewItem} showForm={showForm} clicked={clicked}/>
      <Expenses items={items}/>
    </div>
  );
}

export default App;

import {useState} from "react";
import {nanoid} from "nanoid";

import './App.css';
import Items from "./components/Items/Items";
import Order from "./components/Order/Order";

const App = () => {
    const [items, setItems] = useState([
        {name: 'Hamburger', count: 0, id: nanoid(),},
        {name: 'Coffee', count: 0, id: nanoid(),},
        {name: 'Cheeseburger', count: 0, id: nanoid(),},
        {name: 'Tea', count: 0, id: nanoid(),},
        {name: 'Fries', count: 0, id: nanoid(),},
        {name: 'Cola', count: 0, id: nanoid(),},
    ]);

    const increaseCount = id => {
        setItems(prevItems => prevItems.map(item => {
            if (item.id === id) {
                return {...item, count: item.count + 1};
            }

            return item;
        }));
    };

    const removeOrderItem = id => {
        setItems(prevItems => prevItems.map(item => {
            if (item.id === id) {
                return {...item, count: 0};
            }

            return item;
        }));
    };

    const getOrder = () => {
        return items.filter(item => item.count > 0);
    };

    return (
        <div className="App">
            <Order
                order={getOrder()}
                onRemove={removeOrderItem}
            />
            <Items
                items={items}
                onIncrease={increaseCount}
            />
        </div>
    );
};

export default App;

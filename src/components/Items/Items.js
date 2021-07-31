import React from 'react';
import Item from "../Item/item";
import './Items.css';
import {ITEMS} from "../../constants";

const Items = () => {
    return (
        <div className="ItemsWrapper">
            <fieldset>
                <legend>Add items</legend>
                <div className="Items">
                    {ITEMS.map(item => (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </fieldset>
        </div>
    );
};

export default Items;

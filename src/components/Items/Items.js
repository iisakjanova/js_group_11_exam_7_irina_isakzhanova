import React from 'react';
import Item from "../Item/item";
import './Items.css';

const Items = props => {
    return (
        <div className="ItemsWrapper">
            <fieldset>
                <legend>Add items</legend>
                <div className="Items">
                    {props.items.map(item => (
                        <Item
                            key={item.id}
                            item={item}
                            onIncrease={props.onIncrease}
                        />
                    ))}
                </div>
            </fieldset>
        </div>
    );
};

export default Items;

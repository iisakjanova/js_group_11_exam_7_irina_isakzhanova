import React from 'react';
import './OrderItem.css';

import {ITEMS} from "../../constants";

const OrderItem = props => {
    return (
        <p
            className="OrderItem"
            key={props.item.id}
        >
            <span className="OrderItemName">{props.item.name}</span>
            <span> X{props.item.count}</span>
            <span>{ITEMS[props.item.name].price} KGZ</span>
            <button
                className="BtnRemove"
                onClick={() => props.onRemove(props.item.id)}
            >
                X
            </button>
        </p>
    );
};

export default OrderItem;

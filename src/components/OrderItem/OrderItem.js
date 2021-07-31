import React from 'react';
import {ITEMS} from "../../constants";
import './OrderItem.css';

const OrderItem = props => {
    return (
        <p
            className="OrderItem"
            key={props.item.id}
        >
            <span className="OrderItemName">{props.item.name}</span>
            <span> X{props.item.count}</span>
            <span>{ITEMS[props.item.name].price} KGZ</span>
        </p>
    );
};

export default OrderItem;

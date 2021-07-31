import React from 'react';
import './Order.css';

import {ITEMS} from "../../constants";

const Order = props => {
    let message = {};

    if (props.order.length === 0) {
        message = {
            title: 'Order is empty!',
            text: 'Please add some items!',
        };
    }

    return (
        <div className="OrderWrapper">
            <fieldset>
                <legend>Order details</legend>
                <div className="Order">
                    <p>{message.title}</p>
                    <p>{message.text}</p>
                    {props.order.map(item => {
                        return (
                            <p
                                className="OrderItem"
                                key={item.id}
                            >
                                <span className="OrderItemName">{item.name}</span>
                                <span> X{item.count}</span>
                                <span>{ITEMS[item.name].price} KGZ</span>
                            </p>
                        )
                    })}
                </div>
            </fieldset>
        </div>
    );
};

export default Order;

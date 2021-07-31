import React from 'react';
import './Order.css';
import OrderItem from "../OrderItem/OrderItem";
import TotalPrice from "../TotalPrice";

import {ITEMS} from "../../constants";

const Order = props => {
    let message = {};

    if (props.order.length === 0) {
        message = {
            title: 'Order is empty!',
            text: 'Please add some items!',
        };
    }

    const getTotalPrice = () => {
        return props.items.reduce((acc, item) => {
            return acc + item.count * ITEMS[item.name].price;
        }, 0);
    };

    return (
        <div className="OrderWrapper">
            <fieldset>
                <legend>Order details</legend>
                <div className="Order">
                    <p>{message.title}</p>
                    <p>{message.text}</p>
                    {props.order.map(item => {
                        return (
                            <OrderItem
                                key={item.id}
                                item={item}
                                onRemove={props.onRemove}
                            />
                        )
                    })}
                    <TotalPrice
                        total={getTotalPrice()}
                    />
                </div>
            </fieldset>
        </div>
    );
};

export default Order;

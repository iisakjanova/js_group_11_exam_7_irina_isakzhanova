import React from 'react';
import OrderItem from "../OrderItem/OrderItem";

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
                            <OrderItem
                                key={item.id}
                                item={item}
                            />
                        )
                    })}
                </div>
            </fieldset>
        </div>
    );
};

export default Order;

import React from 'react';

const Order = () => {
    return (
        <div className="OrderWrapper">
            <fieldset>
                <legend>Order details</legend>
                <div className="Order">
                    <p>Order is empty!</p>
                    <p>Please add some Items!</p>
                </div>
            </fieldset>
        </div>
    );
};

export default Order;
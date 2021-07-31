import React from 'react';

const TotalPrice = props => {
    if (props.total <= 0) {
        return null;
    }

    return (
        <p className="TotalPrice">
            <span>Total price: </span>
            <span className="Amount">{props.total} KGZ</span>
        </p>
    );
};

export default TotalPrice;

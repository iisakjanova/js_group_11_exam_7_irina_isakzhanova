import React from 'react';
import './Item.css';

const Item = props => {
    return (
        <div className="Item">
            <div className="ItemImg" style={{
                backgroundImage: `url(${props.item.image})`,
            }}/>
            <div className="ItemInfo">
                <p className="ItemName"><b>{props.item.name}</b></p>
                <p className="ItemPrice">Price: {props.item.price} KGS</p>
            </div>
        </div>
    );
};

export default Item;

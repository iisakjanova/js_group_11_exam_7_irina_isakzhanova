import React from 'react';
import './Item.css';

import {ITEMS} from '../../constants.js'

const Item = props => {
    return (
        <div className="Item"
             onClick={() => props.onIncrease(props.item.id)}
        >
            <div className="ItemImg"
                 style={{
                    backgroundImage: `url(${ITEMS[props.item.name].image})`,
            }}/>
            <div className="ItemInfo">
                <p className="ItemName"><b>{props.item.name}</b></p>
                <p className="ItemPrice">Price: {ITEMS[props.item.name].price} KGS</p>
            </div>
        </div>
    );
};

export default Item;

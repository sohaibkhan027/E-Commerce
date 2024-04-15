// OrderTracking.js

import React from 'react';
import './OrderTracking.css';

const OrderTracking = () => {
    
    return (
        <div className="order-tracking">
            <h1>Order Tracking</h1>
            <form className="tracking-form">
                <input type="text" placeholder="Enter your order ID" />
                <button type="submit" >Track</button>
            </form>
            <div className="tracking-results">
                {/* Tracking results will be displayed here */}
            </div>
        </div>
    );
};

export default OrderTracking;

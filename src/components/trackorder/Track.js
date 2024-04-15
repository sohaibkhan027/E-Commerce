// Track.js

import React, { useState } from 'react';
import './OrderTracking.css';

const Track = () => {
    const [orderId, setOrderId] = useState('');
    const [trackingInfo, setTrackingInfo] = useState(null);

    const handleTrackOrder = (e) => {
        e.preventDefault();

        const mockTrackingInfo = {
            orderId: orderId,
            status: 'Shipped',
            estimatedDelivery: 'April 20, 2024',
            trackingNumber: 'ABC123XYZ',
            carrier: 'Example Shipping Co.'
        };

        // Set the tracking information
        setTrackingInfo(mockTrackingInfo);
    };

    return (
        <div className="track-container">
            {/* <h1>Track Your Order</h1>
            <form onSubmit={handleTrackOrder} className="track-form">
                <label htmlFor="orderId">Order ID:</label>
                <input
                    type="text"
                    id="orderId"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    required
                />
                <button type="submit">Track</button>
            </form> */}
            {trackingInfo && (
                <div className="tracking-info">
                    <h2>Tracking Information</h2>
                    <p><strong>Order ID:</strong> {trackingInfo.orderId}</p>
                    <p><strong>Status:</strong> {trackingInfo.status}</p>
                    <p><strong>Estimated Delivery:</strong> {trackingInfo.estimatedDelivery}</p>
                    <p><strong>Tracking Number:</strong> {trackingInfo.trackingNumber}</p>
                    <p><strong>Carrier:</strong> {trackingInfo.carrier}</p>
                </div>
            )}
        </div>
    );
};

export default Track;

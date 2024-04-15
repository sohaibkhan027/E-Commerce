
import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h1>Checkout</h1>
            </div>
            <div className="checkout-form">
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address"></textarea>

                    <label htmlFor="payment">Payment Method:</label>
                    <select id="payment" name="payment">
                        <option value="credit">Credit Card</option>
                        <option value="debit">Debit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>

                    <button type="submit">Submit Order</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;

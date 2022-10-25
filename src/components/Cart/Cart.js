import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveitam }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please buy at the least item!!!</p>
    }
    else if (cart.length === 1) {
        message = <p>more buy continue please...</p>



    }

    else {

        message = <div>
            <p>Thanks for buying!!</p>
            <button>Checkout</button>
        </div>
    }
    return (
        <div>
            <h1 className={cart.length === 1 ? `blue` : `white`}>Order Summary</h1>
            <p className={`bold ${cart.length === 3 ? 'green' : 'yellow'}`}>Quantity: {cart.length}</p>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveitam(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>Tumi 3 jon ke gift daw</p> : <p> tmi aro kinte  tako ok?????? </p>}
            <p>&& operator (and)</p>
            {
                cart.length === 2 && <h3>wow tumi 2ta products kineso to tmke ami 1ta gift dite chai!!</h3>
            }
            <p>|| operator (or)</p>
            {
                cart.length === 4 || <p>ekono tmr 4 ti products add hoy ni!</p>
            }
        </div >
    );
};

export default Cart;

/**
 * Conditional rendaring 
 *1. use element in a variable and then use if else set value
 * 2. ternary operator condition ? true : false 
 * 3. && operator  (if condition is true, i want to display something)
 * 4. || operator(if condition false, i want to display something )
 */
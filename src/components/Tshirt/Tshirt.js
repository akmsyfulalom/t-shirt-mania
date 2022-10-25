import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt
    return (
        <div className='t-shirt' >
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;
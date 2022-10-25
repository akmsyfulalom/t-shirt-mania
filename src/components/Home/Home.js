import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart'
import './Home.css'
import { queryAllByAttribute } from '@testing-library/react';

const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])
    const handleAddToCart = tshirt => {
        const exsist = cart.find(ts => ts._id === tshirt._id);
        if (exsist) {
            alert('already added this product')
        }
        {
            const newCart = [...cart, tshirt]
            setCart(newCart)
            // alert('successfully added')



        }
    }
    const handleRemoveitam = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remaining)

    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt.id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveitam={handleRemoveitam}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;
import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h1>Special</h1>
            <small>Gift: {house}</small>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;
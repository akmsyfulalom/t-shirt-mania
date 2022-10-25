import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h1>Friend</h1>
            <small>Gift: {house}</small>
            <button onClick={() => setHouse(house - 1)}>Discrase</button>
        </div>
    );
};

export default Friend;
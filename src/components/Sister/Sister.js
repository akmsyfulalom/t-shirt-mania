import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const [money, setMoney] = useContext(moneyContext)
    return (
        <div>
            <h1>Sister</h1>
            <small>house: {house}</small>
            <small>Money: {money}</small>
            <button onClick={() => setMoney(money + 1000)}>Add 1000TK</button>
        </div>
    );
};

export default Sister;
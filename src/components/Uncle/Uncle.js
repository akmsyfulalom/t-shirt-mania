import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    const [money, setMoney] = useContext(moneyContext)
    return (
        <div>
            <h1>Uncle </h1>
            <small>House: {house}</small>
            <small>Money: {money}</small>
            <button onClick={() => setMoney(money + 500)}>add 500TK</button>
        </div>
    );
};

export default Uncle;
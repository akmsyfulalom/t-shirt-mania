import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';

import Father from '../Father/Father';

import Uncle from '../Uncle/Uncle';
import './Grandpa.css'


export const RingContext = createContext('Matir Ring')
export const moneyContext = createContext(555);

const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const [money, setMoney] = useState(555)
    const ring = 'Daimond';
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <moneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>Grandpa</h2>
                    <section className='flex'>
                        <Father house={house} ring={ring} ></Father>
                        <Uncle house={house} ></Uncle>
                        <Aunty house={house} ></Aunty>
                    </section>
                </div>
            </moneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;
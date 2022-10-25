import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ house }) => {
    return (
        <div>
            <h1>Aunty</h1>
            <section className='flex'>
                <Cousin house={house}></Cousin>
                <Cousin house={house}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;
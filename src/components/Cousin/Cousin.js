import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({ house }) => {
    return (
        <div>
            <h1>Cousin</h1>
            <small>House: {house}</small>
            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;
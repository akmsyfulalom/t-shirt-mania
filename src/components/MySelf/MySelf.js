import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ ring, house }) => {
    return (
        <div>
            <h1> My Self</h1>
            <small>House:{house}</small>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default MySelf;
import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <h2>Oopps!</h2>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Errorpage;
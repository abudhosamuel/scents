import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Perfume Store</h1>
            <p>Explore our collection of premium perfumes.</p>
            <Link to="/perfumes">Browse Perfumes</Link>
        </div>
    );
};

export default Home;

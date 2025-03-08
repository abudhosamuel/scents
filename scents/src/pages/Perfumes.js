// src/pages/Perfumes.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Perfumes = () => {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        // Fetch perfumes from the backend or mock data
        const fetchPerfumes = async () => {
            const res = await fetch('/api/perfumes');
            const data = await res.json();
            setPerfumes(data);
        };
        fetchPerfumes();
    }, []);

    return (
        <div>
            <h1>Perfumes</h1>
            <div className="perfume-list">
                {perfumes.map((perfume) => (
                    <div key={perfume.id}>
                        <img src={perfume.image} alt={perfume.name} />
                        <h2>{perfume.name}</h2>
                        <p>{perfume.description}</p>
                        <p>£{perfume.price}</p>
                        <Link to={`/perfumes/${perfume.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Perfumes;

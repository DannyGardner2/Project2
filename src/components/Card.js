import React from 'react';
import { Link } from 'react-router-dom';

function Card(civ) {
    return (
        <div className='card-container'>
            <div>
                <p className='civ-name'>{civ.name}</p>
                <p className='civ-type'>{civ.type}</p>
                <p className='civ-expansion'>{civ.expansion}</p>
                <Link to={`/civdetails/${civ.id}`} key={civ.id}>
                <button className='info-link'>More Info</button>
                </Link>
            </div>
        </div>
    )
}

export default Card

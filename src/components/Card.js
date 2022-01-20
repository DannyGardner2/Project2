import React from 'react';

function Card(civ) {
    return (
        <div className='card-container'>
            <div>
                <p className='civ-name'>{civ.name}</p>
                <p className='civ-type'>{civ.type}</p>
                <p className='civ-expansion'>{civ.expansion}</p>
                <button className='info-link'>More Info</button>
            </div>
        </div>
    )
}

export default Card

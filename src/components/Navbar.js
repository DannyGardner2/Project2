import React from 'react';

export default function Navbar() {
    return (
        <div className='nav-container'>
            <div className='title-container'>
                <h1>Age of Empires</h1>
            </div>
            <nav className='navigation'>
                <div className='nav-item'>Civilizations</div>
                <div className='nav-item'>Units</div>
                <div className='nav-item'>Technology</div>
                <div className='nav-item'>Structures</div>
            </nav>
        </div>
    )
}

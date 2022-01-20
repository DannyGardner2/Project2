import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='nav-container'>
            <div className='title-container'>
                <Link to={'/'}>
                <h1>Age of Empires</h1>
                </Link>
            </div>
            <nav className='navigation'>
                <Link to={'/civ'}>
                <div className='nav-item'>Civilizations</div>
                
                </Link>
                <div className='nav-item'>Units</div>
                <div className='nav-item'>Technology</div>
                <div className='nav-item'>Structures</div>
            </nav>
        </div>
    )
}

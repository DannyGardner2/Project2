import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-container'>
            <div className='title-container'>
                <Link to={'/'}>
                    <h1>Age of Empires</h1>
                </Link>
            </div>
        </div>
    )
}

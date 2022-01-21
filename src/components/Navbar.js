import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className='navigation'>
            <div className='dropdown'>
                <div className='nav-item'>Civilizations</div>
                <div className='dropdown-civ'>

                {props.civs.map(civ => {
                    return (
                        <div>
                            {civ.name}
                        </div>
                    )
                })}
                </div>
            </div>

            <div className='dropdown'>
                <div className='nav-item'>Units</div>
            </div>
            
            <div className='dropdown'>
                <div className='nav-item'>Technology</div>
            </div>

            <div className='dropdown'>
                <div className='nav-item'>Structures</div>
            </div>


        </div>
    )
}


{/* </Link> */ }

{/* <Link to={'/civ'}> */ }

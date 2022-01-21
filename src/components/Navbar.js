import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (



        <ul className='nav-links'>
            <li>
                Civilizations
                <ul className='drop-menu'>
                    <li>drop1</li>
                    <li>drop1</li>
                    <li>drop1</li>

                </ul>
                
                </li>
            <li>Units</li>
            <li>Structures</li>
            <li>Technology</li>
        </ul>
        // <div className='navigation'>
        //     <div className='dropdown'>
        //         <div className='nav-item'>Civilizations</div>
        //         <div className='dropdown-civ'>

        //         {props.civs.map(civ => {
        //             return (
        //                 <div>
        //                     {civ.name}
        //                 </div>
        //             )
        //         })}
        //         </div>
        //     </div>

        //     <div className='dropdown'>
        //         <div className='nav-item'>Units</div>
        //     </div>
            
        //     <div className='dropdown'>
        //         <div className='nav-item'>Technology</div>
        //     </div>

        //     <div className='dropdown'>
        //         <div className='nav-item'>Structures</div>
        //     </div>


        // </div>
    )
}


{/* </Link> */ }

{/* <Link to={'/civ'}> */ }

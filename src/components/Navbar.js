import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        <nav>
            <div className='wrapper'>
            <Link to={'/'}><div className="logo">F2P</div></Link>
                <ul className='nav-links'>
                    <li><a>menu1</a>
                        <ul className="drop-menu">
                            <li> <Link to={'/games'}>Games</Link></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Games</a></li>
                        </ul>
                    </li>
                    <li><a href="#">menu2</a></li>
                    <li><a href="#">menu3</a></li>
                    <li><a href="#">menu4</a></li>
                </ul>
            </div>
        </nav>



    )
}


// {props.games.map(game => {
//     return (
//         <div>
//             <ul className="drop-menu">
//                 <li><a href="#">{game.title}</a></li>
//             </ul>
//         </div>
//     )
// })}

{/* </Link> */ }

{/* <Link to={'/civ'}> */ }

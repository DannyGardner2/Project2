import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        <nav>
            <div className='wrapper'>
                <Link to={'/'}><div className="logo">F2P</div></Link>
                <ul className='nav-links'>
                    <li><a>Categories</a>
                        <ul className="drop-menu">
                            <li><Link to={'/results/racing'} value="racing">Racing</Link></li>
                            <li><Link to={'/results/social'} value="social">Social</Link></li>
                            <li><Link to={'/results/sandbox'} value="social">Sandbox</Link></li>
                            <li><Link to={'/results/survival'} value="social">Survival</Link></li>
                            <li><Link to={'/results/first-person'} value="social">First-person</Link></li>
                            <li><Link to={'/results/sailing'} value="social">Sailing</Link></li>
                            <li><Link to={'/results/mmo'} value="social">Mmo</Link></li>
                            <li><Link to={'/results/sci-fi'} value="social">Sci-fi</Link></li>
                            <li><Link to={'/results/tower-defense'} value="social">Tower-defense</Link></li>
                        </ul>
                    </li>
                    <li><Link to={'/about'}><a>About</a></Link></li>
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

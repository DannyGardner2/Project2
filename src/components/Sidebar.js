import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <ul className='categories'>
            <h1>Categories</h1>
            {/* <li><a>mmorpg</a></li> */}
            {/* <li><a>shooter</a></li> */}
            {/* <li><a>strategy</a></li> */}
            {/* <li><a>moba</a></li> */}
           <li> <Link to={'/results'}><a href='#'>racing</a></Link></li>
            {/* <li><a>sports</a></li> */}
            <li><a>social</a></li>
            <li><a>sandbox</a></li>
            {/* <li><a>open-world</a></li> */}
            <li><a>survival</a></li>
            {/* <li><a>pvp</a></li> */}
            {/* <li><a>pve</a></li> */}
            {/* <li><a>pixel</a></li> */}
            {/* <li><a>voxel</a></li> */}
            {/* <li><a>zombie</a></li> */}
            {/* <li><a>turn-based</a></li> */}
            <li><a>first-person</a></li>
            {/* <li><a>third-Person</a></li> */}
            {/* <li><a>top-down</a></li> */}
            {/* <li><a>tank</a></li> */}
            {/* <li><a>space</a></li> */}
            <li><a>sailing</a></li>
            {/* <li><a>side-scroller</a></li> */}
            {/* <li><a>superhero</a></li> */}
            {/* <li><a>permadeath</a></li> */}
            {/* <li><a>card</a></li> */}
            {/* <li><a>battle-royale</a></li> */}
            <li><a>mmo</a></li>
            {/* <li><a>mmofps</a></li> */}
            {/* <li><a>mmotps</a></li> */}
            {/* <li><a>3d</a></li> */}
            {/* <li><a>2d</a></li> */}
            {/* <li><a>fantasy</a></li> */}
            <li><a>sci-fi</a></li>
            {/* <li><a>fighting</a></li> */}
            {/* <li><a>action-rpg</a></li> */}
            {/* <li><a>action</a></li> */}
            {/* <li><a>anime</a></li> */}
            {/* <li><a>military</a></li> */}
            {/* <li><a>martial-arts</a></li> */}
            {/* <li><a>flight</a></li> */}
            {/* <li><a>low-spec</a></li> */}
            <li><a>tower-defense</a></li>
            {/* <li><a>horror</a></li> */}
            {/* <li><a>mmorts</a></li> */}
        </ul>
    </div>

  )
}

export default  Sidebar
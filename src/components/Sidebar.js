import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar-container'>
            <h1>Categories</h1>
        <ul className='categories'>
            {/* <li>mmorpg</li> */}
            {/* <li>shooter</li> */}
            {/* <li>strategy</li> */}
            {/* <li>moba</li> */}
           <li> <Link to={'/results'}>racing</Link></li>
            {/* <li>sports</li> */}
            <li>social</li>
            <li>sandbox</li>
            {/* <li>open-world</li> */}
            <li>survival</li>
            {/* <li>pvp</li> */}
            {/* <li>pve</li> */}
            {/* <li>pixel</li> */}
            {/* <li>voxel</li> */}
            {/* <li>zombie</li> */}
            {/* <li>turn-based</li> */}
            <li>first-person</li>
            {/* <li>third-Person</li> */}
            {/* <li>top-down</li> */}
            {/* <li>tank</li> */}
            {/* <li>space</li> */}
            <li>sailing</li>
            {/* <li>side-scroller</li> */}
            {/* <li>superhero</li> */}
            {/* <li>permadeath</li> */}
            {/* <li>card</li> */}
            {/* <li>battle-royale</li> */}
            <li>mmo</li>
            {/* <li>mmofps</li> */}
            {/* <li>mmotps</li> */}
            {/* <li>3d</li> */}
            {/* <li>2d</li> */}
            {/* <li>fantasy</li> */}
            <li>sci-fi</li>
            {/* <li>fighting</li> */}
            {/* <li>action-rpg</li> */}
            {/* <li>action</li> */}
            {/* <li>anime</li> */}
            {/* <li>military</li> */}
            {/* <li>martial-arts</li> */}
            {/* <li>flight</li> */}
            {/* <li>low-spec</li> */}
            <li>tower-defense</li>
            {/* <li>horror</li> */}
            {/* <li>mmorts</li> */}
        </ul>
    </div>

  )
}

export default  Sidebar
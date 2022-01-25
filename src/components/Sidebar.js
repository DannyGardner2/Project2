import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <h1>Categories</h1>
      <ul className='categories'>
        <li><Link to={'/results/racing'} value="racing">Racing</Link></li>
        <li><Link to={'/results/social'} value="social">Social</Link></li>
        <li><Link to={'/results/sandbox'} value="social">Sandbox</Link></li>
        <li><Link to={'/results/survival'} value="social">Survival</Link></li>
        <li><Link to={'/results/first-person'} value="social">First-person</Link></li>
        <li><Link to={'/results/sailing'} value="social">Sailing</Link></li>
        <li><Link to={'/results/mmo'} value="social">Mmo</Link></li>
        <li><Link to={'/results/sci-fi'} value="social">Sci-fi</Link></li>
        <li><Link to={'/results/tower-defense'} value="social">Tower-defense</Link></li>
        {/* <li>mmorpg</li> */}
        {/* <li>shooter</li> */}
        {/* <li>strategy</li> */}
        {/* <li>moba</li> */}
        {/* <li>sports</li> */}
        {/* <li>open-world</li> */}
        {/* <li>pvp</li> */}
        {/* <li>pve</li> */}
        {/* <li>pixel</li> */}
        {/* <li>voxel</li> */}
        {/* <li>zombie</li> */}
        {/* <li>turn-based</li> */}
        {/* <li>third-Person</li> */}
        {/* <li>top-down</li> */}
        {/* <li>tank</li> */}
        {/* <li>space</li> */}
        {/* <li>side-scroller</li> */}
        {/* <li>superhero</li> */}
        {/* <li>permadeath</li> */}
        {/* <li>card</li> */}
        {/* <li>battle-royale</li> */}
        {/* <li>mmofps</li> */}
        {/* <li>mmotps</li> */}
        {/* <li>3d</li> */}
        {/* <li>2d</li> */}
        {/* <li>fantasy</li> */}
        {/* <li>fighting</li> */}
        {/* <li>action-rpg</li> */}
        {/* <li>action</li> */}
        {/* <li>anime</li> */}
        {/* <li>military</li> */}
        {/* <li>martial-arts</li> */}
        {/* <li>flight</li> */}
        {/* <li>low-spec</li> */}
        {/* <li>horror</li> */}
        {/* <li>mmorts</li> */}
      </ul>
    </div>

  )
}

export default Sidebar
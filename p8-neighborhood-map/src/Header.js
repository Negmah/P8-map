import React from 'react'
import './App.css';


//Stateless Functional Component
const Header = (props) => {
    return (
        <div className='header-wrapper' title='Pena Palace at night'>
            <h1 className='header-title'>Mystical Sintra</h1>
            <h4 className='header-footer'>#discoverPortugal</h4>
            {/* Code partially taken from W3Schools */}
            <span className='openbtn' onClick={props.navBar}>&#9776; open</span>
        </div>
    );
}

export default Header;
import React from 'react'
import './App.css';


//Stateless Functional Component
const Header = (props) => {
    return (
        <div className='header-wrapper' title='Pena Palace at night'>
            <div className='nav-menu'>
                {/* Code partially taken from W3Schools */}
                <div className='open-button' onClick={props.openNavbar}>&#9776;open</div>
            </div>
            <div className='header-text'>
                <h1 className='header-title'>Mystical Sintra</h1>
                <h4 className='header-footer'>#discoverPortugal</h4>    
            </div>
        </div>
    );
}

export default Header;
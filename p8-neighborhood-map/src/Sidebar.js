import React from "react";



// Stateless functional Component
const Sidebar = (props) => {
  console.log('my props',props.venues)
  return (
    //Code partially taken from W3Schools
    <nav id="navbar" className="sidebar">
      <div id='sidebar-header'>
        <img className='sidebar-icon' src='http://res.cloudinary.com/negmah/image/upload/v1535134022/pena-palace-icon.jpg' alt='Pena Palace icon'></img>
        <button className='close-button' onClick={props.closeNavbar}>x</button> {/*implicit ARIA role: 'button'*/}
        {/*<a href='javascript:void(0)' className='close-button' onClick={props.closeNavbar}>&times;</a>*/}
      </div>
      <div>
        <input className='sidebar-filter' type='text' placeholder='Search'></input> {/*implicit ARIA role: 'textbox'*/}
      </div>
      <div id='sidebar-list'>
        <ul>
          {props.venues.map((venus) => 
            <li key={venus.venue.id}><a href='#'>{venus.venue.name}</a></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
import React from "react";



// Stateless functional Component
const Sidebar = (props) => {

  return (
    //Code partially taken from W3Schools
    <nav id="navbar" className="sidebar">
      <div id='sidebar-header'>
        <img className='sidebar-icon' src='http://res.cloudinary.com/negmah/image/upload/v1535134022/pena-palace-icon.jpg' alt='Pena Palace icon'></img>
        <button className='close-button' onClick={props.closeNavbar} role='button'>x</button>
        {/*<a href='javascript:void(0)' className='close-button' onClick={props.closeNavbar}>&times;</a>*/}
      </div>
      <div>
        <input className='sidebar-filter' type='text' placeholder='Search'></input> {/*implicit ARIA role: 'textbox'*/}
      </div>
      <div id='sidebar-list'>
        <ul>
            <li><a href='#'>location 1</a></li>
            <li><a href='#'>location 2</a></li>
            <li><a href='#'>location 3</a></li>
            <li><a href='#'>location 4</a></li>
            <li><a href='#'>location 5</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
import React from "react";



// Stateless functional Component
const Sidebar = (props) => {

  return (
    //Code partially taken from W3Schools
    <nav id="navbar" className="sidenav">
      <span><a href='javascript:void(0)' className='close-button' onClick={props.closeNavbar}>&times;</a></span>
      <ul>
          <li><a href='#'>location 1</a></li>
          <li><a href='#'>location 2</a></li>
          <li><a href='#'>location 3</a></li>
          <li><a href='#'>location 4</a></li>
          <li><a href='#'>location 5</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
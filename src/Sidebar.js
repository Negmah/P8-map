import React, { Component } from "react"


class Sidebar extends Component {

  

  render() {
    //console.log('my props', this.props.venues)

    return (
      //Code partially taken from W3Schools
      <div id="navbar" className="sidenav" tabIndex='0'>
        
        <div className='nav-header'>
          
          <div className='icon-btn-wrapper'>
            <img className='sidebar-icon' src='http://res.cloudinary.com/negmah/image/upload/v1535134022/pena-palace-icon.jpg' alt='Pena Palace icon'></img>
            <button className='close-button' onClick={this.props.closeNavbar} aria-label='Close sidebar'>x</button> {/*implicit ARIA role: 'button' | aria-pressed not used; not a toggle button*/}
          </div>
          
          <div className='filter-box'>
            <input
            className='sidebar-filter'
            type='text'
            placeholder='Search'
            //value={this.props.query}
            onChange={event => this.props.updateQuery(event.target.value)}
            aria-label='Search for outdoor places in Sintra'
            /> {/*implicit ARIA role: 'textbox'*/}
          </div>

        </div>
        <div id='sidebar-list' className='locations'>
          <ul>
            {this.props.showingLocations.map((venus) =>
              <li key={venus.venue.id}
              tabIndex='0'>
              <a 
                >
                {venus.venue.name}
              </a>
              </li>
            )}
          </ul>

        </div>




      </div>





    );
   }
}

export default Sidebar;
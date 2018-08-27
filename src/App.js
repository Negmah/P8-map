/**
 * @description FEND Capstone Project (P8) : Neighborhood Map
 * @description main component
 * @author Monica Moura
 * @version 2.0
 */


import React, { Component } from 'react'
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Map from './Map'
import Footer from './Footer'
import axios from 'axios'
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'


class App extends Component {

  state = {
    venues: [],
    showingLocations: '',
    query: '',
    displayedLocation: '',
    isOpen: false
  }
        
  getVenues = () => {

    // Foursquare API Information
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
    const parameters = {
      client_id: 'GY21CT1VXNSUBLIHUETJXMKOZSVQOEGL3X32O5AHAZGABGV1',
      client_secret: 'LOTRCNP3MSSKHDCUCFKRNRHMFMATXUQ5BTZV2XA4TH4OKMDE',
      near: 'Sintra',
      section: 'outdoors',
      v: '20182507'
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
          venues: response.data.response.groups[0].items
      })
    })
    .catch(error => {
      console.log('Failed in retrieving Foursquare info: ' + error + ' Please try again later!')
    })
  }

  componentDidMount(){
    this.getVenues()
  }

  updateQuery = query => {
    this.setState({ query })
  }

  openNav()  {
    document.getElementById("navbar").style.width = "50vw";
  }

  closeNav() {
      document.getElementById("navbar").style.width = "0";
  }
  
  toggleOpen = (id) => {
      this.setState({
        displayedLocation: id,
        isOpen: true
      })
    }

  render() {
      let showingLocations

    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query, 'i'))
      showingLocations = this.state.venues.filter((venue) => match.test(venue.venue.name))
    } else {
      showingLocations = this.state.venues
    }

    

    return (
      <main>
        <div className="App">
          <Header
            openNavbar={this.openNav}
          />
          <Sidebar
            getVenues={this.getVenues}
            closeNavbar={this.closeNav}
            venues={this.state.venues}
            query={this.state.query}
            showingLocations={showingLocations}
            updateQuery={this.updateQuery}
            toggleOpen={this.toggleOpen}
          />
          <Map
            showingLocations={showingLocations}
          />
          <Footer />
        </div>
      </main>
    );
  }
}

export default App;
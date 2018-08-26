/**
 * @description FEND Capstone Project (P8) : Neighborhood Map
 * @description main component
 * @author Monica Moura
 * @version 2.0
 */


import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Map from './Map'
import Footer from './Footer'
import axios from 'axios'


class App extends Component {

  state = {
  venues : []
  }

  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
    const parameters = {
      client_id: 'GY21CT1VXNSUBLIHUETJXMKOZSVQOEGL3X32O5AHAZGABGV1',
      client_secret: 'LOTRCNP3MSSKHDCUCFKRNRHMFMATXUQ5BTZV2XA4TH4OKMDE',
      near: 'Sintra',
      section: 'topPicks',
      v: '20182507'
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
          venues: response.data.response.groups[0].items
      })
    })
    .catch(error => {
      console.log('ERROR!! ' + error)
    })
  }

  componentDidMount(){
    this.getVenues()
  }
  openNav()  {
    document.getElementById("navbar").style.width = "50vw";
  }

  closeNav() {
      document.getElementById("navbar").style.width = "0";
  }
  
  render() {
    return (
      <main>
        <div className="App">
          <Header openNavbar={this.openNav} />
          <Sidebar closeNavbar={this.closeNav} venues={this.state.venues} />
          <Map venues={this.state.venues}/>
          <Footer />
        </div>
      </main>
    );
  }
}

export default App;
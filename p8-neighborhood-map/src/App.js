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




class App extends Component {


  openNav()  {
    document.getElementById("navbar").style.width = "30vw";
  }

  closeNav() {
      document.getElementById("navbar").style.width = "0";
  }
  
  render() {
    return (
      <main>
        <div className="App">
          <Header openNavbar={this.openNav} />
          <Sidebar closeNavbar={this.closeNav} />
          <Map />
        </div>
      </main>
    );
  }
}

export default App;

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



class App extends Component {


  openNav()  {
    document.getElementById("navbar").style.width = "250px";
  }

  closeNav() {
      document.getElementById("navbar").style.width = "0";
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar openNavbar={this.openNav} closeNavbar={this.closeNav} />
      </div>
    );
  }
}

export default App;

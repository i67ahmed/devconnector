import React, { Component } from 'react';
import './App.css';
import Footer from './components/layouts/footer';
import Landing from './components/layouts/landing';
import Navbar from './components/layouts/navbar';

class App extends Component {

  render (){
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <Footer />
      </div>
    );
  }
  
}

export default App;

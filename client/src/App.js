import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Footer from './components/layouts/footer';
import Landing from './components/layouts/landing';
import Navbar from './components/layouts/navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from './store';


class App extends Component {

  render (){
    return (
      <Provider store = {store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path = "/" component = {Landing}/>
            <Route exact path = "/register" component = {Register}/>
            <Route exact path = "/login" component={Login}/>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
  
}

export default App;

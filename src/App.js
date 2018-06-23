import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';

import SearchInput from './components/searchInput';
import ContactList from './components/contactList';
import PersonDetails from './components/personDetails';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className='App-container'>
          <div className='App-search-section'>
          <SearchInput/>
          <ContactList/>
          </div>
          <div className='App-output'>
          <PersonDetails/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state=>({
  clients: [],
  chosenClient: {}
})
const mapActionsToProps = {
  
}


export default connect(mapStateToProps, mapActionsToProps)(App);

import React, { Component } from 'react';
import './App.css';
import SearchInput from './components/searchInput';
import ContactList from './components/contactList';
import PersonDetails from './components/personDetails';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className='App-container'>
          <div className='App-search-section'>
          <SearchInput />
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


export default App;

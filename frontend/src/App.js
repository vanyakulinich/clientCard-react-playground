import React, { Component } from 'react';
import './App.css';
import SearchInput from './components/searchInput';
import ContactList from './components/contactList';
import PersonDetails from './components/personDetails';
import { Segment, Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App" >
          <Segment className="App-contact">
            <SearchInput />
            <Header textalign='center' as='h2'>CLIENTS:</Header>
            <ContactList className="App-list"/>
          </Segment>
          <PersonDetails/>
      </div>
    );
  }
}


export default App;

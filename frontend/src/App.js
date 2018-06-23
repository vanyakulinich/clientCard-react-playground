import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';

import SearchInput from './components/searchInput';
import ContactList from './components/contactList';
import PersonDetails from './components/personDetails';

import {searchClient} from './actions/clientSearch'

class App extends Component {
  constructor(props) {
    super(props)
  }

  disp=(event)=>{
  this.props.findClient(event.target.value)
  }

  render() {
    console.log(this.props)
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
        <input onChange = {this.disp}/>
        {this.props.clients}
      </div>
    );
  }
}

const mapStateToProps = state=>({
  clients: state.clients,
})
const mapActionsToProps = {
  findClient: searchClient
}


export default connect(mapStateToProps, mapActionsToProps)(App);

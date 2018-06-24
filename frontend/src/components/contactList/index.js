import React, { Component } from 'react'
import { List, Image, Header } from 'semantic-ui-react'
import './index.css'
import getClients from '../../request'
import chosenClient from '../../actions/chosenClient'


import {connect} from 'react-redux';

class ContactList extends Component {
   
    componentDidMount() {
        getClients() 
    }

    chosenClientByUser = (event)=>{
        let item = event.target.parentNode;
        if(!item.hasAttribute('number')) return
        let itemId = +item.getAttribute('number')
        let chosen = this.props.clients.find(el=> {return el.id === itemId})
        this.props.chosenClientByUser(chosen)
    }

    searchMod = (value, clients)=>{
        const result = clients.filter(el=>{
            for(let key in el) {
                if(key === 'avatar' || key === 'id') continue
                if(el[key].toLowerCase().indexOf(value)>=0) {
                    el.foundName =key
                    el.foundValue = el[key]
                    return true
                }
            }
            return result
        })
        return listItems(result, true)
    }

    render() {
        const {value, clients} = this.props
        const display = (value) ? this.searchMod(value, clients) : listItems(clients)
        return ( 
            < List divided items = {display } 
            className='list'
            onClick = {this.chosenClientByUser}/> 
        )
    }
}
const mapStateToProps = state=>({
    clients: state.clients,
    value: state.value
  });
const mapActionsToProps = {
    chosenClientByUser: chosenClient
}

function listItems(array, search) {
    
    return array.map((el, i)=>{
        return <List.Item className='listItem' key={i} number = {el.id}>
                    {(search) ? 
                    <Header as='h5' 
                    color='blue'>Found {el.foundName} : {el.foundValue}</Header> : null}
                    <Image avatar floated='left' src={el.avatar} size='mini'/>
                    <Header as='h3'>{el.firstName} {el.lastName}</Header>
                    <Header color='grey' as='h5'>{el.title}</Header>
                </List.Item> 
    })
}

export default connect(mapStateToProps, mapActionsToProps)(ContactList);
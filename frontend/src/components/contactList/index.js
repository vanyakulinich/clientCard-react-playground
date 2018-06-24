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

    // shouldComponentUpdate(nextProps){
    //     return nextProps.clients.length !== this.props.clients.length
    // }

    chosenClientByUser = (event)=>{
        let item = event.target.parentNode;
        if(!item.hasAttribute('number')) return
        let itemId = +item.getAttribute('number')
        let chosen = this.props.clients.find(el=> {return el.id === itemId})
        this.props.chosenClientByUser(chosen)
    }

    searchMod = ()=>{
        const {value, clients} = this.props;
        if(!value) return false
        const result = clients.map((el)=>{
            return Object.entries(el)
        })

        console.log(result)
        return value
    }

    showClients=()=>{
        const { clients } = this.props;
        const listItems = clients.map((el, i)=>{
            return <List.Item className='listItem' key={i} number = {el.id}>
                    <Image avatar floated='left' src={el.general.avatar} size='mini'/>
                    <Header as='h3'>{el.general.firstName} {el.general.lastName}</Header>
                    <Header color='grey' as='h5'>{el.job.title}</Header>
                  </List.Item> 
        })
        return listItems
    }

    render() {
        const display = this.searchMod() || this.showClients()
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


export default connect(mapStateToProps, mapActionsToProps)(ContactList);
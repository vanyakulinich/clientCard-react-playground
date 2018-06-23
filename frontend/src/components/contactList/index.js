import React, { Component } from 'react'
import { List, Image, Header } from 'semantic-ui-react'
import './index.css'
import getClients from '../../request'


import {connect} from 'react-redux';

class ContactList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    componentWillMount() {
        getClients()
    }

    render() {
        const { clients } = this.props;
        console.log(clients)
        const listItems = clients.map((el, i)=>{
            return <List.Item className='listItem' key={i}>
                    <Image avatar floated='left' src={el.general.avatar} size='mini'/>
                    <Header as='h3'>{el.general.firstName}{el.general.lastName}</Header>
                    <Header color='grey' as='h5'>{el.job.title}</Header>
                  </List.Item> 
        })

        return ( 
        < List divided items = {listItems } className='list'/> 
    )
    }
}
const mapStateToProps = state=>({
    clients: state.clients,
  })
//   const mapActionsToProps = {
//     findClient: searchClient
//   }


export default connect(mapStateToProps)(ContactList);
import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import getClients from '../../request'


import {connect} from 'react-redux';

class ContactList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         persons: []
    //     }
    // }

    componentWillMount() {
        getClients()
    }

    render() {
        const { clients } = this.props
        console.log(clients)
        return ( < List items = {clients.map((el)=> el.address.city)}/> )
    }
}
const mapStateToProps = state=>({
    clients: state.clients,
  })
//   const mapActionsToProps = {
//     findClient: searchClient
//   }


export default connect(mapStateToProps)(ContactList);
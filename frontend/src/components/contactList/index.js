import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import getClients from '../../request'

class ContactList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: []
        }
    }

    componentWillMount() {
        this.setState({
            persons: getClients()
        })
        console.log(this.state.persons)

    }

    render() {
        const { persons } = this.state
        // console.log(persons)
        return ( < List /> )
    }
}


export default ContactList
import React, { Component } from 'react'
import { List } from 'semantic-ui-react'


class ContactList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: []
        }
    }



    render() {
        const { persons } = this.state
        return ( <List items = { persons }/>
        )
    }
}


export default ContactList
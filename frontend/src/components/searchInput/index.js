import React, { Component } from 'react'
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import chosenClient from '../../actions/chosenClient'
import search from '../../actions/search'

class SearchInput extends Component {

    clickedInput = () => {
        const { chosen } = this.props;
        (chosen) && this.props.clickedInput(null)
    }

    userSearch = (e) => {
        this.props.userSearch(e.target.value.toLowerCase())
    }

    render() {
        return ( < Input placeholder = 'Search...'
            onClick = { this.clickedInput } // input click clears the client info field
            onChange = { this.userSearch }
            />
        )
    }
}

const mapStateToProps = state => ({
    chosen: state.chosen,
    value: state.value
})

const mapActionsToProps = {
    clickedInput: chosenClient,
    userSearch: search
}

export default connect(mapStateToProps, mapActionsToProps)(SearchInput);
import React, {Component} from 'react'
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import chosenClient from '../../actions/chosenClient'

class SearchInput extends Component {

    clickedInput=()=>{
        const{chosen} = this.props;
        (chosen) && this.props.clickedInput(null)
    }

    search =()=>{

    }


    render() {
        return(
            < Input
                placeholder = 'Search...' 
                onClick = {this.clickedInput}
                onChange = {this.search}/>
        )
    }
}

const mapStateToProps=state=>({
    chosen: state.chosen
})

const mapActionsToProps = {
    clickedInput: chosenClient
}

export default connect(mapStateToProps, mapActionsToProps)(SearchInput);
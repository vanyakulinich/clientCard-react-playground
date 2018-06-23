import React, {Component} from 'react'
import { Segment, Image, Header, Container } from 'semantic-ui-react'
import './index.css'
import {connect} from 'react-redux';

class PersonDetails extends Component {

  selectedClient = ()=>{
    if (!this.props.chosen) return false;
    const {general, job, contact, address} = this.props.chosen
    return <div>
            <Image src={general.avatar} size='small' circular/>
            <Header as='h2'>{general.firstName} {general.lastName}</Header>
           </div>
      
            
    
    
  }

  render(){
    const client = this.selectedClient()
    return (
      <Segment className="person">
        {client}
      </Segment>
    )
  }
}
  
const mapStateToProps = state=>({
  chosen: state.chosen,
});

export default connect(mapStateToProps)(PersonDetails);
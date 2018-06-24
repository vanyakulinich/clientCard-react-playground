import React, {Component} from 'react'
import { Segment, Image, Header, Container, Icon, List } from 'semantic-ui-react'
import './index.css'
import {connect} from 'react-redux';

class PersonDetails extends Component {

  selectedClient = ()=>{
    if (!this.props.chosen) return false;
    const {general, job, contact, address} = this.props.chosen
    return <Segment className="person">
            <Image src={general.avatar} size='medium' circular floated='right'/>
            <Header as='h1'>{general.firstName} {general.lastName}</Header>
            <Header color='grey' as ='h2'>{job.title}</Header>
            <Header color='grey' as ='h3'>{job.company} Company</Header>
            <Container className='contacts'>
              <Icon name='phone' size='large'/>{contact.phone}
            </Container>
            <Container className='contacts'>
              <Icon name='mail' size='large'/>{contact.email}
            </Container>
            <Container className='contacts'>
              <Icon name='address card' size='large' className='address'/>
              <List items = {[
                address.street+' street', 
                address.city + ' city', 
                address.country,
                'Zip Code: '+address.zipCode]}/>
            </Container>
          </Segment>
  }

  render(){
    const client = this.selectedClient()
    return (
      <div className='wrapper'>
        {client}
      </div>
    )
  }
}
  
const mapStateToProps = state=>({
  chosen: state.chosen,
});

export default connect(mapStateToProps)(PersonDetails);
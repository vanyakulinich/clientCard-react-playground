import React, {Component} from 'react'
import { Segment, Image, Header, Container, Icon, List } from 'semantic-ui-react'
import './index.css'
import {connect} from 'react-redux';

class PersonDetails extends Component {

  selectedClient = ()=>{
    if (!this.props.chosen) return false;
    const {chosen} = this.props
    return <Segment className="person">
            <Image src={chosen.avatar} size='medium' circular floated='right'/>
            <Header as='h1'>{chosen.firstName} {chosen.lastName}</Header>
            <Header color='grey' as ='h2'>{chosen.title}</Header>
            <Header color='grey' as ='h3'>{chosen.company} Company</Header>
            <Container className='contacts'>
              <Icon name='phone' size='large'/>{chosen.phone}
            </Container>
            <Container className='contacts'>
              <Icon name='mail' size='large'/>{chosen.email}
            </Container>
            <Container className='contacts'>
              <Icon name='address card' size='large' className='address'/>
              <List items = {[
                chosen.street+' street', 
                chosen.city + ' city', 
                chosen.country,
                'Zip Code: '+chosen.zipCode]}/>
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
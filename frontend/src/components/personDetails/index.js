import React, {Component} from 'react'
import { Segment, Image, Header, Container, Icon, List } from 'semantic-ui-react'
import './index.css'
import {connect} from 'react-redux';

class PersonDetails extends Component {

  selectedClient = ()=>{
    if (!this.props.chosen) return false;
    const {chosen} = this.props
    return <Segment className="person">
              <div className='avatar'>
                <Image src={chosen.avatar} size='medium' circular/>
              </div>
            <div className='info'>
              <Header as='h1'>{chosen.firstName} {chosen.lastName}</Header>
              <Header color='grey' as ='h2'>{chosen.title}</Header>
              <Header color='grey' as ='h3'>{chosen.company} Company</Header>
              <Container>
                <Icon name='phone' size='large'/>{chosen.phone}
              </Container>
              <Container>
                <Icon name='mail' size='large'/>{chosen.email}
              </Container>
              <Container className='address'>
                <Icon name='address card' size='large'/>
                <List items = {[
                  chosen.street+' street', 
                  chosen.city + ' city', 
                  chosen.country,
                  'Zip Code: '+chosen.zipCode]}/>
              </Container>
            </div>
          </Segment>
  }

  render(){
    console.log('render personSetails')
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
import React from 'react';
import './App.css';
import firebase from './firebase/config'
import {setContacts} from './actions/Action'
import Form from './components/ContactForm'
import Contacts from './components/Contacts'
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

class App extends React.Component{
  constructor(){
    super();
    this.state = {contacts:[]};
  }
  componentDidMount = () => {
    firebase.firestore().collection("contacts").onSnapshot ((document) =>{
      let contacts = [];
      document.forEach ((doc) => {
        contacts.push(doc.data())
      })
      this.props.setContacts(contacts)
    })
  }

  render() {
    return <>
    <Container>
      <Row>
        <Col md={4}><Form /></Col>
        <Col md={8}><Contacts /></Col>
      </Row>
    </Container>
      
      
    </>
  }
}
const mapDispatchToProps = {
  setContacts:setContacts
}
export default connect(null,mapDispatchToProps) (App);
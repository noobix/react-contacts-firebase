import React from "react";
import {v4 as uuid} from 'uuid'
import {Form, Button} from 'react-bootstrap'
import firebase from '../firebase/config'

class form extends React.Component{
constructor(){
    super()
    this.state={name: "", phoneNumber: "", location: ""}
}
    handleNameChange = (e) =>{
        this.setState({name: e.target.value})
    }
    handlePhoneChange = (e) =>{
        this.setState({phoneNumber: e.target.value})
    }
    handleLocationChange = (e) =>{
        this.setState({location: e.target.value})
    }
    handleSubmit = async(e) =>{
        e.preventDefault()
       try {
        let newContact={id: uuid(),name: this.state.name, phoneNumber: this.state.phoneNumber, location:this.state.location}
        firebase.firestore().collection("contacts").doc(newContact.id).set(newContact)
        this.setState({name: "", phoneNumber: "", location: ""})
       }catch(e) {
           console.log(e)
       }
    }
render(){
    return(<React.Fragment>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" 
                value={this.state.name} onChange={this.handleNameChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" 
                value={this.state.phoneNumber} onChange={this.handlePhoneChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Location" 
                value={this.state.location} onChange={this.handleLocationChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </React.Fragment>)
    }
}

export default form
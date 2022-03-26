import React from 'react'
import {Button, Modal, Card, Col} from 'react-bootstrap'
import firebase from '../firebase/config'

class editDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.contact.id, name: this.props.contact.name, 
            phoneNumber: this.props.contact.phoneNumber, 
            location: this.props.contact.location, isShowing: false
        }
    }
    
    handleEdit = async() => {
        try {
            let editContact = {name: this.state.name, phoneNumber: this.state.phoneNumber,
            location: this.state.location}
            this.setState({isShowing: false})
            firebase.firestore().collection("contacts").doc(this.props.contact.id).update(editContact)
        }catch(e) {
            console.log(e)
        }
    }
    handleDelete = async() => {
        try{
            firebase.firestore().collection("contacts").doc(this.props.contact.id).delete()
        }catch(e) {
            console.log(e)
        }
    }
    render() {
        return (<div>
            <Col md={3} className='m-3'>
                <Card style={{ width: '16rem' }}>
                <Card.Img variant="top"/>
                <Card.Body>
                    <Card.Title>Contact Details</Card.Title>
                    <Card.Text>
                        Name: {this.state.name}<br/>
                        Phone Number: {this.state.phoneNumber}<br/>
                        Location: {this.state.location}<br/>
                    </Card.Text>
                    <Button onClick={()=>{this.setState({isShowing: true})}}>Edit</Button>
                    <Button variant='danger' onClick={()=> {this.handleDelete()}}>Delete</Button>
                </Card.Body>
                </Card>
            </Col>
            <Modal show={this.state.isShowing} onHide= {() => {this.setState({isShowing: false})}}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>
            <input type='text' placeholder='Name' value={this.state.name} 
                onChange={(e) => {this.setState({name: e.target.value})}}/>
                <input type='text' placeholder='Phone Number' value={this.state.phoneNumber} 
                onChange={(e)=> this.setState({phoneNumber: e.target.value})}/>
                <input type='text' placeholder='Location' value={this.state.location} 
                onChange={(e) => this.setState({location: e.target.value})}/>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => this.setState({isShowing: false})}>Close</Button>
                <Button variant="primary" onClick={() => {this.handleEdit()}}>Save changes</Button>
            </Modal.Footer>
            </Modal>
        </div>)
    }
}
export default editDelete
import React from 'react'
import EditDelete from './EditDelete'
import {connect} from 'react-redux'

class contactList extends React.Component{
render(){

  //console.log(this.props.contacts)

   return(<>
   <h4>Contact List</h4>
   <div className='d-flex flex-wrap'>
     {this.props.contacts.map((contact, index) => {
       return <EditDelete key={`${index} - ${contact.name}`} contact= {contact} />
     })}
   </div>
   </>)
 }
}
const sendDataAsProps= (state) => {
  return {state: state, contacts: state.contacts}
}
export default connect(sendDataAsProps) (contactList)
import {contacts} from './list'
import React, { Component } from 'react'
import Contact from './Contact.js'
import './contacts.css'

class Contacts extends Component {
  constructor(props) {
  super(props)
  this.state = {
    users: contacts,
  }
}

  handleSearchChange = (e) => {
    const { value } = e.target;
    
    if (!value.trim()) {
      return this.setState({ users: contacts })
    }
    
    const filteredUsers = this.state.users.filter((el) =>
      (`${el.firstName} ${el.lastName}`).toLowerCase().includes(value.toLowerCase()))
       this.setState({ users: filteredUsers })
  }

  render() {
    return (
    <div>
      <div className="image-container">
        <input className="input" placeholder='search...' onChange={ this.handleSearchChange } />
        <div className="card-wrapper">
          {this.state.users.map((el) => 
          <h1 className='text'> <Contact key={`key is: ${el.phone}`} {...el} /> </h1>
          )}
        
        </div>
      </div>
    </div>
    )
  }
}

  export default Contacts

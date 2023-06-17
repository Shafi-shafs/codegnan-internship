import React from 'react';
import { Component } from 'react';
import '../components/Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import '../components/Contact.css'



class Contact extends Component {

  constructor() {
    super()
    this.state = {
      fullName: '',
      location: '',
      mobile: '',
      mail:'',
      map:''
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changeLocation = this.changeLocation.bind(this)
    this.changeMobileNumber = this.changeMobileNumber.bind(this)
    this.changeYourMail= this.changeYourMail.bind(this)
    this.changePinGoogleLocation=this.changePinGoogleLocation.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeFullName(event) {

    this.setState({
      fullName: event.target.value
    })
  }

  changeLocation(event) {

    this.setState({
      location: event.target.value
    })
  }

  changeMobileNumber(event) {

    this.setState({
      mobile: event.target.value
    })
  }

  changeYourMail(event) {

    this.setState({
      mail: event.target.value
    })
  }

  changePinGoogleLocation(event) {

    this.setState({
      map: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault()

    const contact = {
      fullName: this.state.fullName,
      location: this.state.location,
      mobile: this.state.mobile,
      mail:this.state.mail,
      map:this.state.map
    }

    axios.post('http://localhost:4000/app/contact', contact)
      .then(Response => console.log(Response.data))


    this.setState({
      fullName: '',
      location: '',
      mobile: '',
      mail:'',
      map:''
    })

  }

  

  render() {

    return (

      <div className='main'>

        <div className="contactus">
          <h1 className=''>Contact US</h1>
          <div className="continer ">
            <div className="form-div">
              <form onSubmit={this.onSubmit}>
                <input type='text'
                  placeholder='FullName'
                  onChange={this.changeFullName}
                  value={this.state.fullName}
                  className='form-control form-group'
                />

                <input type='text'
                  placeholder='Location'
                  onChange={this.changeLocation}
                  value={this.state.location}
                  className='form-control form-group'
                />

                <input type='number'
                  placeholder='MobileNumber'
                  onChange={this.changeMobileNumber}
                  value={this.state.mobile}
                  className='form-control form-group'
                />

                <input type='email'
                  placeholder='YourMail'
                  onChange={this.changeYourMail}
                  value={this.state.mail}
                  className='form-control form-group'
                />

                <input type='text'
                  placeholder='PinGoogleLocation'
                  onChange={this.changePinGoogleLocation}
                  value={this.state.map}
                  className='form-control form-group'
                />

                <input type='submit' className='btn btn-block' value='Submit' />

              </form>
            </div>
          </div>
        </div>

      </div>


    )
  }
}

export default Contact;


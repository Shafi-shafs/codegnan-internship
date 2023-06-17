import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './login.css'

function login() {

    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://riversidefoods.org/wp-content/uploads/food-rescue.png" className="img-fluid" alt="Sample" />
                </MDBCol>

                <MDBCol col='4' md='6' className='log'>
                    
                    <h1> <span>Admin </span>Login </h1>

                    <div className='items'>
                        
                        <MDBInput wrapperClass='in' label='Email address' id='f' type='email' size="lg" />
                        <MDBInput wrapperClass=' in' label='Password' id='formC' type='password' size="lg" />

                        <div className="d-flex justify-content-between in">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn href="./Admin" className="mb-0 px-5 in" size='lg'>Login</MDBBtn>
                        </div>

                    </div>

                </MDBCol>

            </MDBRow>



        </MDBContainer>
    );
}

export default login;
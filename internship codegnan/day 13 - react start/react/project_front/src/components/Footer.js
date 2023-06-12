import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'rgb(11, 170, 11)' }}>
      <section  className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ backgroundColor: 'rgb(11, 170, 11)' }}>
        <div  className='me-5 d-none d-lg-block' style={{ backgroundColor: 'rgb(11, 170, 11)' }}>
          <span style={{ backgroundColor: 'rgb(11, 170, 11)' }}>Get connected with us on social networks:</span>
        </div>

        <div style={{ backgroundColor: 'rgb(11, 170, 11)' }}>
          <a style={{ backgroundColor: 'rgb(11, 170, 11)' }} href='gmail.com' className='me-4'>
            <MDBIcon style={{ backgroundColor: 'rgb(11, 170, 11)' }} fab icon="facebook-f" />
          </a>
          <a href='gmail.com' className='me-4'>
            <MDBIcon style={{ backgroundColor: 'rgb(11, 170, 11)' }} fab icon="twitter" />
          </a>
          <a href='gmail.com' className='me-4'>
            <MDBIcon style={{ backgroundColor: 'rgb(11, 170, 11)' }} fab icon="google" />
          </a>
          <a href='gmail.com' className='me-4 '>
            <MDBIcon style={{ backgroundColor: 'rgb(11, 170, 11)' }} fab icon="instagram" />
          </a>
          <a href='gmail.com' className='me-4 '>
            <MDBIcon style={{ backgroundColor: 'rgb(11, 170, 11)' }} fab icon="linkedin" />
          </a>
          <a href='gmail.com' className='me-4 '>
            <MDBIcon style={{ backgroundColor: 'rgb(11, 170, 11)' }} fab icon="github" />
          </a>
        </div>
      </section>
      <MDBContainer className='p-4 pb-0' style={{ backgroundColor: 'rgb(11, 170, 11)' }}>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: 'rgb(11, 170, 11)' }}>
            <span className='me-3'>Join With us!</span>
            <MDBBtn type='button' outline color="rgb(11, 170, 11)" rounded>
              Join!
            </MDBBtn>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgb(11, 170, 11)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Savefood.com
        </a>
      </div>
    </MDBFooter>
  );
}


export default Footer;
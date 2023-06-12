import React from "react";
import {
  MDBCol,
  MDBContainer,
  // MDBIcon,
  MDBRow,
  // MDBTypography,
} from "mdb-react-ui-kit";

function About() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Save Food Save People</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            We started this service becouse of the stop the food wastage and feed the those people who are hunger.
            we take access food from funcation halls and marriges and deliver to oldage home and arfanages... 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </MDBCol>
      </MDBRow>

      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Our Team members work in save food</h3>          
        </MDBCol>
      </MDBRow>
      
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              alt="ima"
              src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/3/31/w900X450/BeFunky-collage_1.jpg"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">saikrishna</h5>
          <h6 className="text-primary mb-3">Manager</h6>
          
          {/* <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            
          </MDBTypography> */}
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt="ima"
            />
          </div>
          <h5 className="mb-3">Nikil</h5>
          <h6 className="text-primary mb-3">service</h6>          
          
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              alt="ima"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              
            />
          </div>
          <h5 className="mb-3">vani sri</h5>
          <h6 className="text-primary mb-3">Marketing Specialist</h6>          
          
        </MDBCol>

        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              alt="ima"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              
            />
          </div>
          <h5 className="mb-3">John</h5>
          <h6 className="text-primary mb-3">Marketing</h6>          
          
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              alt="ima"
              src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/3/31/w900X450/BeFunky-collage_1.jpg"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              
            />
          </div>
          <h5 className="mb-3">suhmitha</h5>
          <h6 className="text-primary mb-3">Specialist</h6>          
          
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              alt="ima"
              src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/3/31/w900X450/BeFunky-collage_1.jpg"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              
            />
          </div>
          <h5 className="mb-3">ravi kan</h5>
          <h6 className="text-primary mb-3">food deliver</h6>          
          
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default About

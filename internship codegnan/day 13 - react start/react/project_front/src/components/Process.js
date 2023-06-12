import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import '../components/Process.css'



import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  // MDBIcon,
} from "mdb-react-ui-kit";


function Process() {
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "" }}>
      <div className="main-timeline-2">
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src= {require('../img/contact.jpg')}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-0">Contact us</h4>
              
              <p className="mb-0">
                THe People who want to donate food register in our site our team member Contact you
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
            <MDBCardImage
              src= {require('../img/verifi.jpg')}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-0">Verification</h4>
              
              <p className="mb-0">
              Verify the details and location of the   voluptatem sequi
                nesciunt.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src="https://th.bing.com/th/id/OIP.HjWYdIMMuPMpd_19yq1Y1wHaFW?pid=ImgDet&rs=1"
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-0">Collect Food</h4>
              
              <p className="mb-0">
                Our team members are reach your location and take food to deliver 
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
            <MDBCardImage
              src="https://th.bing.com/th/id/OIP.sehwQ0yey3UIdvr_5cSugQHaFj?pid=ImgDet&rs=1"
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-0">Donate Food</h4>              
              <p className="mb-0">
                Out team donate uality food to poor People, oldage home and arphanages.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src="https://kgalleryhotel.com/wp-content/uploads/2019/11/animal-feeding-1.jpg"
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-0">Damaged Food</h4>
              
              <p className="mb-0">
                Damaged Food/Frits/Veggies Feed food to animals.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
  );
}
export default Process

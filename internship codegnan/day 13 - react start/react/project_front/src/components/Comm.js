
import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <MDBContainer>
        <h1 className="mt-5">Feedbacks From Orphanages</h1>
        <Row>
          <Col>
            <div className="video mt-5">
              <iframe
                src="https://www.youtube.com/embed/25gCGcxKHL8"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </Col>

          <Col>
            <div className="video mt-5">
              <iframe
                src="https://www.youtube.com/embed/25gCGcxKHL8"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </Col>

          <Col>
            <div className="video mt-5">
              <iframe
                src="https://www.youtube.com/embed/25gCGcxKHL8"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </MDBContainer>

      <MDBContainer>
        <h1 className="mt-5">Feedbacks From Oldage Homes</h1>
        <Row>
          <Col>
            <div className="video mt-5">
              <iframe
                src="https://www.youtube.com/embed/U98FB9f6vbY"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </Col>

          <Col>
            <div className="video mt-5">
              <iframe
                src="https://www.youtube.com/embed/U98FB9f6vbY"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </Col>

          <Col>
            <div className="video mt-5">
              <iframe
                src="https://www.youtube.com/embed/U98FB9f6vbY"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>

      </MDBContainer>

      <MDBContainer>
        <h1 className="mt-5">Feedbacks From Animal Rescue Centers</h1>
        <Row>
          <Col>
            <div className="video mt-5">
              <iframe
                src="https://www.youtube.com/embed/XpXESUaeCrU"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </Col>

          <Col>
            <div className="video mt-5">
              <iframe
                src="https://www.youtube.com/embed/XpXESUaeCrU"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </Col>

          <Col>
            <div className="video mt-5">
              <iframe
                src="https://www.youtube.com/embed/XpXESUaeCrU"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>

      </MDBContainer> <br/> <br/>
    </div> 

  );
}
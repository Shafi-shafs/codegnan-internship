import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';


function Home() {
  return (

    <div>

      <Carousel variant="dark" className="banner">
      
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={require('../img/banner11.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>            
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../img/banner1.jpg')}
            alt="Second slide"
          />
          <Carousel.Caption>            
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={require('../img/banner111.jpeg')}
            alt="First slide"
          />
          <Carousel.Caption>            
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../img/banner.jpg')}
            alt="Third slide"
          />
          <Carousel.Caption>
            
            <p> </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='body'>

        <h1>Save Food- Feed Poor People's</h1> <br />

        <Row>

        <Card className='card' style={{ width: '25rem'}} >
          <Card.Img variant="top" src={require('../img/love_save food3.jpg')} />
        </Card>

        <Card className='card' style={{ width: '25rem' }}> 
          <Card.Img variant="top" src={require('../img/love_save food.jpg')} />
        </Card>

        <Card className='card' style={{ width: '25rem' }}>
          <Card.Img variant="top" src={require('../img/love_save food2.jpg')} />
        </Card>
        
        </Row>        

      </div> <br/> <br/>


      <div className='body'>

        <h1>Donate Waste Food - Feed the Animals</h1> <br />

        <Row>

        <Card className='cards' style={{ width: '25rem'}} >
          <Card.Img variant="top" src={require('../img/save2.jpg')} />
        </Card>

        <Card className='cards' style={{ width: '25rem' }}> 
          <Card.Img variant="top" src={require('../img/save1.png')} />
        </Card>

        <Card className='cards' style={{ width: '25rem' }}> 
          <Card.Img variant="top" src={require('../img/save3.jpg')} />
        </Card>
        
              
        
        </Row>        

      </div>   <br/><br/><br/><br/>

      

    </div> 
  );
}

// export default DarkVariantExample;



export default Home  

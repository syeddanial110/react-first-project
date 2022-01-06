import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import img1 from "../assets/images/cover1.jpg";
import img2 from "../assets/images/cover2.jpg";
import img3 from "../assets/images/cover3.jpg";
import CustomTitle from "../components/CustomTitle";
import "../styles/screens/homeStyle.css"

const Home = () => {
  return (
    <>
      <CustomTitle title="Home" />

      {/* Carusel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Carosel end */}

<Row>
    <Col className="colmd" md={6}>Hi col-md-6</Col>
    <Col className="colmd" md={3}>This col-md-3</Col>
    <Col className="colmd" md={3}>This is col-md-3</Col>
</Row>



    </>
  );
};

export default Home;

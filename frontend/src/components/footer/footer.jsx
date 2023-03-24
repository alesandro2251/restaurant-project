import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={6} md={4}>
            <h5>Our Restaurant</h5>
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>(123) 456-7890</p>
          </Col>
          <Col sm={6} md={4}>
            <h5>Hours of Operation</h5>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
          </Col>
          <Col md={4}>
            <h5>Connect with Us</h5>
            <p>Follow us on social media for updates and special promotions:</p>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import * as React from 'react';
import Container from 'react-bootstrap/Container';
import { StaticImage } from 'gatsby-plugin-image';
import { Col, Row } from 'react-bootstrap';

const Footer = ({ children, bannerTitle, contactUsButtonVisible }) => {
  return (
    <Row id='footer' className={`justify-content-center py-3 bg-secondary`}>
      <Col>
        <section>
          <Container>
            <Row className='justify-content-center align-items-center'>
              <Col xs='12' md='10' lg='8'>
                <Row xs='5' md='5' lg='6' className='justify-content-end'>
                  <Col>
                    <StaticImage
                      src='../images/Im_Registered_Mark_10013.jpg'
                      alt="I'm Registered Mark, 10013"
                      layout='constrained'
                      placeholder='blurred'
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Col>
    </Row>
  );
};

export default Footer;

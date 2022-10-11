import * as React from 'react';
import { titleText, bannerColor } from './banner.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Banner = ({ title, subtitle, contactUsButtonVisible }) => {
  let bannerText;

  if (subtitle) {
    bannerText = (
      <Col xs='12' md='10' lg='8' className={titleText}>
        <h1 className='display-1'>{title}</h1>
        <h2 className='display-6'>{subtitle}</h2>
      </Col>
    );
  } else {
    bannerText = (
      <Col xs='12' md='10' lg='8' className={titleText}>
        <h1 className='display-1'>{title}</h1>
      </Col>
    );
  }

  return (
    <Row className={bannerColor + ' p-3'}>
      <Col>
        <section id='home'>
          <Container>
            <Row className='justify-content-center align-items-center pt-5'>
              {bannerText}
            </Row>
            {contactUsButtonVisible ? (
              <Row className='justify-content-center pb-5'>
                <Col xs='auto'>
                  <Button href='#book' variant='primary'>
                    Book now
                  </Button>
                </Col>
              </Row>
            ) : null}
          </Container>
        </section>
      </Col>
    </Row>
  );
};

export default Banner;

import * as React from 'react';
import { bannerColor } from './banner.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { StaticImage } from 'gatsby-plugin-image';
import ContactNowButtons from './button/contactNowButtons';

const Banner = ({ title, contactUsButtonVisible, id }) => {
  let bannerText;

  if (title) {
    bannerText = (
      <Col xs='12' md='10' lg='8'>
        <h1 className='display-1'>{title}</h1>
      </Col>
    );

    return (
      <section id={id}>
        <div style={{ display: 'grid' }} className='row'>
          <StaticImage
            style={{
              gridArea: '1/1',
            }}
            layout='fullWidth'
            alt=''
            src='../images/banner-no-text.png'
            formats={['auto']}
          />
          <div
            style={{
              gridArea: '1/1', // By using the same grid area for both, they are stacked on top of each other
              position: 'relative',
              display: 'grid',
            }}
          >
            <Row
              id={id}
              className={`justify-content-center align-items-center`}
            >
              <Col>
                <Container>
                  <Row className='justify-content-center align-items-center'>
                    {bannerText}
                  </Row>
                </Container>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id='home'>
        <Row
          className={
            bannerColor + ' p-3 justify-content-center align-items-center'
          }
        >
          <Col className='px-4' xs='12' md='8' lg='8'>
            <h1 className='display-2'>
              Clacton Osteopathy & Physiotherapy Clinic
            </h1>
          </Col>
          <Col xs='8' md='4' lg='4'>
            <StaticImage
              src='../images/New-Final-Logo.png'
              alt='Clacton osteopathy and physiotherapy clinic'
              layout='constrained'
              placeholder='blurred'
            />
          </Col>
        </Row>
        {contactUsButtonVisible ? (
          <Row className='justify-content-center pt-3 pb-5 bg-white'>
            <Col xs='auto'>
              <ContactNowButtons />
            </Col>
          </Row>
        ) : null}
      </section>
    );
  }
};

export default Banner;

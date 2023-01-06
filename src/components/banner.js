import * as React from 'react';
import { bannerColor } from './banner.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BookNowButton from './button/booknow';
import { StaticImage } from 'gatsby-plugin-image';

const Banner = ({ title, contactUsButtonVisible }) => {
  let bannerText;

  if (title) {
    bannerText = (
      <Col xs='12' md='10' lg='8'>
        <h1 className='display-1'>{title}</h1>
      </Col>
    );

    return (
      <section id='home'>
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
              id={title}
              className={`justify-content-center align-items-center`}
            >
              <Col>
                <Container>
                  <Row className='justify-content-center align-items-center'>
                    <Col xs='12' md='10' lg='8'>
                      {bannerText}
                    </Col>
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
        <Row className={bannerColor + ' pt-5'}>
          <StaticImage
            src='../images/banner.jpg'
            alt='Clacton osteopathy and physiotherapy clinic'
            layout='constrained'
            placeholder='blurred'
          />
          {contactUsButtonVisible ? (
            <Row className='justify-content-center pt-2 pb-3'>
              <Col xs='auto'>
                <BookNowButton />
              </Col>
            </Row>
          ) : null}
        </Row>
      </section>
    );
  }
};

export default Banner;

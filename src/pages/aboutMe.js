import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Service from '../components/service';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutMePage = () => {
  return (
    <Service bannerTitle='About Me' id='about-me' bgcolor='bg-white'>
      <Row className='gy-5'>
        <Col xs='12' lg='6'>
          <p class='lead'>
            <i>
              An experienced professional in aiding mobility and relieving
              muscoskeletal pain
            </i>
          </p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col xs='12' lg='6'>
          <StaticImage
            src='../images/face.jpg'
            alt='face'
            layout='constrained'
            placeholder='blurred'
          ></StaticImage>
        </Col>
      </Row>
    </Service>
  );
};

export default AboutMePage;

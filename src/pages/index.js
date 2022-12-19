import * as React from 'react';
import Section from '../components/section';
import TitleRow from '../components/titleRow';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <div>
      <Layout
        bannerTitle='Clacton Osteopathy & Physiotherapy Clinic'
        bannerSubTitle='Lead Osteopath Jamie Acres'
        contactUsButtonVisible
      >
        <Section id='services' bgcolor='bg-light'>
          <TitleRow text='Services' />
          <Row xs='2' md='3'>
            <Col className='my-3'>
              <Link to='/services/sciatica'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='sciatica'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Sciatica</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className='my-3'>
              <Link to='/services/backpain'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='back pain'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Back Pain & Neck Pain</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className='my-3'>
              <Link to='/services/arthritis'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='arthritis'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Arthritis</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className='my-3'>
              <Link to='/services/shoulderpain'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='shoulder pain'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Shoulder Pain</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className='my-3'>
              <Link to='/services/trappednerve'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='trapped nerves'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Trapped Nerves</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className='my-3'>
              <Link to='/services/injuryrehab'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='injury rehabilitation'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Injury Rehabilitation</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row className='my-3'>
            <p>
              We are able to help and treat a much wider variety of problems
              than above. If you are not sure if we can help you with your
              problem, please call or contact us and we can advise you before
              making a booking.
            </p>
          </Row>
        </Section>

        <Section id='location' bgcolor='bg-white'>
          <TitleRow text='Find Us' />
          <Row className='gy-5'>
            <Col xs='12' lg='6'>
              <StaticImage
                src='../images/building.jpg'
                alt='map'
                layout='constrained'
                placeholder='blurred'
              />
            </Col>
            <Col xs='12' lg='6'>
              <Row className='pb-3'>
                <Col>
                  <a href='https://www.google.com/maps/place/Duncan+Court,+22+Pallister+Rd,+Clacton-on-Sea+CO15+1PG/@51.7886192,1.1538294,17z/data=!3m1!4b1!4m5!3m4!1s0x47d96ccc0704389f:0x1fad504667380c74!8m2!3d51.7886192!4d1.1560181'>
                    <StaticImage
                      src='../images/map.png'
                      alt='map'
                      layout='constrained'
                      placeholder='blurred'
                    />
                  </a>
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col xs='2'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size='3x' />
                </Col>
                <Col xs='10'>
                  <a href='https://www.google.com/maps/place/Duncan+Court,+22+Pallister+Rd,+Clacton-on-Sea+CO15+1PG/@51.7886192,1.1538294,17z/data=!3m1!4b1!4m5!3m4!1s0x47d96ccc0704389f:0x1fad504667380c74!8m2!3d51.7886192!4d1.1560181'>
                    22 Pallister Road, Clacton-on-Sea, CO15 1PG
                  </a>
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col xs='2'>
                  <FontAwesomeIcon icon={faPhone} size='3x' />
                </Col>
                <Col xs='10'>
                  <a href='tel:+07922448380'>07922 448 380</a>
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col xs='2'>
                  <FontAwesomeIcon icon={faEnvelope} size='3x' />
                </Col>
                <Col>
                  <a href='mailto:anemailaddress@gmail.com'>
                    anemailaddress@gmail.com
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
      </Layout>
    </div>
  );
};

export default IndexPage;

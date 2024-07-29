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
import ContactWidget from '../components/contactWidget';
import HorizontalRule from '../components/horizontalRule';
import { SEO } from '../components/seo';

const IndexPage = () => {
  return (
    <div>
      <Layout contactUsButtonVisible>
        <HorizontalRule />
        <Section id='services' bgcolor='bg-white'>
          <TitleRow text='Services' />
          {serviceBoxes}
          <Row className='my-3'>
            <p>
              We are able to help and treat a much wider variety of problems
              than above. If you are not sure if we can help you with your
              problem, please call or contact us and we can advise you before
              making a booking.
            </p>
          </Row>
        </Section>
        <HorizontalRule />
        <Section id='location' bgcolor='bg-white'>
          <TitleRow text='Find Us' />
          <Row className='gy-5'>
            <Col xs='12' lg='6'>
              <StaticImage
                src='../images/building_Nov2023.jpg'
                alt='Picture of the exterior of Clacton Osteopathy & Physiotherapy clinic, with the clinic name displayed on the sign outside.'
                layout='constrained'
                placeholder='blurred'
              />
            </Col>
            <Col xs='12' lg='6'>
              <Row className='pb-3'>
                <Col>
                  <a
                    href='https://goo.gl/maps/iFbQrcgqxB2egYab6?coh=178571&entry=tt'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <StaticImage
                      src='../images/Google-Maps-COP-Clinic-Location.png'
                      alt='Google Maps screenshot showing the location of Clacton Osteopathy & Physiotherapy clinic, click the image to view on Google Maps.'
                      layout='constrained'
                      placeholder='blurred'
                    />
                  </a>
                </Col>
              </Row>
              <ContactWidget
                widgetIcon={<FontAwesomeIcon icon={faMapMarkerAlt} size='3x' />}
                widgetText='22 Pallister Road, Clacton-on-Sea, CO15 1PG'
                widgetUrl='https://www.google.com/maps/place/Duncan+Court,+22+Pallister+Rd,+Clacton-on-Sea+CO15+1PG/@51.7886192,1.1538294,17z/data=!3m1!4b1!4m5!3m4!1s0x47d96ccc0704389f:0x1fad504667380c74!8m2!3d51.7886192!4d1.1560181'
                newTab={true}
              />
              <ContactWidget
                widgetIcon={<FontAwesomeIcon icon={faPhone} size='3x' />}
                widgetText='01255 781388'
                widgetUrl='tel:01255781388'
                newTab={false}
              />
              <ContactWidget
                widgetIcon={<FontAwesomeIcon icon={faEnvelope} size='3x' />}
                widgetText='contact@cop-clinic.co.uk'
                widgetUrl='mailto:contact@cop-clinic.co.uk'
                newTab={false}
              />
            </Col>
          </Row>
        </Section>
      </Layout>
    </div>
  );
};

const serviceBoxes = (
  <Row xs='2' md='3'>
    <Col className='my-3'>
      <Link to='/services/sciatica'>
        <Card className='text-center'>
          <StaticImage
            src='../images/services/sciatica-1.jpeg'
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
      <Link to='/services/back-pain'>
        <Card className='text-center'>
          <StaticImage
            src='../images/services/back-pain-1.jpeg'
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
            src='../images/services/arthritis-1.jpeg'
            alt='arthritis'
            layout='constrained'
            placeholder='blurred'
          />
          <Card.Body>
            <Card.Text>Arthritic Pain</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
    <Col className='my-3'>
      <Link to='/services/shoulder-pain'>
        <Card className='text-center'>
          <StaticImage
            src='../images/services/shoulder-pain-1.jpeg'
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
      <Link to='/services/trapped-nerve'>
        <Card className='text-center'>
          <StaticImage
            src='../images/services/trapped-nerve-1.jpeg'
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
      <Link to='/services/injury-rehab'>
        <Card className='text-center'>
          <StaticImage
            src='../images/services/injury-rehab-1.jpeg'
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
    <Col className='my-3'>
      <Link to='/services/massage'>
        <Card className='text-center'>
          <StaticImage
            src='../images/services/massage-therapy-1.jpeg'
            alt='Clacton massage at COP clinic'
            layout='constrained'
            placeholder='blurred'
          />
          <Card.Body>
            <Card.Text>Massage Therapy</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  </Row>
);

export default IndexPage;

export const Head = () => {
  return (
    <SEO description='Visit Clacton Osteopathy & Physiotherapy for personalised treatments. Our experts use advanced techniques to relieve pain, restore function, and enhance wellness. Schedule an appointment for effective care.' />
  );
};

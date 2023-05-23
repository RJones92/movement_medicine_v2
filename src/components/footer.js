import * as React from 'react';
import Container from 'react-bootstrap/Container';
import { StaticImage } from 'gatsby-plugin-image';
import { Col, Row } from 'react-bootstrap';
import privacyPolicy from '../static/COPC_Privacy_Notice.pdf';
import Socials from './socials/socials';
import { footer } from './footer.module.css';

const Footer = () => {
  return (
    <Row id='footer' className={`justify-content-center py-3 bg-secondary`}>
      <Col>
        <section>
          <Container className={footer}>
            <Row className='justify-content-center align-items-center'>
              <Col xs='12' md='10' lg='8'>
                <Row className='justify-content-between'>
                  <Col xs='3'>
                    <Row>
                      <p>
                        <a
                          href={privacyPolicy}
                          target='_blank'
                          rel='noreferrer'
                          style={{ color: 'inherit' }}
                        >
                          Privacy policy (PDF)
                        </a>
                      </p>
                    </Row>
                    <Row>
                      <Socials />
                    </Row>
                  </Col>
                  <Col xs='6'>
                    <p class='text-center'>
                      Clacton Osteopathy & Physiotherapy Clinic,
                      <br />
                      22 Pallister Road, Clacton, CO15 1PG
                      <br />
                      contact@cop-clinic.co.uk
                      <br />
                      01255 781388
                      <br />
                    </p>
                  </Col>
                  <Col xs='3' lg='2'>
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

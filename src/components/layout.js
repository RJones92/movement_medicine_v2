import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavigationBar from './navbar';
import Banner from './banner';
import Section from './section';
import { StaticImage } from 'gatsby-plugin-image';
import { Col, Row } from 'react-bootstrap';

const Layout = ({
  children,
  bannerTitle,
  bannerSubTitle,
  contactUsButtonVisible,
}) => {
  return (
    <div>
      <NavigationBar />
      <Container fluid>
        <Banner
          title={bannerTitle}
          subtitle={bannerSubTitle}
          contactUsButtonVisible={contactUsButtonVisible}
        />
        {children}
        <Section id='footer' bgcolor='bg-secondary'>
          <Row xs='2' md='3'>
            <Col className='my-3'>
              <StaticImage
                src='../images/Im_Registered_Mark_10013.jpg'
                alt="I'm Registered Mark, 10013"
                layout='constrained'
                placeholder='blurred'
              />
            </Col>
          </Row>
        </Section>
      </Container>
    </div>
  );
};

export default Layout;

import * as React from 'react';
import Layout from './layout';
import Section from './section';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactNowButtons from './button/contactNowButtons';

const Service = ({ id, bgcolor, bannerTitle, children }) => {
  const bannerId = id + `-banner`;
  const contentsId = id + '-contents';
  return (
    <div id={id}>
      <Layout bannerTitle={bannerTitle} id={bannerId}>
        <Section id={contentsId} bgcolor={bgcolor}>
          {children}
          <Row className='justify-content-center pt-3'>
            <Col xs='auto'>
              <ContactNowButtons />
              <div>
                {/* To make the iframe work with ReactJS, needed to:
              1. frameborder -> frameBorder
              2. style had to be an object
              3. add a title (react requirement) */}
                {/* TODO probably have to fiddle with the height/width */}
                <iframe
                  src='https://bookings.rushcliff.com/?system=445087'
                  allow='payment'
                  sandbox='allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation allow-top-navigation-by-user-activation allow-storage-access-by-user-activation'
                  frameBorder='0'
                  style={{ height: '100%', width: '100%' }}
                  title='Booking System'
                ></iframe>
              </div>
            </Col>
          </Row>
        </Section>
      </Layout>
    </div>
  );
};

export default Service;

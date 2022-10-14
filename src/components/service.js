import * as React from 'react';
import BookNowButton from './button/booknow';
import Layout from './layout';
import Section from './section';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Service = ({ id, bgcolor, bannerTitle, children }) => {
  return (
    <div>
      <Layout bannerTitle={bannerTitle}>
        <Section id={id} bgcolor={bgcolor}>
          {children}
          <Row className='justify-content-center pt-3'>
            <Col xs='auto'>
              <BookNowButton />
            </Col>
          </Row>
        </Section>
      </Layout>
    </div>
  );
};

export default Service;

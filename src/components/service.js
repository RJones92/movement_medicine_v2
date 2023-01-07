import * as React from 'react';
import BookNowButton from './button/booknow';
import Layout from './layout';
import Section from './section';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
              <BookNowButton />
            </Col>
          </Row>
        </Section>
      </Layout>
    </div>
  );
};

export default Service;

import * as React from 'react';
import Layout from './layout';
import Section from './section';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StaticImage } from 'gatsby-plugin-image';
import HorizontalRule from '../components/horizontalRule';
import ContactNowButtons from './button/contactNowButtons';

const Service_v2 = ({
  id,
  bgcolor,
  bannerTitle,
  accordion,
  staticImage,
  notice, // a prop for displaying e.g. vouchers at the top of the service page
  children,
}) => {
  const bannerId = id + `-banner`;
  const contentsId = id + '-contents';

  let image = staticImage ? (
    staticImage
  ) : (
    <StaticImage
      src='../images/backache-1620045.jpg'
      alt='sciatica'
      layout='constrained'
      placeholder='blurred'
    />
  );

  return (
    <div id={id}>
      <Layout bannerTitle={bannerTitle} id={bannerId}>
        <Section id={contentsId} bgcolor={bgcolor}>
          {notice}
          <Row className='justify-content-center'>
            <Col md='4' className='pb-3'>
              {image}
            </Col>
            <Col>
              <Row>{children}</Row>
              <Row className='justify-content-center py-3'>
                <Col xs='auto'>
                  <ContactNowButtons />
                </Col>
              </Row>
            </Col>
          </Row>
          <HorizontalRule />
          <Row className='pt-3'>{accordion}</Row>
          <Row className='justify-content-center pt-3'>
            <Col xs='auto'>
              <ContactNowButtons />
            </Col>
          </Row>
        </Section>
      </Layout>
    </div>
  );
};

export default Service_v2;

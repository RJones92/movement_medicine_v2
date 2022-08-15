import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Section = ({ id, bgcolor, children }) => {
  return (
    <Row id={id} className={`justify-content-center py-5 ${bgcolor}`}>
      <Col>
        <section>
          <Container>
            <Row className='justify-content-center align-items-center'>
              <Col xs='12' md='10' lg='8'>
                {children}
              </Col>
            </Row>
          </Container>
        </section>
      </Col>
    </Row>
  );
};

export default Section;

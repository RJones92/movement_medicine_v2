import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TitleRow({ text }) {
  return (
    <Row className='justify-content-center align-items-center'>
      <Col xs='auto'>
        <h2 className='mt-3 mb-5'>{text}</h2>
      </Col>
    </Row>
  );
}

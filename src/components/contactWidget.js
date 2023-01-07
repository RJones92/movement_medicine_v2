import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactWidget = ({ widgetIcon, widgetText, widgetUrl }) => {
  return (
    <Row className='pb-3 align-items-center'>
      <Col xs='2'>{widgetIcon}</Col>
      <Col xs='10'>
        {widgetUrl ? <a href={widgetUrl}>{widgetText}</a> : { widgetText }}
      </Col>
    </Row>
  );
};

export default ContactWidget;

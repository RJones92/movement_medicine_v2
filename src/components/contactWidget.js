import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactWidget = ({ widgetIcon, widgetText, widgetUrl, newTab }) => {
  let textEl;
  if (newTab) {
    textEl = (
      <a href={widgetUrl} target='_blank' rel='noreferrer'>
        {widgetText}
      </a>
    );
  } else {
    textEl = <a href={widgetUrl}>{widgetText}</a>;
  }

  return (
    <Row className='pb-3 align-items-center'>
      <Col xs='2'>{widgetIcon}</Col>
      <Col xs='10'>{textEl}</Col>
    </Row>
  );
};

export default ContactWidget;

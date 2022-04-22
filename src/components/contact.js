import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';

export default function Contact() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContactDetail">
            <Form.Label>Contact detail</Form.Label>
            <Form.Control required type="text" placeholder="Enter phone number or email address" />
            <Form.Text muted>Please provide your preferred contact details</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control required as="textarea" rows="4" placeholder="Enter message" />
            <Form.Text muted>Send us your details and/or preferable booking time and we'll get back to you</Form.Text>
        </Form.Group>
        
        <Row className="justify-content-md-center">
            <Col xs="auto">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Col>
        </Row>

    </Form>
  )
}

import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
    const [serverState, setServerState] = useState({submitting: false, status: null});
    const [form, setForm] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    const handleServerResponse = (ok, msg, form) => {
        setServerState({ submitting: false, status: { ok, msg } });
        if (ok) {
            form.reset();
        }
    };

    const handleOnSubmit = e => {
        console.log(e);
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: process.env.GATSBY_CONTACT_FORM_ENDPONT,
            data: new FormData(form)
        })
        .then(r => {
            handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
            console.log(r);
            handleServerResponse(false, r.response.data.error, form);
        });
    };

    return (
        <Form onSubmit={handleOnSubmit} method="POST">
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    name="name" 
                    type="text"
                    placeholder="Enter name"
                    onChange={ e => setField("name", e.target.value) }/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContactDetail">
                <Form.Label>Contact detail</Form.Label>
                <Form.Control
                    name="contact-detail"
                    required
                    type="text"
                    placeholder="Enter phone number or email address"
                    onChange={ e => setField("contact-detail", e.target.value) }/>
                <Form.Text muted>Please provide your preferred contact details</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    name="message"
                    required
                    as="textarea"
                    rows="4"
                    placeholder="Enter message"
                    onChange={ e => setField("message", e.target.value) }/>
                <Form.Text muted>Send us your details and/or preferable booking time and we'll get back to you</Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    );
};

export default ContactForm ; 

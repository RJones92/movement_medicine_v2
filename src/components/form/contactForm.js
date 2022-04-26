import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SuccessBanner from './successBanner';
import FailBanner from './failBanner';

const cannotBeBlank = "Cannot be blank";
const successMessage = "Message submitted successfully!"
const failMessage = "There was a problem submitting your message, please try again."

const ContactForm = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        });
        removeErrors(field);
    };

    const findFormErrors = () => {
        const { name, contactDetail, message } = form;
        const newErrors = {};
        if ( !contactDetail || contactDetail === '' ) {
            newErrors.contactDetail = cannotBeBlank;
        };
        if ( !message || message === '' ) {
            newErrors.message = cannotBeBlank;
        };
        return newErrors;
    };

    const removeErrors = (field) => {
        if ( !!errors[field] ) {
            setErrors({
                ...errors,
                [field]: null
            });
        };
    }

    const handleServerResponse = (isOk, form) => {
        if (isOk) {
            form.reset();
            setSubmitSuccess(true);
            setSubmitError(false);
        }
        if (!isOk) {
            setSubmitSuccess(false);
            setSubmitError(true);
        };
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const newErrors = findFormErrors();
        if ( Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            const finalForm = e.target;
            axios({
                method: "post",
                url: process.env.GATSBY_CONTACT_FORM_ENDPONT,
                data: new FormData(finalForm)
            })
            .then(r => {
                handleServerResponse(true, finalForm);
            })
            .catch(r => {
                console.log(r);
                console.log(r.response.data.error);
                handleServerResponse(false, finalForm);
            });
        }
    };

    return (
        <div>
            { submitSuccess && <SuccessBanner message={successMessage} /> }
            { submitError && <FailBanner message={failMessage} /> }
            
            <Form noValidate onSubmit={handleOnSubmit} method="POST">
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        name="name" 
                        type="text"
                        placeholder="Enter name"
                        onChange={ e => setField("name", e.target.value) }
                        isInvalid={ !!errors.name }/>
                    <Form.Control.Feedback type='invalid'>
                        { errors.name }
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContactDetail">
                    <Form.Label>Contact detail</Form.Label>
                    <Form.Control
                        name="contactDetail"
                        required
                        type="text"
                        placeholder="Enter phone number or email address"
                        onChange={ e => setField("contactDetail", e.target.value) }
                        isInvalid={ !!errors.contactDetail } />
                    <Form.Control.Feedback type='invalid'>
                        { errors.contactDetail }
                    </Form.Control.Feedback>
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
                        onChange={ e => setField("message", e.target.value) }
                        isInvalid={ !!errors.message }/>
                    <Form.Control.Feedback type='invalid'>
                        { errors.message }
                    </Form.Control.Feedback>
                    <Form.Text muted>Send us your details and/or preferable booking time and we'll get back to you</Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default ContactForm ; 

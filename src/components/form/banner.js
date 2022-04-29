import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';


const Banner = ({message, success, error}) => {
    const [show, setShow] = useState(true);
    let variant = "success";
    if (success) {
        variant = "success";
    } else if (error) {
        variant = "danger";
    };

    return (
        <Alert
            dismissible
            show={show}
            variant={variant}
            onClose={() => setShow(false)} >
            <p className="mb-0" >{ message }</p>
        </Alert>
    )

};

export default Banner; 

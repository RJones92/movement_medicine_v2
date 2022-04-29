import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TitleRow({text}) {
  return (
    <Row className="justify-content-center align-items-center">
        <Col xs="auto">
            <h1 className="mb-5">{text}</h1>
        </Col>
    </Row>
    )
}

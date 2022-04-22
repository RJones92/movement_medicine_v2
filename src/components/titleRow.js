import React from 'react'
import { title } from "./titleRow.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TitleRow({text}) {
  return (
    <Row className="justify-content-center align-items-center">
        <Col xs="auto">
            <h1 className={`${title} mb-5`}>{text}</h1>
        </Col>
    </Row>
    )
}

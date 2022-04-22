import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

export default function ServiceRow({service1, service2}) {
  return (
    <Row className="my-sm-0 my-md-3">
        <Col xs="12" md="6">
            <Row className="my-sm-3 my-md-0">
                <Col xs="2">
                    <FontAwesomeIcon icon={faCircleCheck} size="2x" />
                </Col>
                <Col xs="10">
                    <p>{service1}</p>
                </Col>
            </Row>
        </Col>
        <Col xs="12" md="6" >
            <Row className="my-sm-3 my-md-0">
                <Col xs="2">
                    <FontAwesomeIcon icon={faCircleCheck} size="2x" />
                </Col>
                <Col xs="10">
                    <p>{service2}</p>
                </Col>
            </Row>
        </Col>
    </Row>
  )
}

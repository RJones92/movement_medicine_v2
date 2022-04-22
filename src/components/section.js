import * as React from "react";
import { section } from "./section.module.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

const Section = ({ id, bgcolor, children}) => {
    return (
        <Row className={`justify-content-center py-5 ${bgcolor} ${section}`}>
            <Col>
                <section id={id}>
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            <Col md="8">
                                {children}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Col>
        </Row>
    )
}

export default Section;
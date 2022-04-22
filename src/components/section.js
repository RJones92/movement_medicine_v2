import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Section = ({ id, bgcolor, children}) => {
    return (
        <Row className={"justify-content-center p-3 " + bgcolor}>
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
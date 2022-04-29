import * as React from "react";
import { titleText, bannerColor } from "./banner.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Banner = () => {
    return (
        <Row className={bannerColor + " p-3"}>
            <Col>
                <section id="home">
                    <Container>
                        <Row className="justify-content-center align-items-center pt-5">
                            <Col xs="12" md="10" lg="8" className={titleText}>
                                <h1 className="display-1">Pallister Road Clinic</h1>
                                <h2 className="display-6">Lead Osteopath Jamie Acres</h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center pb-5">
                            <Col xs="auto">
                                <Button href="#book" variant="primary">Contact us</Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Col>
        </Row>
    )
}

export default Banner;
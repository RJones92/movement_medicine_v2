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
                        {/* <Row className="justify-content-md-center"> */}
                        <Row className="justify-content-center align-items-center pt-5">
                            <Col md="8" className={titleText}>
                                <h1 className="display-1">Pallister Road Clinic</h1>
                                <h2 className="display-6">Lead Osteopath Jamie Acres</h2>
                                {/* <p>TODO: insert background color or image. insert Jamie's pic?</p>
                                <p>https://www.gatsbyjs.com/plugins/gatsby-background-image/</p> */}
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center pb-5">
                            <Col md="auto">
                                <Button href="#contact" variant="primary">Book now</Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Col>
        </Row>
    )
}

export default Banner;
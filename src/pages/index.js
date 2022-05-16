import * as React from "react";
import NavigationBar from "../components/navbar";
import Section from "../components/section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Banner from "../components/banner";
import TitleRow from "../components/titleRow";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/form/contactForm";

const IndexPage = () => {
  return (
    <div>
      <NavigationBar />
      <Container fluid>
        <Banner />
        <Section id="about" bgcolor="bg-white">
          <TitleRow text="About" />
          <Row>
            <Col>
              <p>
                My training and experience enables me to accurately diagnose and
                provide the best possible treatment for your problem.
              </p>
              <p>
                Your treatment will be complemented through my experience as a
                qualified fitness instructor, enhancing the treatment through
                the most appropriate rehabilitation and self care exercises to
                increase your time to recovery.
              </p>
              <p>
                &#10004; Qualified osteopath
                <br />
                &#10004; Qualified fitness instructor
                <br />
                &#10004; Fully insured
                <br />
                &#10004; Registered with Governing Body for Osteopaths
                <br />
              </p>
            </Col>
          </Row>
        </Section>

        <Section id="services" bgcolor="bg-light">
          <TitleRow text="Services" />
          <Row xs="2" md="3">
            <Col className="my-3">
              <a href="404">
                <Card className="text-center">
                  <StaticImage
                    src="../images/backache-1620045.jpg"
                    alt="backache"
                    layout="constrained"
                    placeholder="blurred"
                  />
                  <Card.Body>
                    <Card.Text>Back Pain</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col className="my-3">
              <a href="404">
                <Card className="text-center">
                  <StaticImage
                    src="../images/backache-1620045.jpg"
                    alt="backache"
                    layout="constrained"
                    placeholder="blurred"
                  />
                  <Card.Body>
                    <Card.Text>Leg Pain</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col className="my-3">
              <a href="404">
                <Card className="text-center">
                  <StaticImage
                    src="../images/backache-1620045.jpg"
                    alt="backache"
                    layout="constrained"
                    placeholder="blurred"
                  />
                  <Card.Body>
                    <Card.Text>Knee Pain</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col className="my-3">
              <a href="404">
                <Card className="text-center">
                  <StaticImage
                    src="../images/backache-1620045.jpg"
                    alt="backache"
                    layout="constrained"
                    placeholder="blurred"
                  />
                  <Card.Body>
                    <Card.Text>x Pain</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col className="my-3">
              <a href="404">
                <Card className="text-center">
                  <StaticImage
                    src="../images/backache-1620045.jpg"
                    alt="backache"
                    layout="constrained"
                    placeholder="blurred"
                  />
                  <Card.Body>
                    <Card.Text>y Pain</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col className="my-3">
              <a href="404">
                <Card className="text-center">
                  <StaticImage
                    src="../images/backache-1620045.jpg"
                    alt="backache"
                    layout="constrained"
                    placeholder="blurred"
                  />
                  <Card.Body>
                    <Card.Text>z Pain</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </Section>

        <Section id="location" bgcolor="bg-white">
          <TitleRow text="Find Us" />
          <Row className="gy-5">
            <Col xs="12" lg="6">
              <a href="https://www.google.com/maps/place/Duncan+Court,+22+Pallister+Rd,+Clacton-on-Sea+CO15+1PG/@51.7886192,1.1538294,17z/data=!3m1!4b1!4m5!3m4!1s0x47d96ccc0704389f:0x1fad504667380c74!8m2!3d51.7886192!4d1.1560181">
                <StaticImage
                  src="../images/map.png"
                  alt="map"
                  layout="constrained"
                  placeholder="blurred"
                />
              </a>
            </Col>
            <Col xs="12" lg="6">
              <Row className="pb-5">
                <Col xs="2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
                </Col>
                <Col xs="10">22 Pallister Road, Clacton-on-Sea, CO15 1PG</Col>
              </Row>
              <Row className="pb-5">
                <Col xs="2">
                  <FontAwesomeIcon icon={faPhone} size="3x" />
                </Col>
                <Col xs="10">07922 448 380</Col>
              </Row>
              <Row className="pb-5">
                <Col xs="2">
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </Col>
                <Col>anemailaddress@gmail.com</Col>
              </Row>
            </Col>
          </Row>
        </Section>

        <Section id="book" bgcolor="bg-light">
          <TitleRow text="Contact Us" />
          <Row>
            <Col>
              <p>Appointments are £45 for 30 minutes.</p>
            </Col>
          </Row>
          <Row>
            <ContactForm />
          </Row>
        </Section>

        <Section id="footer" bgcolor="bg-secondary">
          <p>This is a footer.</p>
          <p>Put Jamie's creds in here.</p>
        </Section>
      </Container>
    </div>
  );
};

export default IndexPage;

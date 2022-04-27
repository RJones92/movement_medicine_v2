import * as React from "react";
import NavigationBar from "../components/navbar";
import Section from "../components/section";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Banner from "../components/banner";
import TitleRow from "../components/titleRow";
import ServiceRow from "../components/serviceRow";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/form/contactForm";

const IndexPage = () => {
  return (
    <div>
      <Container fluid>
        <NavigationBar />
        <Banner />

        <Section id="about" bgcolor="bg-white">
          <TitleRow text="About" />
          <Row>
            <Col>
              <p>My training and experience enables me to accurately diagnose and provide the best possible
                    treatment for your problem.</p>
              <p>Your treatment will be complemented through my experience as a qualified fitness instructor,
                enhancing the treatment through the most appropriate rehabilitation and self care exercises
                to increase your time to recovery.</p>
              <p>&#10004; Qualified osteopath<br />
                &#10004; Qualified fitness instructor<br />
                &#10004; Fully insured<br />
                &#10004; Registered with Governing Body for Osteopaths<br /></p>
              </Col>
          </Row>
        </Section>

        <Section id="services" bgcolor="bg-light">
          <TitleRow text="Services" />
          <ServiceRow service1="Neck Pain" service2="Jaw Pain or Clicking" />
          <ServiceRow service1="Tension Headaches" service2="Shoulder Pain" />
          <ServiceRow service1="Elbow Pain" service2="Wrist and Hand Pain" />
          <ServiceRow service1="Back Pain" service2="Lower Back Pain" />
          <ServiceRow service1="Hip and Groin Pain" service2="Knee Pain" />
          <ServiceRow service1="Ankle and Foot Pain" service2="Muscles and Spasms" />
          <ServiceRow service1="Arthritic Pain" service2="Minor Sports Injuries and Rehabilitation" />
          <ServiceRow service1="Repetitive Strain Injuries" service2="Postural Concerns" />
          <ServiceRow service1="Pregnancy Related Joint Pain" service2="Sciatica" />
          <ServiceRow service1="Pain Management" service2="Rheumatic Pain" />
          <ServiceRow service1="Circulatory Problems" service2="Digestive Issues" />
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
                placeholder="blurred" />
              </a>
            </Col>
            <Col xs="12" lg="6">
              <Row className="pb-5">
                <Col xs="2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
                </Col>
                <Col xs="10">
                  22 Pallister Road, Clacton-on-Sea, CO15 1PG
                </Col>
              </Row>
              <Row className="pb-5">
                <Col xs="2">
                  <FontAwesomeIcon icon={faPhone} size="3x" />
                </Col>
                <Col xs="10">
                  07922 448 380
                </Col>
              </Row>
              <Row className="pb-5">
                <Col xs="2">
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </Col>
                <Col>
                  anemailaddress@gmail.com
                </Col>
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
  )
}

export default IndexPage

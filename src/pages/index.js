import * as React from "react";
import NavigationBar from "../components/navbar";
import Section from "../components/section";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Banner from "../components/banner";
import TitleRow from "../components/titleRow";
import ServiceRow from "../components/serviceRow";

const IndexPage = () => {
  return (
    <div>
      <Container fluid>
        <NavigationBar></NavigationBar>
        <Banner></Banner>

        <Section id="about" bgcolor="bg-white">
          <TitleRow text="About"></TitleRow>
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
          <TitleRow text="Services"></TitleRow>
          <ServiceRow service1="Neck Pain" service2="Jaw Pain or Clicking"></ServiceRow>
          <ServiceRow service1="Tension Headaches" service2="Shoulder Pain"></ServiceRow>
          <ServiceRow service1="Elbow Pain" service2="Wrist and Hand Pain"></ServiceRow>
          <ServiceRow service1="Back Pain" service2="Lower Back Pain"></ServiceRow>
          <ServiceRow service1="Hip and Groin Pain" service2="Knee Pain"></ServiceRow>
          <ServiceRow service1="Ankle and Foot Pain" service2="Muscles and Spasms"></ServiceRow>
          <ServiceRow service1="Arthritic Pain" service2="Minor Sports Injuries and Rehabilitation"></ServiceRow>
          <ServiceRow service1="Repetitive Strain Injuries" service2="Postural Concerns"></ServiceRow>
          <ServiceRow service1="Pregnancy Related Joint Pain" service2="Sciatica"></ServiceRow>
          <ServiceRow service1="Pain Management" service2="Rheumatic Pain"></ServiceRow>
          <ServiceRow service1="Circulatory Problems" service2="Digestive Issues"></ServiceRow>
        </Section>

        <Section id="location" bgcolor="bg-white">
          <h1>Location</h1>
        </Section>

        <Section id="price" bgcolor="bg-light">
          <h1>Price</h1>
        </Section>

        <Section id="contact" bgcolor="bg-white">
          <h1>Book</h1>
          <p>add contact form and phone number</p>
        </Section>

        <Section id="faq" bgcolor="bg-light">
          <h1>FAQ</h1>
          <p>FAQ - different page probably. Use gatsby's way of building pages</p>
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

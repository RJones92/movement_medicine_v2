import * as React from "react";
import NavigationBar from "../components/navbar";
import Section from "../components/section";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Banner from "../components/banner";

const IndexPage = () => {
  return (
    <div>
      <Container fluid>
        <NavigationBar></NavigationBar>
        <Banner></Banner>
        <Section id="about" bgcolor="bg-white">
          <h3>About</h3>
          <p>My training and experience enables me to accurately diagnose and provide the best possible
                treatment for your problem.</p>
          <p>Your treatment will be complemented through my experience as a qualified fitness instructor,
            enhancing the treatment through the most appropriate rehabilitation and self care exercises
            to increase your time to recovery.</p>
          <p>&#10004; Qualified osteopath<br />
            &#10004; Qualified fitness instructor<br />
            &#10004; Fully insured<br />
            &#10004; Registered with Governing Body for Osteopaths<br /></p>
        </Section>

        <Section id="services" bgcolor="bg-light">
          <h3>Services</h3>
          <ul class="treatments-list">
            <li>Tension Headaches</li>
            <li>Jaw Pain or Clicking</li>
            <li>Neck Pain</li>
            <li>Shoulder Pain</li>
            <li>Elbow Pain</li>
            <li>Wrist & Hand Pain</li>
            <li>Back Pain</li>
            <li>Low Back Pain</li>
            <li>Hip & Groin Pain</li>
            <li>Knee Pain</li>
            <li>Ankle & Foot Pain</li>
            <li>Muscle Spasms</li>
            <li>Arthritic Pain</li>
            <li>Minor Sports Injuries & Rehabilitation</li>
            <li>Repetitive Strain Injuries</li>
            <li>Postural Concerns</li>
            <li>Pregnancy Related Joint Pain</li>
            <li>Sciatica</li>
            <li>Pain Management</li>
            <li>Rheumatic Pain</li>
            <li>Circulatory Problems</li>
            <li>Digestive Issues</li>
            <li>Fibromyalgia</li>
          </ul>
        </Section>

        <Section id="location" bgcolor="bg-white">
          <h3>Location</h3>
        </Section>

        <Section id="price" bgcolor="bg-light">
          <h3>Price</h3>
        </Section>

        <Section id="contact" bgcolor="bg-white">
          <h3>Book</h3>
          <p>add contact form and phone number</p>
        </Section>

        <Section id="faq" bgcolor="bg-light">
          <h3>FAQ</h3>
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

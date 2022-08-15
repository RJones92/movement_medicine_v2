import * as React from "react";
import Container from "react-bootstrap/Container";
import NavigationBar from "./navbar";
import Banner from "./banner";
import Section from "./section";

const Layout = ({
  children,
  bannerTitle,
  bannerSubTitle,
  contactUsButtonVisible,
}) => {
  return (
    <div>
      <NavigationBar />
      <Container fluid>
        <Banner
          title={bannerTitle}
          subtitle={bannerSubTitle}
          contactUsButtonVisible={contactUsButtonVisible}
        />
        {children}
        <Section id="footer" bgcolor="bg-secondary">
          <p>This is a footer.</p>
          <p>Put Jamie's creds in here.</p>
        </Section>
      </Container>
    </div>
  );
};

export default Layout;

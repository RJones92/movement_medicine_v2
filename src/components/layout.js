import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavigationBar from './navbar';
import Banner from './banner';
import Footer from './footer';

const Layout = ({ children, bannerTitle, contactUsButtonVisible, id }) => {
  return (
    <div>
      <NavigationBar />
      <Container fluid>
        <Banner
          title={bannerTitle}
          contactUsButtonVisible={contactUsButtonVisible}
          id={id}
        />
        {children}
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;

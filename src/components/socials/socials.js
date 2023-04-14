import * as React from 'react';
import { Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

const Socials = () => (
  <Col>
    <a
      href='https://www.facebook.com/profile.php?id=100089959069730'
      target='_blank'
      rel='noreferrer'
      style={{ color: 'inherit' }}
    >
      <StaticImage
        src='../../images/f_logo_RGB-Black_58.png'
        alt='Facebook logo'
        layout='constrained'
        placeholder='blurred'
        width='45'
        height='45'
      />
    </a>
    {'  '}
    <a
      href='https://www.instagram.com/cop_clinic/'
      target='_blank'
      rel='noreferrer'
      style={{ color: 'inherit' }}
    >
      <StaticImage
        src='../../images/Instagram_Glyph_Black.png'
        alt='Instagram logo'
        layout='constrained'
        placeholder='blurred'
        width='45'
        height='45'
      />
    </a>
  </Col>
);

export default Socials;

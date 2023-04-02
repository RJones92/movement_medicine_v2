import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Service from '../components/service';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FaviconSmall from '../static/favicon/favicon-16x16.png';
import FaviconLarge from '../static/favicon/favicon-32x32.png';
import FaviconApple from '../static/favicon/apple-touch-icon.png';
import FaviconShortcut from '../static/favicon/favicon.ico';

export const Head = () => {
  return (
    <>
      <title>COP Clinic - About Me</title>

      <link rel='apple-touch-icon' sizes='180x180' href={FaviconApple} />
      <link rel='icon' type='image/png' sizes='32x32' href={FaviconLarge} />
      <link rel='icon' type='image/png' sizes='16x16' href={FaviconSmall} />
      <link rel='shortcut icon' href={FaviconShortcut} />
      <meta name='msapplication-TileColor' content='#00aba9' />
      <meta name='theme-color' content='#ffffff' />

      {/* Google tag (gtag.js) scripts */}
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-4N85694T9Z'
      />
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4N85694T9Z');`}
      </script>
      {/* End Google tag scripts */}
    </>
  );
};

const AboutMePage = () => {
  return (
    <Service bannerTitle='About Me' id='about-me' bgcolor='bg-white'>
      <Row className='my-3'>
        <Col>
          <p class='lead'>Hi, I'm Jamie.</p>
          <p>
            I became an Osteopath in 2018, finishing with distinction in the
            final clinical competency examinations. Since then, I have worked at
            Clacton and in several other clinics to gain as much experience and
            knowledge as possible. I have always taken an interest in the human
            body, and was eager to learn how the body functions.{' '}
          </p>
          <p>
            I adapt my approach when assessing and treating patients based on a
            variety of factors. What helps one person's pain, may not work for
            others. No two patients ever respond in the same way - even if they
            have the same injury!
          </p>
        </Col>
      </Row>
      <Row className='my-3 justify-content-center'>
        <Col xs='12' md='8'>
          <p>
            I utilise a variety of skills and treatments, such as:
            <ul>
              <li>Osteopathic Manipulation</li>
              <li>Soft tissue techniques</li>
              <li>Sports massage, </li>
              <li>Dry needling (medical acupuncture)</li>
              <li>Exercise prescription</li>
              <li>CBT (in relation to pain)</li>
              <li>Therapeutic ultrasound</li>
              <li>Electrotherapy</li>
              <li>
                I am soon taking a course in Cognitive Functional Therapy.
              </li>
            </ul>
          </p>
        </Col>
        <Col xs='6' md='4'>
          <StaticImage
            src='../images/face.jpg'
            alt='face'
            layout='constrained'
            placeholder='blurred'
          ></StaticImage>
        </Col>
      </Row>
      <Row className='my-3'>
        <Col>
          <p>
            All of these skills combined with an in-depth knowledge of the human
            body gives me an excellent chance at being able to help patients
            with their problems. Of course, I also know my limitations, and
            sadly some patients do not respond to manual therapy. In these
            cases, I will always write to GPs and can suggest appropriate
            referrals when indicated.
          </p>
          <p>
            I will always aim to gradually increase the loading on the injured
            or painful tissue so that there is a steady and safe return to the
            patient's previous strength and ability. This may be done by
            adapting elements of their work or home life, or by progressive
            exercises which I am able to send out with videos and pictures of
            for patients' convenience.
          </p>
          <p>I look forward to meeting and helping you in clinic soon.</p>
        </Col>
      </Row>
    </Service>
  );
};

export default AboutMePage;

import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Service from '../components/service';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SEO } from '../components/seo';

const TheTeamPage = () => {
  return (
    <Service bannerTitle='About Me' id='about-me' bgcolor='bg-white'>
      {JamieHtml}
      {AmieHtml}
    </Service>
  );
};

const JamieHtml = (
  <div>
    <Row className='my-3'>
      <Col>
        <StaticImage
          src='../images/Jamie_Head_Shot_High_Res.jpg'
          alt='Picture of Jamie Acres, registered Osteopath at Clacton Osteopathy & Physiotherapy clinic.'
          layout='constrained'
          placeholder='blurred'
          className='float-end'
          height={250}
        />
        <p className='lead'>Jamie - Osteopath</p>
        <p>
          I became an Osteopath in 2018, finishing with distinction in the final
          clinical competency examinations. Since then, I have worked at Clacton
          and in several other clinics to gain as much experience and knowledge
          as possible. I have always taken an interest in the human body, and
          was eager to learn how the body functions.
        </p>
        <p>
          I adapt my approach when assessing and treating patients based on a
          variety of factors. What helps one person's pain, may not work for
          others. No two patients ever respond in the same way - even if they
          have the same injury!
        </p>
      </Col>
    </Row>
    <Row className='my-3'>
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
          <li>I am soon taking a course in Cognitive Functional Therapy.</li>
        </ul>
      </p>
    </Row>
    <Row className='my-3'>
      <Col>
        <p>
          All of these skills combined with an in-depth knowledge of the human
          body gives me an excellent chance at being able to help patients with
          their problems. Of course, I also know my limitations, and sadly some
          patients do not respond to manual therapy. In these cases, I will
          always write to GPs and can suggest appropriate referrals when
          indicated.
        </p>
        <p>
          I will always aim to gradually increase the loading on the injured or
          painful tissue so that there is a steady and safe return to the
          patient's previous strength and ability. This may be done by adapting
          elements of their work or home life, or by progressive exercises which
          I am able to send out with videos and pictures of for patients'
          convenience.
        </p>
        <p>I look forward to meeting and helping you in clinic soon.</p>
      </Col>
    </Row>
  </div>
);

const AmieHtml = (
  <div>
    <Row className='pt-3'>
      <Col>
        <StaticImage
          src='../images/Ami_Head_Shot.jpg'
          alt='Picture of Amie, Massage Therapist at Clacton Osteopathy & Physiotherapy clinic.'
          layout='constrained'
          placeholder='blurred'
          className='float-end'
          height={250}
        />
        <p className='lead'>Ami - Massage Therapist</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus
          porta lectus a eleifend. Donec sagittis, dolor at volutpat bibendum,
          augue nunc porta sapien, gravida porttitor elit nisi condimentum orci.
          Maecenas a sollicitudin velit. Nam posuere mollis orci, a placerat
          purus blandit quis. Nulla augue magna, pellentesque sed mi eu, laoreet
          finibus ligula. Maecenas dignissim euismod nibh sit amet luctus.
          Maecenas id sapien massa. Fusce ante quam, malesuada vitae lorem
          vitae, tincidunt suscipit erat. Duis a lectus pharetra, volutpat neque
          quis, aliquet sapien. Vestibulum tristique accumsan luctus. Aenean eu
          nisi ut urna luctus blandit. Nam tristique nisi tristique, luctus enim
          non, iaculis tortor. Nullam scelerisque vel lacus vitae convallis.
          Nulla facilisi.
        </p>
        <p>
          Suspendisse id lorem ac ex vehicula fringilla vel eget enim. Nullam
          sollicitudin varius orci eget condimentum. Suspendisse potenti.
          Suspendisse fringilla erat et magna varius, at blandit nisi laoreet.
          Quisque odio eros, faucibus vel augue quis, iaculis facilisis dui.
          Etiam eu ligula in tellus blandit maximus in ut orci. Donec nisl
          felis, commodo ac nunc id, vehicula sagittis ligula. In ac ex eget
          ipsum hendrerit luctus et sit amet enim. Praesent vel consequat eros,
          quis vehicula sem. Aenean dignissim mauris eu dui luctus dignissim.
        </p>
      </Col>
    </Row>
  </div>
);

export default TheTeamPage;

export const Head = () => {
  return <SEO title='COP Clinic - About Me' />;
};

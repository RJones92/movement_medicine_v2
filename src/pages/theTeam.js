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
      {AmiHtml}
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

const AmiHtml = (
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
          Hello! My name is Ami, and I am a dedicated and passionate massage
          therapist. My journey into the world of massage therapy began with a
          deep interest in holistic health and the profound impact of touch on
          overall well-being, which was further inspired by my previous career
          in care. Working in care, I witnessed firsthand the transformative
          power of compassionate touch and its ability to improve both physical
          and emotional health. This experience motivated me to pursue a career
          in massage therapy.
        </p>
        <p>
          My training includes various massage techniques, including full body,
          hot stone, Indian head, and bamboo massage. I continuously update my
          skills and knowledge to offer the most effective and up-to-date
          treatments to my clients, and I am currently undertaking a course in
          sports massage. My approach is client-centered, tailoring each session
          to meet the unique needs and goals of every individual.
        </p>
        <p>
          I strive to create a warm and welcoming environment where clients can
          feel safe and relaxed. My goal is not only to alleviate pain and
          tension but also to promote a sense of peace and relaxation that
          extends beyond the massage session. I am committed to helping my
          clients achieve their wellness goals and improve their quality of life
          through the therapeutic power of massage.
        </p>
        <p>
          In my practice, I emphasize the importance of listening to my clients
          and understanding their concerns. Whether you are seeking relief from
          chronic pain, recovering from an injury, or simply looking to unwind
          and de-stress, I am here to support you on your journey to better
          health and well-being.
        </p>
        <p>
          Outside of my practice, I am passionate about weight lifting and enjoy
          staying active through this challenging and rewarding hobby. Weight
          lifting not only keeps me physically fit but also deepens my
          understanding of the body’s mechanics and the importance of muscle
          health and recovery. This knowledge enhances my ability to help
          clients, particularly athletes and fitness enthusiasts, achieve
          optimal performance and recovery.
        </p>
        <p>
          I look forward to the opportunity to work with you and help you
          achieve your wellness goals. Thank you for considering me as your
          massage therapist.
        </p>
      </Col>
    </Row>
  </div>
);

export default TheTeamPage;

export const Head = () => {
  return <SEO title='COP Clinic - About Me' />;
};

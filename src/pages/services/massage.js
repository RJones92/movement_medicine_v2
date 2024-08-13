import * as React from 'react';
import Service from '../../components/service_v2';
import Accordion from 'react-bootstrap/Accordion';
import { StaticImage } from 'gatsby-plugin-image';
import { SEO } from '../../components/seo';

const MassagePage = () => {
  const accordion = (
    <Accordion flush>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Our Massage Services</Accordion.Header>
        <Accordion.Body>
          <Accordion flush>
            <Accordion.Item eventKey='100'>
              <Accordion.Header>Full Body Massage</Accordion.Header>
              <Accordion.Body>
                <p>
                  A comprehensive treatment that targets all major muscle groups
                  to promote overall relaxation and well-being.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='101'>
              <Accordion.Header>Hot Stone Massage</Accordion.Header>
              <Accordion.Body>
                <p>
                  Heated stones melt away stress and tension, leaving you
                  feeling deeply relaxed. This hot stone massage is perfect for
                  those needing extra warmth and relief.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='102'>
              <Accordion.Header>Indian Head Massage </Accordion.Header>
              <Accordion.Body>
                <p>
                  Focused on the head, neck, and shoulders to relieve stress,
                  improve circulation, and promote a sense of tranquillity.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='103'>
              <Accordion.Header>Bamboo Massage</Accordion.Header>
              <Accordion.Body>
                <p>
                  Utilizes smooth bamboo sticks to deliver a deep, firm massage
                  that eases muscle tension and enhances circulation.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>Why Choose Us?</Accordion.Header>
        <Accordion.Body>
          <p className='lead'>A Truly Wonderful Therapist</p>
          <p>
            Our massage therapist Ami is incredibly kind, warm and welcoming and
            genuinely cares for her clients. She creates an atmosphere which is
            instantly relaxing, which will ensure you leave feeling refreshed
            and revitalized.
          </p>
          <p className='lead'>Personalised Treatments</p>
          <p>
            We believe that no two bodies are the same, which is why we tailor
            the massage treatments to address your specific concerns. Whether
            you're dealing with chronic pain, stress, or simply need a moment to
            unwind, our therapist Ami will create a personalised plan just for
            you. Experience the best massage in Clacton-on-Sea.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );

  return (
    <Service
      bannerTitle='Massage Therapy'
      id='massage'
      bgcolor='bg-white'
      accordion={accordion}
      staticImage=<StaticImage
        src='../../images/services/massage-therapy-1.jpeg'
        alt='Clacton massage at COP clinic'
        layout='constrained'
        placeholder='blurred'
      />
    >
      <p>
        At the COP Clinic, we highly recommend massage treatments for many of
        our patients during their road to recovery. Massage therapy offers
        numerous benefits for both physical and mental health. It helps
        alleviate muscle tension, reduce chronic pain, and improve circulation,
        promoting overall relaxation. Regular massage can significantly lower
        stress levels by reducing cortisol and increasing serotonin and
        dopamine, enhancing mood and mental well-being. Additionally, it boosts
        the immune system by stimulating lymphatic flow and can improve sleep
        quality by promoting deeper, more restful sleep. Overall, massage
        therapy supports holistic health and rejuvenation.
      </p>
      <p>
        Book Your Appointment Today! Whether you're a local resident or visiting
        for the weekend, we warmly welcome you to our clinic.
      </p>
    </Service>
  );
};

export default MassagePage;

export const Head = () => {
  return (
    <SEO
      title='COP Clinic - Massage Therapy'
      description="We believe that no two bodies are the same, which is why we tailor the massage treatments to address your specific concerns. Whether you're dealing with chronic pain, stress, or simply need a moment to unwind, our therapist Ami will create a personalised plan just for you. Experience the best massage in Clacton-on-Sea."
    />
  );
};

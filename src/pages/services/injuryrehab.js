import * as React from 'react';
import Service from '../../components/service';
import { SEO } from '../../components/seo';

const InjuryRehabPage = () => {
  return (
    <Service
      bannerTitle='Injury Rehabilitation'
      id='injuryrehab'
      bgcolor='bg-white'
    >
      <p>
        Injury rehabilitation can be a challenging process, but our
        physiotherapy clinic is here to help. We offer personalised treatments
        and exercise programs to help you recover from injury and get back to
        your daily life. Whether you're recovering from a sports injury or a
        joint replacement surgery, we utilise the latest techniques and
        therapies to help restore function, alleviate pain, and prevent further
        injury. Contact us today to schedule an appointment and take the first
        step towards a full recovery.
      </p>
    </Service>
  );
};

export default InjuryRehabPage;

export const Head = () => {
  return (
    <SEO
      title='COP Clinic - Injury Rehabilitation'
      description="Injury rehabilitation can be a challenging process, but our physiotherapy clinic is here to help. We offer personalised treatments and exercise programs to help you recover from injury and get back to your daily life. Whether you're recovering from a sports injury or a joint replacement surgery, we utilise the latest techniques and therapies to help restore function, alleviate pain, and prevent further injury. Contact us today to schedule an appointment and take the first step towards a full recovery."
    />
  );
};

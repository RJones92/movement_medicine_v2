import * as React from 'react';
import Service from '../../components/service';
import { SEO } from '../../components/seo';

const ArthritisPage = () => {
  return (
    <Service bannerTitle='Arthritic Pain' id='arthritis' bgcolor='bg-white'>
      <p>
        Arthritic pain can be a constant struggle, impacting your daily life and
        limiting your mobility. We specialise in treating arthritic pain to
        provide effective pain relief. We utilize the latest techniques and
        therapies to help reduce symptoms, increase flexibility, and improve
        overall joint function. Contact us today to schedule an appointment and
        start living a more comfortable, active life.
      </p>
    </Service>
  );
};

export default ArthritisPage;

export const Head = () => {
  return <SEO title='COP Clinic - Arthritis' />;
};

import * as React from 'react';
import Service from '../../components/service';
import { SEO } from '../../components/seo';

const SciaticaPage = () => {
  return (
    <Service bannerTitle='Sciatica' id='sciatica' bgcolor='bg-white'>
      <p>
        If you're experiencing sciatica pain, an Osteopath can help. We
        specialise in treating musculoskeletal issues, including sciatica.
        Through personalized and non-invasive treatments, we can help relieve
        your pain and improve your mobility. Contact us today to schedule an
        appointment and take the first step towards a pain-free life.
      </p>
    </Service>
  );
};

export default SciaticaPage;

export const Head = () => {
  return <SEO title='COP Clinic - Sciatica' />;
};

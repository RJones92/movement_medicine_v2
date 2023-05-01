import * as React from 'react';
import Service from '../../components/service';
import { SEO } from '../../components/seo';

const BackPainPage = () => {
  return (
    <Service
      bannerTitle='Back Pain & Neck Pain'
      id='backpain'
      bgcolor='bg-white'
    >
      <p>
        Back pain can be debilitating and affect your daily life. Whether caused
        by an injury, poor posture, or a medical condition, it's important to
        address the issue to prevent it from worsening. At Clacton COP Clinic we
        can help diagnose and treat the root cause of your back pain, providing
        relief and improving your quality of life. Contact us today to learn
        more about our effective and personalised back pain treatments.
      </p>
    </Service>
  );
};

export default BackPainPage;

export const Head = () => {
  return <SEO title='COP Clinic - Back pain and neck pain' />;
};

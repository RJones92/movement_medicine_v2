import * as React from 'react';
import Service from '../../components/service';
import { SEO } from '../../components/seo';

const ShoulderPainPage = () => {
  return (
    <Service bannerTitle='Shoulder Pain' id='shoulderpain' bgcolor='bg-white'>
      <p>
        Shoulder pain can be caused by a range of issues, including injury,
        overuse, postural and medical conditions. After a full assessment to
        discover the root cause of your pain, we will offer a fully
        individualised treatment to help relieve your shoulder pain and improve
        your range of motion. Contact us today to schedule an appointment at our
        Clacton on Sea clinic, and take the first step towards a pain-free
        shoulder.
      </p>
    </Service>
  );
};

export default ShoulderPainPage;

export const Head = () => {
  return (
    <SEO
      title='COP Clinic - Shoulder Pain'
      description='Shoulder pain can be caused by a range of issues, including injury, overuse, postural and medical conditions. After a full assessment to discover the root cause of your pain, we will offer a fully individualised treatment to help relieve your shoulder pain and improve your range of motion. Contact us today to schedule an appointment at our Clacton on Sea clinic, and take the first step towards a pain-free shoulder.'
    />
  );
};

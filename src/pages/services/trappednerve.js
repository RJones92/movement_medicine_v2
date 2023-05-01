import * as React from 'react';
import Service from '../../components/service';
import { SEO } from '../../components/seo';

const TrappedNervePage = () => {
  return (
    <Service bannerTitle='Trapped Nerves' id='trappednerves' bgcolor='bg-white'>
      <p>
        Trapped nerves can cause a range of symptoms, including pain, tingling,
        and weakness. At our Clacton clinic, we offer personalized treatments to
        address the root cause of your trapped nerve and alleviate your
        symptoms. We will use a variety of techniques and therapies to improve
        nerve function and restore mobility. Contact us today to schedule an
        appointment and take the first step towards relieving your symptoms.
      </p>
    </Service>
  );
};

export default TrappedNervePage;

export const Head = () => {
  return <SEO title='COP Clinic - Trapped Nerves' />;
};

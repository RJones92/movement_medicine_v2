import * as React from 'react';
import Service from '../../components/service';
import { SEO } from '../../components/seo';

const ArthritisPage = () => {
  return (
    <Service bannerTitle='Arthritic Pain' id='arthritis' bgcolor='bg-white'>
      <p>
        Arthritis is a chronic or long-term condition which can affect any joint
        in your body. It is most commonly experienced in a person's weight
        baring joints. It will affect most people at some point in their lives
        as we all live longer, and is progressive in nature. Flare ups can be
        agonising and render a person temporarily disabled; however, most people
        can manage this condition, often achieving periods without severe pain
        or disability. A combination of physical therapy and the correct
        exercises completed regularly is often enough to minimise the risks of
        flare ups, and keep an arthritic joint as healthy as it can be.
      </p>
      <p>
        During a flare up, hands on treatment within the clinic can greatly
        relieve symptoms and get your joint to its normal healthy state.
      </p>
    </Service>
  );
};

export default ArthritisPage;

export const Head = () => {
  return (
    <SEO
      title='COP Clinic - Arthritis'
      description='Arthritic pain can be a constant struggle, impacting your daily life and limiting your mobility. We specialise in treating arthritic pain to provide effective pain relief. We utilize the latest techniques and therapies to help reduce symptoms, increase flexibility, and improve overall joint function. Contact us today to schedule an appointment and start living a more comfortable, active life.'
    />
  );
};

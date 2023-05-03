import * as React from 'react';
import Service from '../../components/service';
import { SEO } from '../../components/seo';

const SciaticaPage = () => {
  return (
    <Service bannerTitle='Sciatica' id='sciatica' bgcolor='bg-white'>
      <p>
        Sciatica can be particularly debilitating for people. As the pain
        travels into the leg, everyday activities such as walking, or simply
        standing up from a chair, can become agony, and stop you from going to
        work, enjoying your hobbies, or spending time with your family and
        friends. There are a number of causes for sciatica and most will pass
        within a few weeks, however, some can last for months. It is important
        to have an assessment for all sciatica, so that you can be confident in
        knowing what you can do to aid your recovery.
      </p>
      <p>
        Treatment can help lower your symptoms, and following an assessment will
        be able to give you an understanding of what is causing your sciatica,
        and what can be done to help your recovery.
      </p>
    </Service>
  );
};

export default SciaticaPage;

export const Head = () => {
  return (
    <SEO
      title='COP Clinic - Sciatica'
      description="If you're experiencing sciatica pain, an Osteopath can help. We specialise in treating musculoskeletal issues, including sciatica. Through personalized and non-invasive treatments, we can help relieve your pain and improve your mobility. Contact us today to schedule an appointment and take the first step towards a pain-free life."
    />
  );
};

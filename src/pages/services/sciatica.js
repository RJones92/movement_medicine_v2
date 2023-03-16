import * as React from 'react';
import Service from '../../components/service';
import FaviconSmall from '../../static/favicon/favicon-16x16.png';
import FaviconLarge from '../../static/favicon/favicon-32x32.png';

export const Head = () => {
  return (
    <>
      <title>COP Clinic - Sciatica</title>
      <link rel='icon' type='image/png' sizes='32x32' href={FaviconLarge} />
      <link rel='icon' type='image/png' sizes='16x16' href={FaviconSmall} />
    </>
  );
};
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

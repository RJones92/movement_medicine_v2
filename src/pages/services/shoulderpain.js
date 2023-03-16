import * as React from 'react';
import Service from '../../components/service';
import FaviconSmall from '../../static/favicon/favicon-16x16.png';
import FaviconLarge from '../../static/favicon/favicon-32x32.png';

export const Head = () => {
  return (
    <>
      <title>COP Clinic - Shoulder Pain</title>
      <link rel='icon' type='image/png' sizes='32x32' href={FaviconLarge} />
      <link rel='icon' type='image/png' sizes='16x16' href={FaviconSmall} />
    </>
  );
};
const ShoulderPainPage = () => {
  return (
    <Service bannerTitle='Shoulder Pain' id='shoulderpain' bgcolor='bg-white'>
      <p>
        Shoulder pain can often start suddenly and become very painful very
        quickly, making tasks such as driving, getting dressed, carrying
        shopping bags or sleeping a real nightmare! There are lots of causes of
        shoulder pain, and a thorough assessment should be carried out so that
        you can start doing what is best for your shoulder. This could be simply
        rest, exercises, physical therapy, or a mix of all.
      </p>
      <p>
        For the most common causes of shoulder pain; rotator cuff injuries,
        bursitis, frozen shoulder, dislocations, a mix of physical therapy and
        the correct exercises helps most people to get their arm moving and
        working the way it should. Sometimes medications can aid the recovery,
        if we feel this will benefit you, we can make recommendations and write
        to your GP.
      </p>
    </Service>
  );
};

export default ShoulderPainPage;

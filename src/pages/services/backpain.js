import * as React from 'react';
import Service from '../../components/service';
import FaviconSmall from '../../static/favicon/favicon-16x16.png';
import FaviconLarge from '../../static/favicon/favicon-32x32.png';

export const Head = () => {
  return (
    <>
      <title>COP Clinic - Back pain and neck pain</title>
      <link rel='icon' type='image/png' sizes='32x32' href={FaviconLarge} />
      <link rel='icon' type='image/png' sizes='16x16' href={FaviconSmall} />
    </>
  );
};
const BackPainPage = () => {
  return (
    <Service
      bannerTitle='Back Pain & Neck Pain'
      id='backpain'
      bgcolor='bg-white'
    >
      <p>
        Back pain and Neck pain combined is the most common reason to take time
        off work due to a physical disorder. Six out of ten people in the UK
        will at some stage suffer with some form of low back pain. In most cases
        acute back pain will resolve within six weeks, however it is not
        uncommon for back pain to persist and become chronic. A person's spine
        is central to our bodies and integral to all movement and activity.
        People often do not realise how many daily tasks can become intolerable
        when they are experiencing back or neck pain.
      </p>
      <p>
        Following a thorough assessment to discern to cause of your back pain,
        treatment will consist of gentle to firm stretching, deep tissue massage
        and the use of various treatment modalities which we have use of within
        the clinic to help lower your symptoms. We will also find the correct
        exercises which you can do, to progressively and safely begin to load
        your spine "back" to full strength.
      </p>
    </Service>
  );
};

export default BackPainPage;

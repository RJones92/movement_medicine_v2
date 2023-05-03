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

export const Head = () => {
  return (
    <SEO
      title='COP Clinic - Back pain and neck pain'
      description="Back pain can be debilitating and affect your daily life. Whether caused by an injury, poor posture, or a medical condition, it's important to address the issue to prevent it from worsening. At Clacton COP Clinic we can help diagnose and treat the root cause of your back pain, providing relief and improving your quality of life. Contact us today to learn more about our effective and personalised back pain treatments."
    />
  );
};

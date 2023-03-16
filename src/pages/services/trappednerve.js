import * as React from 'react';
import Service from '../../components/service';

import FaviconSmall from '../../static/favicon/favicon-16x16.png';
import FaviconLarge from '../../static/favicon/favicon-32x32.png';

export const Head = () => {
  return (
    <>
      <title>COP Clinic - Trapped Nerves</title>
      <link rel='icon' type='image/png' sizes='32x32' href={FaviconLarge} />
      <link rel='icon' type='image/png' sizes='16x16' href={FaviconSmall} />
    </>
  );
};

const TrappedNervePage = () => {
  return (
    <Service bannerTitle='Trapped Nerves' id='trappednerves' bgcolor='bg-white'>
      <p>
        "Trapped" nerves can be very painful and limit your ability to move or
        use the affected limb. They are often problematic at night-time,
        wreaking havoc with your sleep. Pins and needles, numbness, a weak
        feeling, and sharp pain are often symptoms produced by "trapped" nerves.
        There are many common sites for nerves to become symptomatic; often this
        could be at the spine, or further along a nerve into your hand or foot.
      </p>
      <p>
        If you think you have a trapped nerve, you should have it checked over
        as it is always important to assess the severity, to locate where the
        nerve is "trapped", and to establish the cause. Once you have all this
        information you can start the right course of treatment, which is often
        a combination of physical therapy and pharmacological intervention. We
        will write to your GP if we think it would benefit you to have a certain
        prescription.
      </p>
      <p>
        <small>
          *Nerves are very rarely truly "trapped". In reality there is often
          more than enough space for the nerve to function, however nerves can
          be sensitive, and so slight changes in their ability to move or in the
          space which they occupy can create tension along the nerve leading to
          symptoms. Other local tissue changes, such as inflammation from
          another injury, can also cause a nerve to become symptomatic.
        </small>
      </p>
    </Service>
  );
};

export default TrappedNervePage;

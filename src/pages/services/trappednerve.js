import * as React from 'react';
import Service from '../../components/service';
import { SEO } from '../../components/seo';

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

export const Head = () => {
  return (
    <SEO
      title='COP Clinic - Trapped Nerves'
      description='Trapped nerves can cause a range of symptoms, including pain, tingling, and weakness. At our Clacton clinic, we offer personalized treatments to address the root cause of your trapped nerve and alleviate your symptoms. We will use a variety of techniques and therapies to improve nerve function and restore mobility. Contact us today to schedule an appointment and take the first step towards relieving your symptoms.'
    />
  );
};

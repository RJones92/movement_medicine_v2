import * as React from 'react';
import Service from '../../components/service';

const InjuryRehabPage = () => {
  return (
    <Service
      bannerTitle='Injury Rehabilitation'
      id='injuryrehab'
      bgcolor='bg-white'
    >
      <p>
        There are hundreds of ways people can hurt themselves. Common causes are
        from falls, a sports-related incident, lifting something a little too
        heavy, or simply overdoing an activity which the body is not accustomed
        to. Whatever the reason, there will be an injured tissue to heal and
        restrengthen. It is important for a physical therapist to assess which
        tissue you have hurt (a muscle, ligament, tendon etc), so that you can
        know the correct treatments you should be undertaking to help it, and
        how long you can expect the recovery to take. An assessment will also
        help to answer the following questions, and help you to get your body
        healing as quickly as possible:
      </p>
      <p>
        <ul>
          <li>Is it safe to carry on using the affected part of your body?</li>
          <li>Should you use hot or cold packs?</li>
          <li>Should you take painkillers?</li>
          <li>Could you continue to go to work?</li>
          <li>Should I stretch it, or rest it?</li>
        </ul>
      </p>
      <p>
        These are all questions which following an assessment, we can answer for
        you, and get your body healing as quickly as possible.
      </p>
    </Service>
  );
};

export default InjuryRehabPage;

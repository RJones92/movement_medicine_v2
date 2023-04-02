import * as React from 'react';
import Service from '../../components/service';
import FaviconSmall from '../../static/favicon/favicon-16x16.png';
import FaviconLarge from '../../static/favicon/favicon-32x32.png';
import FaviconApple from '../../static/favicon/apple-touch-icon.png';
import FaviconShortcut from '../../static/favicon/favicon.ico';

export const Head = () => {
  return (
    <>
      <title>COP Clinic - Injury Rehabilitation</title>

      <link rel='apple-touch-icon' sizes='180x180' href={FaviconApple} />
      <link rel='icon' type='image/png' sizes='32x32' href={FaviconLarge} />
      <link rel='icon' type='image/png' sizes='16x16' href={FaviconSmall} />
      <link rel='shortcut icon' href={FaviconShortcut} />
      <meta name='msapplication-TileColor' content='#00aba9' />
      <meta name='theme-color' content='#ffffff' />

      {/* Google tag (gtag.js) scripts */}
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-4N85694T9Z'
      />
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4N85694T9Z');`}
      </script>
      {/* End Google tag scripts */}
    </>
  );
};

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

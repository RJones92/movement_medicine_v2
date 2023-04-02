import * as React from 'react';
import Service from '../../components/service';
import FaviconSmall from '../../static/favicon/favicon-16x16.png';
import FaviconLarge from '../../static/favicon/favicon-32x32.png';
import FaviconApple from '../../static/favicon/apple-touch-icon.png';
import FaviconShortcut from '../../static/favicon/favicon.ico';

export const Head = () => {
  return (
    <>
      <title>COP Clinic - Shoulder Pain</title>

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

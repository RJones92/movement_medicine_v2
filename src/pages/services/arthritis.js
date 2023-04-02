import * as React from 'react';
import Service from '../../components/service';
import FaviconSmall from '../../static/favicon/favicon-16x16.png';
import FaviconLarge from '../../static/favicon/favicon-32x32.png';
import FaviconApple from '../../static/favicon/apple-touch-icon.png';
import FaviconShortcut from '../../static/favicon/favicon.ico';

export const Head = () => {
  return (
    <>
      <title>COP Clinic - Arthritis</title>

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

const ArthritisPage = () => {
  return (
    <Service bannerTitle='Arthritic Pain' id='arthritis' bgcolor='bg-white'>
      <p>
        Arthritis is a chronic or long-term condition which can affect any joint
        in your body. It is most commonly experienced in a person's weight
        baring joints. It will affect most people at some point in their lives
        as we all live longer, and is progressive in nature. Flare ups can be
        agonising and render a person temporarily disabled; however, most people
        can manage this condition, often achieving periods without severe pain
        or disability. A combination of physical therapy and the correct
        exercises completed regularly is often enough to minimise the risks of
        flare ups, and keep an arthritic joint as healthy as it can be.
      </p>
      <p>
        During a flare up, hands on treatment within the clinic can greatly
        relieve symptoms and get your joint to its normal healthy state.
      </p>
    </Service>
  );
};

export default ArthritisPage;

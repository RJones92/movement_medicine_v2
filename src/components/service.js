import * as React from 'react';
import Layout from './layout';
import Section from './section';

const Service = ({ id, bgcolor, bannerTitle, children }) => {
  return (
    <div>
      <Layout bannerTitle={bannerTitle}>
        <Section id={id} bgcolor={bgcolor}>
          {children}
        </Section>
      </Layout>
    </div>
  );
};

export default Service;

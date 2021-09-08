import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='About me'>
      <p>Hi there! I'm Dreibona.</p>
      <StaticImage alt='Dreibona' src='../images/dreibona.jpg' />
    </Layout>
  );
};

export default IndexPage;

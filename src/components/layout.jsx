import * as React from 'react';

import Header from './Header';
import Main from './Main';
import Head from './Head';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className='container mx-auto max-w-2xl lg:max-w-4xl'>
      <div className='mt-6 mx-4'>
        <Head title={pageTitle} />
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default Layout;

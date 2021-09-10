import * as React from 'react';

import Header from './Header';
import Main from './Main';
import Head from './Head';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className='container mx-auto'>
      <div className='mt-6 mx-4 xs:mt-16 xs:mx-0'>
        <Head title={pageTitle} />
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default Layout;

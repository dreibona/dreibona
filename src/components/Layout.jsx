import * as React from 'react';

import Header from './Header';
import Main from './Main';
import Head from './Head';

const Layout = ({ pageTitle, children }) => {
  return (
    <div /* className='mx-1.5 xs:mx-4' */>
      <Head title={pageTitle} />
      <Header />
      <div className='container mx-auto max-w-screen-sm md:max-w-2xl lg:max-w-4xl xl:max-w-screen-lg'>
        <Main>
          <div className='mx-1.5 xs:mx-4'>{children}</div>
        </Main>
      </div>
    </div>
  );
};

export default Layout;

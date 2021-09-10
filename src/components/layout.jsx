import * as React from 'react';

import Seo from './Seo';
import Header from './Header';
import Main from './Main';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className='container mx-auto'>
      <div className='mt-6 mx-4 xs:mt-16 xs:mx-0'>
        <Seo title={pageTitle} />
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default Layout;

import * as React from 'react';

import Header from './Header';
import Main from './Main';
import Head from './Head';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Head title={pageTitle} />
      <Header />
      <div>
        <Main>{children}</Main>
      </div>
    </div>
  );
};
export default Layout;

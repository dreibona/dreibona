import * as React from 'react';

const Main = ({ children }) => {
  return (
    <main className='container mx-auto max-w-screen-lg mt-8 p-6'>
      {children}
    </main>
  );
};
export default Main;

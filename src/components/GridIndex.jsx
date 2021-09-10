import * as React from 'react';

const GridIndex = ({ children }) => {
  return <div className='grid gap-4 xs:grid-cols-3'>{children}</div>;
};

export default GridIndex;

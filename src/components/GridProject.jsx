import * as React from 'react';

const GridProject = ({ children }) => {
  return (
    <span className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4'>
      {children}
    </span>
  );
};
export default GridProject;

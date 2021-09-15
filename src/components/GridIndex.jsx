import * as React from 'react';

const GridIndex = ({ children }) => {
  return (
    <div className='grid place-items-center'>
      <div className='grid gap-4 xs:grid-cols-2 md:grid-cols-4 lg:gap-6'>
        <h1 className='text-3xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-4xl md:grid-cols-3 lg:text-5xl self-center'>
          <span className='md:col-span-2'>
            Grid layout sint velit sit consequat
          </span>
        </h1>
        <p className='xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg'>
          Minim ea sint velit sit consequat. Lorem ex enim nostrud non ex. Est
          voluptate anim aute nulla aliquip tempor laborum sit aliqua officia
          amet proident id tempor.
        </p>
        {children}
        <p className='self-center md:text-lg md:col-span-2 md:px-4'>
          Minim ea sint velit sit consequat. Lorem ex enim nostrud non ex.
        </p>
      </div>
    </div>
  );
};
export default GridIndex;

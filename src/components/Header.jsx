import * as React from 'react';
import { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const links = [
  { name: 'Projects', target: '/' },
  { name: 'About', target: '/about' },
  { name: 'Photos', target: '/photos' },
];
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header>
      <div className='border-b-8 border-gray-700 flex flex-col xs:flex-row xs:items-stretch'>
        <div className='flex flex-row'>
          <h1 className='flex flex-wrap my-4 ml-3 md:my-6 lg:my-8 xs:ml-6 bg-red-600 text-white p-2 uppercase text-md md:text-2xl lg:text-4xl xl:text-5xl transform -skew-x-6 self-start'>
            <Link to='/' className='hover:underline'>
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <div className='flex flex-1 flex-wrap justify-end content-center mr-8 xs:hidden'>
            <button onClick={handleToggle}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={`${
            navbarOpen
              ? 'flex flex-1 xs:flex-wrap justify-around xs:justify-end mb-5 xs:mb-0 mt-2 xs:mt-0'
              : 'hidden xs:flex flex-1 xs:flex-wrap justify-around xs:justify-end mb-5 xs:mb-0 mt-2 xs:mt-0'
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.target}
              className='relative group px-2 xs:px-6 lg:px-8 xl:px-10 text-sm lg:text-xl xl:text-2xl uppercase flex-shrink-0 flex items-center'
            >
              <span className='hidden xs:block absolute top-0 left-0 w-0.5 h-full bg-gray-200 transform -skew-x-20 -z-1'></span>
              <span className='relative'>
                {link.name}
                <span className='absolute w-full h-1 bg-red-600 -bottom-1 left-0 rounded-sm transform scale-x-0 group-hover:scale-x-100 transition ease-elastic duration-300'></span>
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Header;

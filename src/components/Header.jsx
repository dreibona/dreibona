import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Header = () => {
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
      <div className='xs:grid grid-cols-2 items-baseline'>
        <h1 className='font-bold'>
          <Link to='/' className='!shadow-none'>
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <nav className='mt-4'>
          <ul className='grid grid-cols-3 place-items-center'>
            <h4 className='place-self-start xs:place-self-end'>
              <Link to='/'>Projects</Link>
            </h4>
            <h4 className='xs:place-self-end'>
              <Link to='/photos'>Photos</Link>
            </h4>
            <h4 className='place-self-end'>
              <Link to='/about'>About</Link>
            </h4>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

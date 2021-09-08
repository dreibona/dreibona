import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  /* ============ graphql ============ */
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
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      {/* ============ Header ============ */}
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      {/* ============ Nav ============ */}
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText}>
              Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/about' className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/photos' className={navLinkText}>
              Photos
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/notes' className={navLinkText}>
              Notes
            </Link>
          </li>
        </ul>
      </nav>
      {/* ============ Main ============ */}
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;

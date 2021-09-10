import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Head({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const keywords = site.siteMetadata.keywords;
  const image = site.siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `robots`,
          content: `noindex,nofollow`,
        },
        {
          name: `AdsBot-Google`,
          content: `noindex,nofollow`,
        },
        {
          name: `bingbot`,
          content: `noindex,nofollow`,
        },
        {
          name: `msnbot`,
          content: `noindex,nofollow`,
        },
        {
          name: `Slurp`,
          content: `noindex,nofollow`,
        },
        {
          name: `DuckDuckBot`,
          content: `noindex,nofollow`,
        },
        {
          name: `Baiduspider`,
          content: `noindex,nofollow`,
        },
        {
          name: `YandexBot`,
          content: `noindex,nofollow`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Head;

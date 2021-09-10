import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Layout from '../../components/layout';

const ProjectPage = ({
  data: {
    mdx: {
      frontmatter: { title, imagesLocal },
      body,
    },
  },
}) => {
  return (
    <Layout pageTitle={title}>
      <MDXProvider>
        <MDXRenderer localImages={imagesLocal}>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        imageCoverAlt
        imageCover {
          childImageSharp {
            gatsbyImageData
          }
        }
        imagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default ProjectPage;

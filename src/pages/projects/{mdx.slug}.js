import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';

const ProjectPage = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.cover_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.cover_image_alt} />
      <p>
        Photo Credit:{' '}
        <a href={data.mdx.frontmatter.cover_image_link}>
          {data.mdx.frontmatter.cover_image_credit}
        </a>
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        cover_image_alt
        cover_image_credit
        cover_image_link
        cover_image {
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

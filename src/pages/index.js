import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle='Projects'>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <div>
            <Link to={`/projects/${node.slug}`}>
              <div>{node.frontmatter.title}</div>
              <GatsbyImage
                image={
                  node.frontmatter.cover_image.childImageSharp.gatsbyImageData
                }
                alt={node.frontmatter.cover_image_alt}
              />
            </Link>
          </div>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          cover_image_alt
          cover_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;

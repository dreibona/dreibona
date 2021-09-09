import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
                image={getImage(node.frontmatter.imageCover)}
                alt={node.frontmatter.imageCoverAlt}
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
          imageCoverAlt
          imageCover {
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

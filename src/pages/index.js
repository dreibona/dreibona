import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle='Projects'>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h3>
            <Link to={`/projects/${node.slug}`}>{node.frontmatter.title}</Link>
          </h3>
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
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;

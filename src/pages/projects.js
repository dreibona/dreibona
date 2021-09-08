import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

const ProjectsPage = ({ data }) => {
  return (
    <Layout pageTitle='Projects'>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h3>{node.frontmatter.title}</h3>
          <p>Uploaded on {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
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
        body
      }
    }
  }
`;

export default ProjectsPage;

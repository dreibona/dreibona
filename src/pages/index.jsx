import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import GridIndex from '../components/GridIndex';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle='Projects'>
      <GridIndex>
        {data.allMdx.nodes.map((node, i) => (
          <article key={node.id} className={i === 3 ? 'md:col-start-2' : ''}>
            <div className='relative'>
              <Link to={`/projects/${node.slug}`}>
                <div className='absolute z-10 bottom-0 p-2 text-4xl'>
                  <div>{node.frontmatter.title}</div>
                </div>
                <GatsbyImage
                  image={getImage(node.frontmatter.imageCover)}
                  alt={node.frontmatter.imageCoverAlt}
                  className='h-auto xs:square z-0'
                />
              </Link>
            </div>
          </article>
        ))}
      </GridIndex>
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

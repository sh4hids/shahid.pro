import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import SEO from '../components/seo';

import { DefaultLayout } from '../views/layouts';
import { PostSummaryCard } from '../views/components';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <DefaultLayout>
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `sh4hids`,
            `javascript`,
            `react`,
            `developer`,
            `software engineer`,
            `bangladeshi`,
          ]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return <PostSummaryCard key={node.fields.slug} node={node} />;
        })}
      </DefaultLayout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

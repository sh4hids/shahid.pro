import React from 'react';
import { Link, graphql } from 'gatsby';
import { BlogPage } from '../views/pages';

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return <BlogPage siteTitle={siteTitle} posts={posts} />;
  }
}

export default Blog;

export const pageQuery = graphql`
  query BlogPostByLanguage($language: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { language: { eq: $language }, published: { eq: true } }
      }
    ) {
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

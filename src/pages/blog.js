import React from 'react';
import { Link, graphql } from 'gatsby';
import { BlogPage } from '../views/pages';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

class Blog extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return <BlogPage siteTitle={siteTitle} posts={posts} />;
  }
}

export default injectIntl(Blog);

export const pageQuery = graphql`
  query AllPostByLanguageBlog($language: String!) {
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
            language
          }
        }
      }
    }
  }
`;

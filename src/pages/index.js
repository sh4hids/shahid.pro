import React from 'react';
import { Link, graphql } from 'gatsby';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

import { HomePage } from '../views/pages';

class BlogIndex extends React.Component {
  render() {
    const { data, intl } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return <HomePage siteTitle={siteTitle} posts={posts} />;
  }
}

export default injectIntl(BlogIndex);

export const pageQuery = graphql`
  query AllPostByLanguage($language: String!) {
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

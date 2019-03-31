import React from 'react';
import { Link, graphql } from 'gatsby';
import { SEO, PrevNext, PostMeta } from '../components';
import { DefaultLayout } from '../layouts';
import { Container, Text } from '../kits';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const { readingTime } = post.fields;

    return (
      <DefaultLayout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Container card>
          <Text color="dark" variant="h4">
            {post.frontmatter.title}
          </Text>
          <PostMeta post={post} readingTime={readingTime} />
          <hr />
          <Text variant="raw" html={post.html} />
          <hr />
          <PrevNext previous={previous} next={next} />
        </Container>
      </DefaultLayout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`;

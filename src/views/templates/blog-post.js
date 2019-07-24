import React from 'react';
import { Link, graphql } from 'gatsby';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import { PostMeta, PrevNext, SEO, SocialShareSection } from '../components';
import { DefaultLayout } from '../layouts';
import { Container, Text } from '../kits';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteUrl = this.props.data.site.siteMetadata.siteUrl;
    const { previous, next } = this.props.pageContext;
    const { readingTime } = post.fields;
    const disqusConfig = {
      url: `${siteUrl}/${post.fields.slug}`,
      identifier: post.fields.slug,
      title: post.frontmatter.title,
    };

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
          {(previous || next) && (
            <>
              <hr />
              <PrevNext previous={previous} next={next} />
            </>
          )}
          <hr />
          <SocialShareSection
            url={`${siteUrl}/${post.fields.slug}`}
            title={post.frontmatter.title}
          />
          <hr />
          <Disqus config={disqusConfig} />
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
        siteUrl
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

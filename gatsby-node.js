const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/views/templates/blog-post.js`);
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                language
                published
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    function getPreviousPost({ posts, post, index }) {
      if (index === posts.length - 1) {
        return null;
      } else {
        for (var i = index + 1; i < posts.length; i++) {
          if (
            posts[i].node.frontmatter.language ===
              post.node.frontmatter.language &&
            posts[i].node.frontmatter.published
          ) {
            return posts[i].node;
          }
        }
      }
      return null;
    }

    function getNextPost({ posts, post, index }) {
      if (index === 0) {
        return null;
      } else {
        for (var i = index - 1; i >= 0; i--) {
          if (
            posts[i].node.frontmatter.language ===
              post.node.frontmatter.language &&
            posts[i].node.frontmatter.published
          ) {
            return posts[i].node;
          }
        }
      }
      return null;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous = getPreviousPost({ posts, post, index });
      const next = getNextPost({ posts, post, index });

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

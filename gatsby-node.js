/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              title
              templatePath
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.templatePath === "sermon-template.js") {
      createPage({
        path: `/sermons${node.fields.slug}`,
        component: path.resolve(
          `src/templates/${node.frontmatter.templatePath}`
        ),
        context: {
          slug: node.fields.slug,
        }, // additional data can be passed via context
      })
    } else {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(
          `src/templates/${node.frontmatter.templatePath}`
        ),
        context: {}, // additional data can be passed via context
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

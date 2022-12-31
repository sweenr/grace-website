/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require(`gatsby-awesome-pagination`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSanitySermon(sort: { publishDate: DESC }) {
        edges {
          node {
            slug {
              current
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

  paginate({
    createPage, // The Gatsby `createPage` function
    items: result.data.allSanitySermon.edges, // An array of objects
    itemsPerPage: 10, // How many items you want per page
    pathPrefix: "/sermons", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/sermons-template.js`), // Just like `createPage()`
  })

  result.data.allSanitySermon.edges.forEach(({ node }) => {
    createPage({
      path: `/sermons/${node.slug.current}`,
      component: path.resolve(`src/templates/sermon-template.js`),
      context: {
        slug: node.slug.current,
      },
    })
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

const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const PostTemplate = path.resolve("src/templates/post.js")

    resolve(
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const { path } = node.frontmatter

          createPage({
            path,
            component: PostTemplate,
            context: {
              pathSlug: path,
            },
          })
          resolve()
        })
      })
    )
  })
}

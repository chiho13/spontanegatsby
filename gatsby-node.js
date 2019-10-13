const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const fs = require('fs');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pageData = JSON.parse(fs.readFileSync('./content/countries.json', { encoding: 'utf-8' }));
  const result = await graphql(`
    query {
      destinations {
        destinations(orderBy: createdAt_DESC) {
          slug
          country
          countryid
        }
      }
    }
  `)

  result.data.destinations.destinations.forEach(({ slug, country }) => {
    createPage({
      path: `${country.toLowerCase()}/${slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: slug,
        country: country
      },
    })
  });

  pageData.forEach(({country, code}) => {
    createPage({
      path: country.replace(/[.,\s]/g, '').toLowerCase(),
      component: path.resolve(`./src/templates/country.js`),
      context: {
        country,
        code
      }
    });
  });

  result.data.destinations.destinations.forEach(({ slug, country, countryid }) => {  
    createPage({
      path: country.toLowerCase(),
      component: path.resolve(`./src/templates/countryWithData.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: slug,
        countryid: countryid
      },
    })
  });
}

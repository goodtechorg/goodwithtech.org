const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query PagesQuery {
      causes: allAirtable(filter: {table: {eq: "Causes"}}) {
        nodes {
          data {
            Slug
          }
        }
      },
      actions: allAirtable(filter: {table: {eq: "Actions"}}) {
        nodes {
          data {
            Slug
          }
        }
      }
    }
  `)

  console.log(JSON.stringify(data));

  data.causes.nodes.forEach(({ data }) => {
    createPage({
      path: `/causes/${data.Slug}`,
      component: path.resolve(`./src/templates/cause.js`),
      context: { slug: data.Slug },
    })
  })

  data.actions.nodes.forEach(({ data }) => {
    createPage({
      path: `/actions/${data.Slug}`,
      component: path.resolve(`./src/templates/action.js`),
      context: { slug: data.Slug },
    })
  })
}

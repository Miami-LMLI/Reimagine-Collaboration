const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve('./src/templates/category.js');
    const moduleTemplate = path.resolve('./src/templates/module.js');

    resolve(
        graphql(
            `
          {
            allContentfulCategory {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulModule {
              edges {
                node {
                  title
                  slug
                  category {
                    slug
                  }
                }
              }
            }
          }
          `,
        ).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          const categories = result.data.allContentfulCategory.edges;
          categories.forEach((category, index) => {
            createPage({
              path: `/${category.node.slug}/`,
              component: categoryTemplate,
              context: {
                slug: category.node.slug,
              },
            });
          });

          const modules = result.data.allContentfulModule.edges;
          modules.forEach((modules, index) => {
            createPage({
              path: `/modules/${modules.node.slug}/`,
              component: moduleTemplate,
              context: {
                slug: modules.node.slug,
              },
            });
          });
        }),
    );
  });
};

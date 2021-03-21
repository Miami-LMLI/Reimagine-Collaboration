const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve('./src/templates/category.js');
    const moduleTemplate = path.resolve('./src/templates/module.js');
    const memberTemplate = path.resolve('./src/templates/member.js');

    resolve(
        graphql(
            `
          {
            allContentfulCategory {
              edges {
                node {
                  slug
                }
              }
            }
            allContentfulModule {
              edges {
                node {
                  slug
                  category {
                    slug
                  }
                }
              }
            }
            allContentfulMember {
              edges {
                node {
                  slug
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
              path: `/${modules.node.category.slug}/${modules.node.slug}/`,
              component: moduleTemplate,
              context: {
                slug: modules.node.slug,
              },
            });
          });

          const members = result.data.allContentfulMember.edges;
          members.forEach((members, index) => {
            createPage({
              path: `/cohortix/${members.node.slug}/`,
              component: memberTemplate,
              context: {
                slug: members.node.slug,
              },
            });
          });
        }),
    );
  });
};

const config = require('./src/utils/siteConfig');

const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // This is to create redirect from /Funds to /Funds/NIK-I
  const getRedirects = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulFunds(sort: { fields: [fundSequence] }) {
          distinct(field: fundName)
        }
      }
    `).then(result => {
      const [slug] = result.data.allContentfulFunds.distinct;
      const fundRedirect = `/Funds/${slug.replace(/\s+/g, '-')}`;

      const redirectPaths = [
        {
          from: '/Funds',
          to: fundRedirect,
        },
        {
          from: '/Funds/',
          to: fundRedirect,
        },
      ];

      for (const obj of redirectPaths) {
        const { from, to } = obj;
        createRedirect({
          fromPath: from,
          redirectInBrowser: true,
          toPath: to,
        });
      }
      resolve();
    });
  });

  // const loadPosts = new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allContentfulPost(
  //         sort: { fields: [publishDate], order: DESC }
  //         limit: 10000
  //       ) {
  //         edges {
  //           node {
  //             slug
  //             publishDate
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     const posts = result.data.allContentfulPost.edges
  //     const postsPerFirstPage = config.postsPerHomePage
  //     const postsPerPage = config.postsPerPage
  //     const numPages = Math.ceil(
  //       posts.slice(postsPerFirstPage).length / postsPerPage
  //     )

  //     // Create main home page
  //     createPage({
  //       path: `/`,
  //       component: path.resolve(`./src/templates/index.js`),
  //       context: {
  //         limit: postsPerFirstPage,
  //         skip: 0,
  //         numPages: numPages + 1,
  //         currentPage: 1,
  //       },
  //     })

  //     // Create additional pagination on home page if needed
  //     Array.from({ length: numPages }).forEach((_, i) => {
  //       createPage({
  //         path: `/${i + 2}/`,
  //         component: path.resolve(`./src/templates/index.js`),
  //         context: {
  //           limit: postsPerPage,
  //           skip: i * postsPerPage + postsPerFirstPage,
  //           numPages: numPages + 1,
  //           currentPage: i + 2,
  //         },
  //       })
  //     })

  //     // Create each individual post
  //     posts.forEach((edge, i) => {
  //       const prev = i === 0 ? null : posts[i - 1].node
  //       const next = i === posts.length - 1 ? null : posts[i + 1].node
  //       createPage({
  //         path: `${edge.node.slug}/`,
  //         component: path.resolve(`./src/templates/post.js`),
  //         context: {
  //           slug: edge.node.slug,
  //           prev,
  //           next,
  //         },
  //       })
  //     })
  //     resolve()
  //   })
  // })

  // const loadTags = new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allContentfulTag {
  //         edges {
  //           node {
  //             slug
  //             post {
  //               id
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     const tags = result.data.allContentfulTag.edges
  //     const postsPerPage = config.postsPerPage

  //     // Create tag pages with pagination if needed
  //     tags.map(({ node }) => {
  //       const totalPosts = node.post !== null ? node.post.length : 0
  //       const numPages = Math.ceil(totalPosts / postsPerPage)
  //       Array.from({ length: numPages }).forEach((_, i) => {
  //         createPage({
  //           path:
  //             i === 0 ? `/tag/${node.slug}/` : `/tag/${node.slug}/${i + 1}/`,
  //           component: path.resolve(`./src/templates/tag.js`),
  //           context: {
  //             slug: node.slug,
  //             limit: postsPerPage,
  //             skip: i * postsPerPage,
  //             numPages: numPages,
  //             currentPage: i + 1,
  //           },
  //         })
  //       })
  //     })
  //     resolve()
  //   })
  // })

  // const loadPages = new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allContentfulPage {
  //         edges {
  //           node {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     const pages = result.data.allContentfulPage.edges
  //     pages.map(({ node }) => {
  //       createPage({
  //         path: `${node.slug}/`,
  //         component: path.resolve(`./src/templates/page.js`),
  //         context: {
  //           slug: node.slug,
  //         },
  //       })
  //     })
  //     resolve()
  //   })
  // })

  const loadFunds = new Promise(resolve => {
    graphql(`
      {
        allContentfulFunds(sort: { fields: [fundSequence] }) {
          distinct(field: fundName)
        }
      }
    `).then(res => {
      const pages = res.data.allContentfulFunds.distinct;
      pages.map(slug => {
        createPage({
          path: `Funds/${slug.replace(/\s+/, '-')}/`,
          component: path.resolve('./src/templates/funds.js'),
          context: {
            slug,
            pages,
          },
        });
      });
      resolve();
    });
  });
  return Promise.all([getRedirects, loadFunds]);
};

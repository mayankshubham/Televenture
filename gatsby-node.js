const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // This is to create redirect from /Funds to /Funds/NIK-I
  const getRedirects = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulFundsDetails(sort: { fields: [order] }) {
          nodes {
            shortName
          }
        }
      }
    `).then(result => {
      const [slug] = result.data.allContentfulFundsDetails.nodes;
      const fundRedirect = `/Funds/${slug.shortName.replace(/\s+/g, '-')}`;

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

  const loadFunds = new Promise(resolve => {
    graphql(`
      {
        allContentfulFundsDetails(sort: { fields: [order] }) {
          nodes {
            shortName
          }
        }
      }
    `).then(res => {
      const pages = res.data.allContentfulFundsDetails.nodes;
      pages.map(({ shortName: slug }) => {
        createPage({
          path: `Funds/${slug.replace(/\s+/, '-')}/`,
          component: path.resolve('./src/templates/funds.js'),
          context: {
            slug,
            pages: pages.map(item => item.shortName),
          },
        });
      });
      resolve();
    });
  });
  return Promise.all([getRedirects, loadFunds]);
};

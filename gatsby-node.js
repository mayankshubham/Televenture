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

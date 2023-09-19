const APPROOT = require('app-root-path');
const config = require(`${APPROOT}/config/config`);
const elasticsearch = require('elasticsearch');

const elasticClient = new elasticsearch.Client({
  host: config.ELASTICSEARCH_SE_HOST,
  requestTimeout: 6000,
});

module.exports = {
  elasticClient: elasticClient,
};

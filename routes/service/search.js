const APPROOT = require("app-root-path");
const elasticClient = require(`${APPROOT}/middleware/elasticClient`);
const elasticQuery = require("../models/query/search");
const elasticPlayload = require("../models/payload/search");

const search = async (data) => {
  console.log(data + "-searchservice");

  const result = {};
  try {
    const searchPayload = await elasticPlayload.search(data);
    const searchQuery = await elasticQuery(searchPayload);
    if (data.body.sort == "true") {
      searchQuery.body.sort = [{ _score: "desc" }];
    } else {
      searchQuery.body.sort = [{ start_dttm: "desc" }];
    }
    console.log(data.body);

    if (data.body.date_from && data.body.date_to) {
      console.log(searchQuery.body.query.bool.must);
      searchQuery.body.query.bool.must.push({
        range: {
          start_dttm: {
            gte: data.body.date_from,
            lte: data.body.date_to,
            format: "yy-MM-dd" && "yyyy",
          },
        },
      });
      console.log(searchQuery.body.query.bool.must[1]["range"]);
    }

    const searchData = await elasticClient.elasticClient.search(searchQuery);
    result.data = searchData;
    console.log(`~~~~~~~~~~~~~~~~`);
  } catch (e) {}
  // 후 처리

  return result;
};

module.exports = {
  search: search,
};

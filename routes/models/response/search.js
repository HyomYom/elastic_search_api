const { response } = require("express");
//
const search = (data, res) => {
  let info = {};
  const datas1 = data.data.hits.hits;
  const datas2 = data.data.hits.total.value;
  const datas3 = data.data.aggregations.category.buckets;

  const result1 = datas1.map((n) => {
    return n._source;
  });

  const result2 = datas3.map((n) => {
    return n.doc_count;
  });
  const result3 = datas1.map((n) => {
    return n.highlight;
  });

  // res.send(result);
  var highlight = [];

  info.searchinfo = result1;
  info.countinfo = datas2;
  info.ct_countinfo = result2;
  info.highlight = result3;
  return info;
};

module.exports = {
  search: search,
};

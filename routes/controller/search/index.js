const searchService = require("../../service/search");
const searchPayload = require("../../models/payload/search");
const searchResponse = require("../../models/response/search");

const search = async (data, res) => {
  console.log(data + "-controllerindex");
  const service = await searchService.search(data); // 컨트롤러에서 받은 데이터 검색
  const result = searchResponse.search(service); // 검색 후 찾은 데이터 반환

  // console.log(`~~~~~~~~~~~`);
  // console.log(result.highlight);
  // console.log(result.highlight[0] == undefined);
  // console.log([result.highlight][0].length == 0);
  // console.log([result.highlight][0]);
  // console.log(`~~~~~~~~~~~`);
  if (result.highlight[0] == undefined || [result.highlight][0].length == 0 || result.ct_countinfo  == undefined|| result.countinfo == undefined) {
    res.render("idx_err");
  } else {
    console.log("hi");
    var highlight = [];
    var first_json = result.highlight[0];
    // console.log(first_json);
    var first_key = Object.getOwnPropertyNames(first_json);
    // console.log(first_key);
    var first_value = first_json[first_key[0]];
    // console.log(first_value);

    highlight.push(first_key);
    highlight.push(first_value);
    // console.log(highlight);
    // console.log(result.countinfo);
    console.log(data.body.name);
    console.log(data.body.box);
    console.log(result.highlight)
    res.render("idx", {
      result: result.searchinfo,
      count: result.countinfo,
      ct_count: result.ct_countinfo,
      highlight: highlight,
      realhighlight: result.highlight,
      searchkey: data.body.name || data.body.o_search,
    });
  }
};

// res.json({ok:true});
// object 로 변경 가능
module.exports = {
  search: search,
};

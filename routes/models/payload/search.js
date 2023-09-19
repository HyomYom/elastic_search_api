const search = (req) => {
  const result = {};
  // let data = {};
  // data.category = req.query.box;
  // result.search = req.query.name;
  // console.log(`category : ${result.category}`);
  // console.log(`search : ${result.search}`);
  try {
    result.category = req.body.box;
    result.search = req.body.name;
    result.o_search = req.body.o_search
    result.o_category = req.body.o_category
    result.s_search = req.body.s_search
    result.scope = req.body.scope
    
    console.log(`scope : ${result.scope}`);
    console.log(`category : ${result.category}`);
    console.log(`search : ${result.search}`);
    console.log(`o_search : ${result.o_search}`);
    console.log(`o_category : ${result.o_category}`);
    console.log(`s_search : ${result.s_search}`);
  } catch (e) {}
  return result;
};

module.exports = {
  search: search,
};

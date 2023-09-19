const express = require("express");
const router = express.Router();
const searchController = require("./search/index");
// searchController.search
// router.get("/search/:country", (req, res) => {
// const test = document.getElementById('box');
// console.log(test);

// router.get("/search", (req, res) => {
//   // let data = {};

//   // data.category = req.query.box;
//   // data.search = req.query.name;
//   // console.log(`category : ${data.category}`);
//   // console.log(`search : ${data.search}`);
//   searchController.search(req, res);
// });

router.post("/search_post", (req, res) => {
  searchController.search(req, res);
});

router.post("/search_post_sp", (req, res) => {
  searchController.search(req, res);
});

// router.get("/list/:p", (req, res) => {
//   const pageNum = Number(req.query.pageNum) || 1; // 쿼리스트링으로 받을 페이지 번호 값, 기본값은 1
//   const contentSize = 10; // NOTE: 페이지에서 보여줄 컨텐츠 수
//   const pnSize = 10; // NOTE :  페이지네이션 개수 설정.
//   const skipSize = (pageNum - 1) * contentSize; // 다음 페이지 갈 때 건너 뛸 리스트 개수. 1페이지는 건너 뛰는 게시물 0 , 2페이지는 건너뛰는 페이지수 10개
//   // 즉 2페이지에서는 11번 게시물부터 보여준다.
//   const pageInfo = [];
//   pageInfo.push(pageNum);
//   pageInfo.push(contentSize);
//   pageInfo.push(pnSize);
//   pageInfo.push(skipSize);
//   searchController.search(pageInfo, res);
// });


module.exports = router;

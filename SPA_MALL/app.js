const express = require("express"); // express 모듈을 가져옴
const connect = require("./schemas");

const app = express(); // app에 서버객체가 들어있음.
const port = 3000;

connect();

const goodsRouter = require("./routes/goods");

// 바디로 들어오는 json데이터를 파싱해주는 미들웨어
app.use(express.json());

// const requestMiddleware = (req, res, next) => {
//   console.log("주소는", req.path);

//   if (req.path === "/") {
//     console.log("Request URL:", req.originalUrl, " - ", new Date());
//     next(); // next가 있어야만, 다음의 미들웨어로 넘어감
//   } else {
//     res.send("잘못된 경로");
//   }
// };

// app.use(requestMiddleware);

// use로 미들웨어 구현
app.use("/api", goodsRouter); // api경로일때만 goodsRouter를 사용(라우터도 미들웨어)

// 라우팅 // 라우터도 use와 형식이 비슷=> 라우터도 미들웨어
// get이라는 http메써드의 첫번째인자 경로로 요청이 들어오면, 2번째 인자함수를 실행.
// res는 express.js가 넘겨주는 거
app.get("/", (req, res) => {
  res.send("hello world");
});

// listen은 서버를 켜겟따는 것이고, 첫번째인자로는 포트번호, 두번째인자로는 서버가 제대로 켜진다음에 호출될 함수.
app.listen(port, () => {
  console.log(port, "포트로 서버가 켜졌어요");
});

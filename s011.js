

/*
export default function express() {
  // 팩토리 함수
  return new Express();의 형식
}

*/
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('<h1>Hello Express.js</h1>');
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// EJS를 템플릿 엔진으로 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const val1 = parseInt(a);
  const val2 = parseInt(b);
  const result = val1 + val2;

  // result.ejs 템플릿 파일을 렌더링하고 result 변수를 전달
  res.render('s013', { result: result });
});

app.listen(port, () => {
  console.log(`Server is listening at localhost:${port}`);
});
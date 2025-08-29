const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/add', (req, res)=>{
  const { a, b } = req.query;
  const val1 = parseInt(a);
  const val2 = parseInt(b);
  const result = val1 + val2;
  res.send(`<h1>합계 : ${result}</h1>`);
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});
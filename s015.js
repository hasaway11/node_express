// npm install cors

const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const todos = [];
let tno = 1;

const corsOptions = {
  origin: 'http://127.0.0.1:5501' // 1. Set the specific origin to allow
};

// You can also allow multiple origins
// const corsOptions = {
//   origin: ['http://example.com', 'http://another-domain.com']
// };

app.use(cors(corsOptions)); // 2. Apply the options

// EJS를 템플릿 엔진으로 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// public 폴더를 정적 파일 디렉토리로 설정
app.use(express.static('public'));

// urlencoded 데이터 파싱 미들웨어 추가
// urlencoded 형식의 HTTP 요청 본문을 자동으로 파싱하여 req.body 객체에 담아준다
app.use(express.urlencoded({ extended: true }));

app.get('/todos', (req, res)=>{
  res.status(200).json({ todos });
});

app.post('/todos', (req, res)=>{
  const {title} = req.body;
  const todo = {tno:tno++, title, finish:false};
  todos.push(todo);
  res.status(200).json({ todos });
});

app.put('/todos', (req, res)=>{
  let {tno} = req.body;
  tno = +tno;
  for(const todo of todos) {
    if(todo.tno===tno) {
      todo.finish = !todo.finish;
    }
  }
  res.status(200).json({ todos });
});

app.delete('/todos/:tno', (req, res)=>{
  let {tno} = req.params;
  console.log(tno);
  tno = +tno;
  for(let i=0; i<todos.length; i++) {
    if(todos[i].tno===tno) {
      todos.splice(i, 1);
      break;
    }
  }
  res.status(200).json({ todos });
});

app.listen(port, () => {
  console.log(`Server is listening at localhost:${port}`);
});
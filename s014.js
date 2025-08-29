const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const todos = [];
let tno = 1;

// EJS를 템플릿 엔진으로 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// public 폴더를 정적 파일 디렉토리로 설정
app.use(express.static('public'));

// urlencoded 데이터 파싱 미들웨어 추가
// urlencoded 형식의 HTTP 요청 본문을 자동으로 파싱하여 req.body 객체에 담아준다
app.use(express.urlencoded({ extended: true }));

app.get('/todo/list', (req, res)=>{
  res.render('list', {todos:todos});
});

app.post('/todo/add', (req, res)=>{
  const {title} = req.body;
  const todo = {tno:tno++, title, finish:false};
  todos.push(todo);
  res.redirect('/todo/list');
});

app.post('/todo/toggle', (req, res)=>{
  let {tno} = req.body;
  tno = +tno;
  for(const todo of todos) {
    if(todo.tno===tno) {
      todo.finish = !todo.finish;
    }
  }
  res.redirect('/todo/list');
});

app.post('/todo/delete', (req, res)=>{
  let {tno} = req.body;
  console.log(tno);
  tno = +tno;
  for(let i=0; i<todos.length; i++) {
    if(todos[i].tno===tno) {
      todos.splice(i, 1);
      break;
    }
  }
  res.redirect('/todo/list');
});


app.listen(port, () => {
  console.log(`Server is listening at localhost:${port}`);
});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// urlencoded 데이터 파싱 미들웨어 추가
// urlencoded 형식의 HTTP 요청 본문을 자동으로 파싱하여 req.body 객체에 담아준다
app.use(express.urlencoded({ extended: true }));

let tno = 1;
const todos = [];

app.get('/', (req, res) => {
   res.status(200).json({ data: todos });
});

app.post('/todos', (req, res)=>{
   const {title, deadline} = req.body;
   if (!title || !deadline) {
        return res.status(400).json({ success: false, message: '필수 값 누락' });
    }
   const todo = {tno:tno++, title, deadline, finish:false};
   todos.push(todo);
   res.status(200).json({ data: todos });
});

app.put('/todos', (req, res)=>{
   const {tno} = req.body;
   const targetTno = parseInt(tno);
   for(const todo of todos) {
     if(todo.tno===targetTno) {
       todo.finish = !todo.finish;
       break;
     }
   }
   res.status(200).json({ data: todos });
});

app.delete('/todos', (req, res)=>{
   const {tno} = req.body;
   const targetTno = parseInt(tno);
   for(let i=0; i<todos.length; i++) {
     if(todos[i].tno===targetTno) {
       todos.splice(i, 1);
       break;
     }
   }
   res.status(200).json({ data: todos });
});


app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});
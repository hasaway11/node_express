const http = require('http');
const url = require('url');

let todos = []; // Todo 목록을 저장할 배열
let nextTno = 1; // Todo 번호(tno) 자동 증가

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, World!</h1>');
});

const port = 3000;
server.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
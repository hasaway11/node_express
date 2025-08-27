// 모듈 import
// 2009년 Node.js는 CommonJS 방식으로 모듈 개념을 실용적으로 도입
const http = require('http'); 

http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
}).listen(3000); 

console.log('Server running at http://127.0.0.1:3000/');

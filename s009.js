const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // true → querystring 자동 파싱
    const pathname = parsedUrl.pathname;
    const method = req.method;

    // 1) HTML로 이름 응답
    if (pathname === '/hello' && method === 'GET') {
        const name = parsedUrl.query.name; // /hello?name=홍길동
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        if (name) {
            res.end(`<h1>당신의 이름은 ${name}입니다</h1>`);
        } else {
            res.end('<h1>이름을 입력해주세요. 예: /hello?name=홍길동</h1>');
        }
        return;
    }

    // 2) JSON으로 이름 응답
    if (pathname === '/api/hello' && method === 'GET') {
        const name = parsedUrl.query.name;
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        if (name) {
            res.end(JSON.stringify({ name }));
        } else {
            res.end(JSON.stringify({ error: '이름을 입력해주세요. 예: /api/hello?name=홍길동' }));
        }
        return;
    }

    // 기본 라우트 (404)
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
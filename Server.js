const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Node.js Server!');
})});



const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

const http = require('http');

let visitorCount = 0;  // 1️⃣ Variable to track visits

const server = http.createServer((request, response) => {
  if (request.method === 'GET') {  // 2️⃣ Check if it's a GET request
    visitorCount++;  // 3️⃣ Increment count
    console.log(`Visitor count: ${visitorCount}`);  // 4️⃣ Log to terminal
    response.end(`Thanks for visiting! You are visitor number: ${visitorCount}`);  // 5️⃣ Send response to browser
  }
});

server.listen(3000, () => {
  console.log('Visitor Counter running at http://localhost:3000');
});

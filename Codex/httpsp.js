/*const http = require('http');

// Create a server object
const server = http.createServer((request, response) => {
  response.write("Hello World!\n\nWhy did the JavaScript developer go broke?\nBecause he kept using 'var' when he should've let it go!\n\nHave a bug-free day!");
  response.end();
});

server.listen(3000); 
*/

const http = require('http'); // Import the http module

// Create the server
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('🏃🏻‍➡️🚉🍿📺🎞️🥺💔😭😭🍿🥤'); // Your emoji story goes here
});

// Start listening on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
 
});

const http = require('http');

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    let tweet = '';

    // Collect chunks of data
    request.on('data', (chunk) => {
      tweet += chunk;
    });

    // Once all data is received
    request.on('end', () => {
      console.log('New tweet received: ', tweet);

      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Tweet posted successfully!');
    });
  } else {
    // All other request types (like GET)
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Only POST requests accepted here!');
  }
});

server.listen(3000, () => {
  console.log('Tweet server is live at http://localhost:3000');
});

const http = require('http');

let statusMessage = null; // Initially, there's no status

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    let body = '';

    request.on('data', chunk => {
      body += chunk;
    });

    request.on('end', () => {
      statusMessage = body; // Save the status
      console.log('Status Posted:', statusMessage);
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Status message posted!');
    });

  } else if (request.method === 'DELETE') {
    console.log('Original Status:', statusMessage);
    statusMessage = null;
    console.log('Status deleted.');

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Status message deleted!');

  } else if (request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(statusMessage ? `Current status: ${statusMessage}` : 'No status set.');

  } else {
    response.writeHead(405, { 'Content-Type': 'text/plain' });
    response.end('Method not allowed.');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

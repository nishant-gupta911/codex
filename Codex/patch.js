const http = require('http');

let bio = "it's charli"; // Starting bio

const server = http.createServer((request, response) => {
  if (request.method === 'PATCH') {
    let patchData = '';

    // Collect data chunks
    request.on('data', (chunk) => {
      patchData += chunk;
    });

    // When all data is received
    request.on('end', () => {
      console.log('Original Bio:', bio);

      // Append patchData to the existing bio
      bio += patchData;

      console.log('Updated Bio:', bio);

      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Bio patched!');
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Go back to your terminal!');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

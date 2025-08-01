const http = require('http');

let mood = '';

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Show current mood
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(mood ? `Current mood: ${mood}` : 'No mood set yet.');

  } else if (req.method === 'POST') {
    // Add a new mood
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      mood = body;
      res.writeHead(201, { 'Content-Type': 'text/plain' });
      res.end(`Mood set to: ${mood}`);
    });

  } else if (req.method === 'PUT') {
    // Replace the mood
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      mood = body;
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Mood replaced with: ${mood}`);
    });

  } else if (req.method === 'PATCH') {
    // Update (append to) the current mood
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      mood += body;
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Mood updated to: ${mood}`);
    });

  } else if (req.method === 'DELETE') {
    // Remove mood
    mood = '';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Mood deleted.');
    
  } else {
    // Method not supported
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(3000, () => {
  console.log('Mood feed server running at http://localhost:3000');
});

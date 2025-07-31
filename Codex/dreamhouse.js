const http = require('http');

const server = http.createServer((request, response) => {
  let statusCode = 200;
  let contentType = 'text/html; charset=utf-8';
  let content = '';

  if (request.url === '/') {
    content = `
      <h1>🏡 Welcome to My Dreamhouse</h1>
      <p>Come take a tour of my dream home!</p>
      <img src="https://i.imgur.com/O5VrK8v.jpeg" alt="Dream home outside" width="400">
    `;
  } else if (request.url === '/living-room') {
    content = `
      <h1>🛋️ Living Room</h1>
      <p>This is where I relax with plush couches and neon lights.</p>
      <img src="https://i.imgur.com/f1ZpKfb.jpeg" alt="Living Room" width="400">
    `;
  } else if (request.url === '/kitchen') {
    content = `
      <h1>👩‍🍳 Kitchen</h1>
      <p>Fully smart, self-cleaning kitchen with a coffee robot.</p>
      <img src="https://i.imgur.com/1Rl8gSz.jpeg" alt="Kitchen" width="400">
    `;
  } else if (request.url === '/bedroom') {
    content = `
      <h1>🛏️ Bedroom</h1>
      <p>Cloud-soft bed, plants, warm lights. Pure bliss.</p>
      <img src="https://i.imgur.com/FTVUzfy.jpeg" alt="Bedroom" width="400">
    `;
  } else if (request.url === '/bathroom') {
    content = `
      <h1>🛁 Bathroom</h1>
      <p>Marble everything, walk-in rain shower, spa music playing 24/7.</p>
      <img src="https://i.imgur.com/GYxq7RQ.jpeg" alt="Bathroom" width="400">
    `;
  } else {
    statusCode = 404;
    content = `
      <h1>404 - Room Not Found</h1>
      <p>Oops! That room doesn't exist in the dreamhouse. 🫣</p>
    `;
  }

  response.writeHead(statusCode, { 'Content-Type': contentType });
  response.end(content);
});

server.listen(3000, () => {
  console.log('🏠 Dreamhouse server is running at http://localhost:3000');
});

const os = require('os');

// 1. Platform
const platform = os.platform();

// 2. Total Memory
const totalMemory = os.totalmem(); // in bytes
const totalMemoryMB = (totalMemory / 1024 / 1024).toFixed(2); // in MB

// 3. Free Memory
const freeMemory = os.freemem(); // in bytes
const freeMemoryMB = (freeMemory / 1024 / 1024).toFixed(2); // in MB

// 4. Uptime
const uptimeInSeconds = os.uptime();
const hours = Math.floor(uptimeInSeconds / 3600);
const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
const seconds = Math.floor(uptimeInSeconds % 60);

// 🖨️ Print Everything
console.log(`🖥️  Operating System: ${platform}`);
console.log(`🧠 Total Memory: ${totalMemoryMB} MB`);
console.log(`💤 Free Memory: ${freeMemoryMB} MB`);
console.log(`⏳ Uptime: ${hours}h ${minutes}m ${seconds}s`);

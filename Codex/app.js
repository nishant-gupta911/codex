/*const fs = require('fs');

// Provide correct path to the text file on your Desktop
const filePath = "D:\\vscode\\hey.txt"; // 🖐 Update path if different

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error reading file:', err.message);
    return;
  }
  console.log('📖 Diary Entry:\n');
  console.log(data);
});*/


/*const fs = require('fs');

// Create your new diary entry
const today = new Date();
const dateStr = today.toDateString(); // Example: "Tue Jul 29 2025"

const newEntry = `📅 Date: ${dateStr}
🌤️ Weather: Warm and slightly breezy
🙂 Feeling: Motivated and excited to learn Node.js!

Just finished learning how to write files using fs.writeFile(). I feel like a real developer now!`;

// Define the file path (same as used before)
const filePath = "D:\\vscode\\hey.txt";  // 🛠️ Change if needed

// Write the new diary entry to the file
fs.writeFile(filePath, newEntry, 'utf8', (err) => {
  if (err) {
    console.error('❌ Error writing to file:', err.message);
  } else {
    console.log('✅ Diary updated successfully!');
  }
});*/

/*const fs = require('fs');

// 🧹 Delete the diary file
fs.unlink('D:/vscode/seventh-grade.txt', (err) => {
  if (err) {
    console.error('❌ Error deleting file:', err.message);
    return;
  }
  console.log('✅ seventh-grade.txt has been permanently deleted!');
});
*/


const fs = require('fs');

const filePath = "D:\\vscode\\CODEX\\hey.txt";

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error reading file:', err.message);
    return;
  }

  // Replace all A-Z and a-z with █ using Regex
  const redacted = data.replace(/[A-Za-z]/g, 'fuckoff');

  // Overwrite the file with the redacted text
  fs.writeFile(filePath, redacted, 'utf8', (err) => {
    if (err) {
      console.error('❌ Error writing redacted file:', err.message);
    } else {
      console.log('🕵️ Diary has been redacted successfully.');
    }
  });
});

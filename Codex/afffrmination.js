const fs = require('fs');
const path = require('path');
const os = require('os');

// 🧘 Array of affirmations
const affirmations = [
  'This is going to be your breakthrough year!',
  'You are exactly where you need to be right now.',
  'Your efforts are being noticed.',
  'You are growing in ways you don’t even realize yet.',
  'You deserve all the good coming your way.',
  'Keep going — you’re closer than you think.',
  'You are the author of your story.',
  'Success follows your consistency.',
  'Every small step counts.',
  'You are unstoppable when you believe in yourself.'
];

// 📁 Get the path to the desktop
const desktopPath = path.join(os.homedir(), 'Desktop');

// 🎯 Function to pick a random affirmation and save it
function saveRandomAffirmationToDesktop() {
  const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  const filePath = path.join(desktopPath, 'daily-affirmations.txt');

  fs.writeFile(filePath, randomAffirmation, (err) => {
    if (err) {
      console.error('❌ Error writing the affirmation:', err);
    } else {
      console.log('✅ Random affirmation saved to:', filePath);
    }
  });
}

// 🏁 Run the function
saveRandomAffirmationToDesktop();

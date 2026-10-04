const fs = require('fs');
const path = require('path');

const files = [
  'AdminDashboard.tsx',
  'AdminLogin.tsx',
  'Checkout.tsx',
  'LandingPage.tsx',
  'MyBookings.tsx',
  'WaitingRoom.tsx'
];

files.forEach(f => {
  const filePath = path.join('frontend/src/pages', f);
  let content = fs.readFileSync(filePath, 'utf8');
  // Replace string literals
  content = content.replace(/'http:\/\/localhost:3001([^']*)'/g, "`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}$1`");
  // Replace template literals
  content = content.replace(/`http:\/\/localhost:3001([^`]*)`/g, "`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}$1`");
  fs.writeFileSync(filePath, content);
});
console.log('Fixed URLs');

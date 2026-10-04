const fs = require('fs');
const path = require('path');

const files = [
  'authStore.ts',
  'eventStore.ts'
];

files.forEach(f => {
  const filePath = path.join('frontend/src/store', f);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/'http:\/\/localhost:3001([^']*)'/g, "`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}$1`");
  content = content.replace(/`http:\/\/localhost:3001([^`]*)`/g, "`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}$1`");
  fs.writeFileSync(filePath, content);
});
console.log('Fixed URLs in stores');

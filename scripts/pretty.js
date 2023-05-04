const fs = require('fs');

// whe rename all token address to lowercase in tokens directory
const files = fs.readdirSync('./tokens');
for (const file of files) {
  fs.renameSync(`./tokens/${file}`, `./tokens/${file.toLowerCase()}`);
}

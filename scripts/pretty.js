const fs = require('fs');

const protocols = require('../metadata/protocols.json');

// whe rename all token address to lowercase in tokens directory
const files = fs.readdirSync('./tokens');
for (const file of files) {
  fs.renameSync(`./tokens/${file}`, `./tokens/${file.toLowerCase()}`);
}

const ordered = Object.keys(protocols)
  .sort()
  .reduce((obj, key) => {
    obj[key] = protocols[key];
    return obj;
  }, {});

// validate protocol
for (const [protocol, data] of Object.entries(ordered)) {
  if (!data.displayName) {
    console.info(`Protocol ${protocol} is missing displayName`);
    process.exit(1);
  }
  if (!data.logoURI) {
    console.info(`Protocol ${protocol} is missing logoURI`);
    process.exit(1);
  }
}

fs.writeFileSync('./metadata/protocols.json', JSON.stringify(ordered).toString());

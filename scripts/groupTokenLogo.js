const fs = require('fs');

const chains = [
  'ethereum',
  'arbitrum',
  'optimism',
  'base',
  'polygon',
  'bnbchain',
  'fantom',
  'avalanche',
  'linea',
  'zksyncera',
  'polygonzkevm',
  'celo',
];

const tokenPngFiles = fs.readdirSync('./oldtokens');
for (const chain of chains) {
  if (!fs.existsSync(`./tokens/${chain}`)) {
    fs.mkdirSync(`./tokens/${chain}`);
  }

  for (const file of tokenPngFiles) {
    fs.copyFileSync(`./oldtokens/${file}`, `./tokens/${chain}/${file}`);
  }
}

const fs = require('fs');
var glob = require("glob");
const server = fs.readFileSync('./server/server.ts', 'utf8');
const path = require('path');

glob('./dist-server/main.*.bundle.js', { nodir: true }, (err, files) => {
    const bundleName = files[0].split('/').pop();
    const updatedServer = server.replace(/main.*.js/, bundleName);
    fs.writeFileSync('./server/server.ts', updatedServer);
});



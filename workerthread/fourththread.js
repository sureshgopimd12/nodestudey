const { parentPort } = require("node:worker_threads");

let j = 0;

setTimeout(() => {
    j = 15000;
    process.exit(j);
}, 15000);

parentPort.postMessage(j);


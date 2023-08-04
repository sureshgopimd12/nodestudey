const { parentPort } = require("node:worker_threads");

let j = 0;

setTimeout(() => {
    j = 10000;
    process.exit(j);
}, 10000);

parentPort.postMessage(j);



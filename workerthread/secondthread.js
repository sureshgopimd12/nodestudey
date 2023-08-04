const { parentPort } = require("node:worker_threads");

let j = 0;

setTimeout(() => {
    j = 8000;
    process.exit(j);
}, 8000);

parentPort.postMessage(j);



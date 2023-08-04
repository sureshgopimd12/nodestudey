const { parentPort } = require("node:worker_threads");

let j = 0;

setTimeout(() => {
    j = 1000;
    process.exit(j);
}, 1000);

parentPort.postMessage(j);




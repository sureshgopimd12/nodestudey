const { parentPort } = require("node:worker_threads");

// Listen for messages from the main thread
parentPort.on('message', (j) => {
    setTimeout(() => {
        process.exit(j);
    }, j);
    // Send data back to the main thread
    parentPort.postMessage(j);
});


const { parentPort } = require("node:worker_threads");

let j = 0;

setTimeout(() => {

    for (let i =0;  i < 60000000; i++){
        j++;
    }

    console.log(j);
    
}, 5000);

parentPort.postMessage(j);

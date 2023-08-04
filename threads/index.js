const http = require('node:http');
const cluster = require('node:cluster');
const numCPUS = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numCPUS; i++) {
        cluster.fork();

        
cluster.fork().on('listening', (address) => {
    console.log(address);
});
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end('Hello World/n');
    }).listen(8080);

    console.log(`Worker ${process.pid} started`);
}


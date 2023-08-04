const http = require('http');
const { Worker } = require('worker_threads');
const os = require('os');

const numCPUs = os.cpus().length;

console.log(`Number of CPUs: ${numCPUs}`);

/** Server start */
http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    } else if (req.url === '/slow-page') {
        const worker = new Worker('./worker-thread.js');
        worker.on('message', j => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Slow Page ${j}`);
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World');
        res.end();
    }
}).listen(8080);

/** Timing Count */
let j = 0;

setInterval(() => {
    j++;
    console.log(j);
}, [1000]);

/** Single Thread */

const firstthread = new Worker('./firstthread.js');
firstthread.on('message', j => {
    console.log(`First Thread Start ${j}`);
});

firstthread.on('exit', (code) => {
    console.log(`First Worker exited with code: ${code}`);
});

const secondthread = new Worker('./secondthread.js');
secondthread.on('message', j => {
    console.log(`Second Thread Start ${j}`);
});

secondthread.on('exit', (code) => {
    console.log(`Second Worker exited with code: ${code}`);
});

const thirdthread = new Worker('./thirdthread.js');
thirdthread.on('message', j => {
    console.log(`Third Thread Start ${j}`);
});

thirdthread.on('exit', (code) => {
    console.log(`Third Worker exited with code: ${code}`);
});

const fourththread = new Worker('./fourththread.js');
fourththread.on('message', j => {
    console.log(`Fourth Thread Start ${j}`);
});

fourththread.on('exit', (code) => {
    console.log(`Fourth Worker exited with code: ${code}`);
});

/** Looping Thread */
let timelist = [1000, 5000, 3000, 8000, 10000, 15000];

let jobcount = 1;
for(let i = 0; i < timelist.length; i++)
{
    const thread = new Worker('./thread.js');
    thread.postMessage(timelist[i]);
    thread.on('message', (msg) => {
        console.log(`Received message from worker: ${msg}`);
    });

    thread.on('exit', (code) => {
        console.log(`${jobcount} Job Worker exited with code: ${code}`);
        jobcount++;
    });
}

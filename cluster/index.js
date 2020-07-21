const cluster = require("cluster");
const http = require('http');
const numCpu = require("os").cpus().length;
const process = require("process");
if (cluster.isMaster) {
    console.log(123123123);
    for (let i = 0; i < numCpu; i++) {
        cluster.fork();
    }
    cluster.on("exit", function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    })
} else {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end("hello world\n" + process.pid);
    }).listen(8000);
}

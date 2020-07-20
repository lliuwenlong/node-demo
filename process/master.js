const childProcess = require('child_process');
const cpuNum = require('os').cpus().length;
const worker = childProcess.fork('./worker.js');
worker.send("123123123123");
worker.on("message", () => {
    console.log(123123123123);
})

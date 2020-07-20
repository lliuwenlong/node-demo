const {
    Worker,
    MessagePort,
    parentPort, // 表示父进程的 MessagePort 类型的对象，在主线程里为 null
    workerData // 主线程传递过来的数据
} = require('worker_threads');
parentPort.postMessage("123123");
parentPort.on("message", data => {
    const port = data.port;
    port.on("message", data => {
        console.log("123123123123123");
    })
});
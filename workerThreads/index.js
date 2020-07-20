const {isMainThread, Worker, workerData, MessageChannel} = require("worker_threads");

const worker1 = new Worker("./worker1.js", {
    workerData: {a: 1, b: 2}
});
const worker2 = new Worker("./worker2.js", {
    workerData: {a: 1, b: 3}
});
worker1.on("message", () => {
    console.log(123123123);
})
const {port1, port2, } = new MessageChannel();
worker1.postMessage({port: port2}, [port2]);

setTimeout(() => {
    console.log("执行");
    port1.postMessage("123123123123123123");
}, 5000)


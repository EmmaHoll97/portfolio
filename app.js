const express = require("express");
const cluster = require("cluster");
const compression = require('compression')
const os = require("os");
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

const NumCpu = os.cpus().length;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

if (cluster.isMaster) {
    for (var i = 0; i < NumCpu; i++) {
        cluster.fork();
    }
    cluster.on("exit", (worker, code, singal) => {
        console.log("worker " + worker.process.pid + " died");
        cluster.fork();
    })
} else {
    app.listen(port, (error) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(`Development server start on port ${port}`);
    });
}
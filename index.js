const cluster = require('cluster');

//is the file executed in the master mode ?
if (cluster.isMaster) {
    // Cause index.js to be executed *again* but in slave mode
    cluster.fork();
    // cluster.fork();
    // cluster.fork();
    // cluster.fork();
} else {
    // I am a child, Im going to act like a server an nothing else
    const express = require('express');
    const app = express();

    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {}
    }

    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hi there!');
    });

    app.get('/fast', (req,res)=>{
        res.send('this was fast!');
    });

    app.listen(3000);

}

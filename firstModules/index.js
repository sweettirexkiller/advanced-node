process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');
const crypto = require('crypto');

//is the file executed in the master mode ?
if (cluster.isMaster) {
    // Cause index.js to be executed *again* but in slave mode
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    // I am a child, Im going to act like a server an nothing else
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there!');
        });
    });

    app.get('/fast', (req,res)=>{
        res.send('this was fast!');
    });

    app.listen(3000);

}
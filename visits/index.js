const express = require('express');
const redis = require('redis');
const process = require('process'); //for purposely crashing our server

const app = express();
const client = redis.createClient({
    host: 'redis-server', //since our service is called that it gets redirected to the docker compose, otherwise it would be http://my-redisserver.com
    port: 6379 //default port for redis-server
});
client.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(0); //to crash our server when we visit the root route
    client.get('visits', (err, visits) => {
        res.send(`Number of visits is ${visits}`)
        client.set('visits', parseInt(visits) + 1)
    })
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
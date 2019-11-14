var redis = require('redis');
//var client = redis.createClient();

var client = redis.createClient(6379,"db-server"); //6379,"db-server"

exec = () =>{
    client.on('connect', function() {
        console.log('Redis client connected');
    });
    
    client.on('error', function (err) {
        console.log('Something went wrong ' + err);
    });
    return client;
}

module.exports = exec;
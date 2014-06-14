/**
 * Created with JetBrains WebStorm.
 * User: shrenik
 * Date: 4/2/14
 * Time: 1:07 PM
 * To change this template use File | Settings | File Templates.
 */



var express = require('express');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
    // Fork workers.For MultiProcessing - This Module should be hosted on a high CPU low Memory Server.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
        console.log("Process " + (i + 1) + " Created");
    }

    cluster.on('exit', function (worker, code, signal) {
        //Restart worker if died. Ideally all error handling has been done so this should not happen.
        console.log('worker ' + worker.process.pid + ' died');
        cluster.fork();
        console.log('Restarted');

    });
} else {
    var app = express();
    app.set('port', process.env.PORT || 80);
    app.use('/', express.static(__dirname + '/lw'));
    app.listen(app.get('port'));
}

var broadcast = require('./broadcast');

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 3100});

setInterval(() => {
    broadcast.broadcast(wss, 'doralife12@naver.com', 'faweil', 'ajwgoeae', 'jaweopf', '202020202020');
}, 1000);
var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 3100});

wss.broadcast = function broadcast(message) {
  console.log("Broadcast : ", message);
  wss.clients.forEach((client) => {
    client.send(message);
  });
};

wss.on('connection', (ws) => {
  ws.on('message', (message) => { // echo
    console.log(message);
    ws.send(message);
  })
});

setInterval(() => {
    wss.broadcast(JSON.stringify({"sender":"doralife11@naver.com","fileName":"gawegaweg","mailTitle":"This is Virus1.","mailContent":"This is Virus Contents1.","timestamp":"202011240001"}));
}, 1000);
exports.broadcast = function broadcast(wss, sender, fileName, mailTitle, mailContent, timestamp) {
  var jsonContent = {
    "sender" : String(sender),
    "fileName" : String(fileName),
    "mailTitle" : String(mailTitle),
    "mailContent" : String(mailContent),
    "timestamp" : String(timestamp)
  }
  message = JSON.stringify(jsonContent);
  console.log("Broadcast : ", message);
  wss.clients.forEach((client) => {
    client.send(message);
  });
};
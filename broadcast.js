exports.broadcast = function broadcast(wss, sender, fileName, mailTitle, mailContent, show_log = false) {
  var jsonContent = {
    "sender" : String(sender),
    "fileName" : String(fileName),
    "mailTitle" : String(mailTitle),
    "mailContent" : String(mailContent),
    "timestamp" : String(new Date().getTime())
  }
  message = JSON.stringify(jsonContent);
  if(show_log)
    console.log("Broadcast : ", message);
  wss.clients.forEach((client) => {
    client.send(message);
  });
};
const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  
  let today = new Date();
  let date = today.toLocaleDateString();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 
  const response = {
    Name: 'Time and Date server', 
    Date: date,
    Time: time
  };
  
  res.end(JSON.stringify(response));
}

const server = http.createServer(requestListener);
server.listen(3000);
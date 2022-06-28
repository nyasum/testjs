const https = require("https");
const port = 443;
const ipadd = "213.219.36.122";
const fs = require('fs');

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/olinode.nyasumi.co.uk/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/olinode.nyasumi.co.uk/fullchain.pem")
};

const server = https.createServer(options, (request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });

    const responseMessage = "<h1>Hello World</h1><h3>We are AkaTec!!!</h3>";
    response.end(responseMessage);
    console.log("Sent a response : ${responseMessage}");
});

server.listen(port, ipadd);
console.log("The server has started and is listening on port number:" + port + "/IP Address:" + ipadd);


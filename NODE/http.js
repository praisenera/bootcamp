const http = require("http");
const fs = require("fs");
const p = require("path");
const uc = require("upper-case");

http
  .createServer(function (req, res) {
    // http status code - 200, 404, 401, 403
    // 200 - access the website
    fs.readFile("list.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
    //network port -  8000
  })
  .listen(8000);

// console.log(uc.upperCase("praise nera"));

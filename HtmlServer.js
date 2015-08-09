var server,
    ip   = "127.0.0.1",
    port = 8062,
    http = require('http'),
    fs = require("fs"),
    folderPath = ".",
    url = require('url'),
    path,
    filePath,
    encode = "utf8";

server = http.createServer(function (req, res) {
    path = url.parse(req.url);
    filePath = folderPath + path.pathname;
    var tmp  = path.pathname.lastIndexOf(".");
    var extension  = path.pathname.substring((tmp + 1));
    console.log("filePath="+filePath);

    if (extension === 'png'||extension === 'jpg'||extension === 'git'){
      var img = fs.readFileSync(filePath);
      res.writeHead(200, {'Content-Type': 'image/'+extension});
      //res.write(file);
      console.log("image");
      res.end(img, 'binary');
      return;
    }

    fs.readFile(filePath, encode, function(err, file) {
      console.log("err="+err);
      if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.end();
          return;
      }

      if (extension === 'html'){
        res.writeHead(200, {'Content-Type': 'text/html'});
      }else if (extension === 'htm'){
        res.writeHead(200, {'Content-Type': 'text/html'});
      }else if (extension === 'js'){
        res.writeHead(200, {'Content-Type': 'text/javascript'});
      }else if (extension === 'css'){
        res.writeHead(200, {'Content-Type': 'text/css'});
      }else if (extension === 'ico'){
        res.writeHead(200, {'Content-Type': 'image/icon'});
        res.end(file, 'binary');
        return;
      }else if (extension === 'png'||extension === 'jpg'||extension === 'git'){
        res.writeHead(200, {'Content-Type': 'image/'+extension});
        //res.write(file);
        res.end(file, 'binary');
        return;
      }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
      }

      //res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(file);
      //console.log(file);
      res.end();
      //res.end(file, 'binary');
    });
});

server.listen(port, ip);

console.log("Server running at http://" + ip + ":" + port);

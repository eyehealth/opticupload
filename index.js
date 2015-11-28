var express = require('express'),
    app = express();


// configuring middleware for express 
  app.use   (cookieParser()); // Enable reading of Cookies in object
  app.use   (bodyParser()); // Enable reading of Request Body in object
  app.use   (express.static(__dirname + '/public')); // Serves static files


app.listen  (3000);

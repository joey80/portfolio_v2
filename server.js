const express = require('express'),
    compression = require('compression'),
    serveStatic = require('serve-static'),
    helmet = require('helmet'),
    app = express();

app.use(compression());
app.use(helmet());
app.use(serveStatic(__dirname, { index: 'index.html' }));

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started ' + port);
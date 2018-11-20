var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var server = 'http://18.204.214.35:3001';
 
app.all('/tracker/:path/:producerId/:campaignId', function(req, res) {
    apiProxy.web(req, res, {target: `${server}`});
});

app.listen(process.env.PORT || 3000);



var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var server = 'http://52.3.230.109:3001';
 
app.all('/tracker/:path/:producerId/:campaignId', function(req, res) {
    apiProxy.web(req, res, {target: `${server}`});
});

app.listen(process.env.PORT || 3000);

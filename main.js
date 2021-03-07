var express = require('express');
var app = express();

module.exports = (client) => {
        var data = '{"example":{"online":true,"status":"200"}}';
        app.get('/crot', function(req, res) {
            res.json(data);
            client.channels.cache.get('CHANNEL ID').send('Hello here!');
        });
        app.listen(2990);
        console.log('api onlineeeee');
}

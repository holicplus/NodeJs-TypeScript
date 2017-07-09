var httpd = require('http').createServer(handler);
var io = require('socket.io').listen(httpd);
var fs = require('fs');

httpd.listen(4000);

function handler(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}

io.sockets.on('connection', function(socket) {
	console.log('connected...' + socket);
    socket.on('clientMessage', function(content) {
        socket.emit('serverMessage', 'You said: ' + content);
        socket.broadcast.emit('serverMessage', socket.username + ' 님의 말: ' + content);
    });
    socket.on('login', function(username){
        socket.username = username;
        socket.emit('serverMessage', username+' 으로 접속하였습니다.');
        socket.broadcast.emit('serverMessage', username + ' 님이 입장하였습니다.');
    });
    
    socket.emit('login');
    console.log('send login...');
});

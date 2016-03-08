//require http
//define a port
//create the server
//method to handle request and response
//listen to the port

var http = require('http');

const PORT=8080;

function handleRequest(request,response){
	response.end('hey this works');
}

var server = http.createServer(handleRequest);

server.listen(PORT,function(){
	//this is a callback
	console.log('this is a call back');
})
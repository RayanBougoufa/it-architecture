var myService = {
    MyService: {
        MyPort: {
            MyFunction: function(args) {
                return {
                    name: args.name
                };
            },

            // This is how to define an asynchronous function with a callback.
            MyAsyncFunction: function(args, callback) {
                console.log("Hello world " + name);
                callback({
                    name: args.name
                });
            }
}}}

var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

//http server example
var server = require("http").createServer(function(request,response) {
    response.end('404: Not Found: ' + request.url);
});

server.listen(8000);
soap.listen(server, '/wsdl', myService, xml, function(){
  console.log('server initialized');
});


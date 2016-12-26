var BigPipe = require('bigpipe');

var bigpipe = BigPipe.createServer(8989, {
   pagelets: __dirname +'/../pagelets',
   dist:  __dirname +'/../dist'
});

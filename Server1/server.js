express = require('express');

eobj = express();

port = 5100;

eobj.listen(port, function()
{
	console.log("Server is listening at port " + port);
})

eobj.get('/', function(req,res)
{
	res.send("Marvellous server is ON...");
})

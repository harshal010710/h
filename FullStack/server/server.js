express = require('express');

eobj = express();

port = 5200;

function Starter()
{
	console.log("marvellous server is Started at port "+port);
}

eobj.listen(port,Starter());

function AcceptRequest(req,res)
{
	res.send("marvellous server is ON..");
}

BalanceAmmount = 10000;

eobj.get('/',AcceptRequest);

function CreditAmmount(req,res)
{
	value = req.query.Amount;

	BalanceAmmount = BalanceAmmount + Number(value);

	res.send("Credit Option is selected and Balance is "+BalanceAmmount);
}

eobj.get('/Credit',CreditAmmount);

function DebitAmmount(req,res)
{
	value = req.query.Amount;
	BalanceAmmount = BalanceAmmount + Number(value);
	res.send("Debit option is selected and Balance is "+BalanceAmmount);
}

eobj.get('/Debit',DebitAmmount);
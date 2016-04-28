var express=require('express');
var app=express();

/* app.get('/', function (req,res)
{
res.send('Hello Express');
});
*/
app.get('/about', function (req,res)
{
	res.send('About us');
});

app.use(express.static(__dirname +'/public')); //deafult file
//console.log(__dirname);

app.listen(9000);
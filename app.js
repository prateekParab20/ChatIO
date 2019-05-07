var express=require('express')
var path=require('path')
var bodyParser=require('body-parser')
var nodemailer=require('nodemailer')

//app initialize

var app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade')
app.use(express.static(path.join(__dirname,'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',function(req,res){
    res.render('index')

});
app.listen(3000);
console.log('server running on port 3000')
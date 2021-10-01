const express = require('express')
const path = require('path')
const session= require('express-session')
const{v4 : uuidv4} = require('uuid');
const router = require('./router')

const app = express()
const bodyparser= require('body-parser')
const port = process.env.PORT||3000;


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))
app.set('view engine' , 'ejs')

//load static assets
app.use('/static' , express.static(path.join(__dirname , "public")))
app.use('/assests' , express.static(path.join(__dirname , 'public/assests')))
app.use(session({
    secret : uuidv4(),
    resave : false ,
    saveUninitialized : true
}))

app.use('/route' , router);

// Home route

app.get('/' , (req,res) =>{
res.render('base' , {titl : "Login System"});
})



app.listen(port , ()=> {console.log("Listenting to the server on http://localhost:3000")});

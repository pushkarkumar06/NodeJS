// we are going to create our first http server :) 
// 1. firs we need to require the http (built in) package :)
const http = require("http");
const express = require("express");

const app = express() ;         // here app basically a handler function :)

app.get("/" , (req , res) => {
    return res.send("hello from Home page , pushkar this side ");
});

app.get("/about" , (req , res) => {
    return res.send("hello from the about Page");
});

app.get("/about/signup" , (req , res) => {
    res.send("this is your singup pafe here you can fill you details -> ");
});




// const my_server = http.createServer(app);

// here we have created our own server      // this we used using node js , but this is ugly looking code hence we prefer express to tackle thing like routes
// const my_server = http.createServer((req , res) => {
//     const log = `${Date.now()}:${req.method} ${req.url} New request received \n`
//     fs.appendFile("log.txt" , log , (err , data) => {
//         switch (req.url){
//             case "/":
//                 res.end("You are on the home page ");
//                 break;
//             case "/about":
//                 res.end("Hey , Im pushkar kumar");
//                 break;
//             case "/signup":
//                 if(req.method == "GET") res.end("this is a signup form ");
//                 else if(req.method == 'POST'){
//                     res.end("successfully data get saved in our data base");
//                 }
//             default:
//                 res.end("404 , error occured");
//         }
//     })
//     console.log("New request received :)");
// });



// and here we have created our port number on which my server will wait for my request :) 
app.listen(3030 , () => {
    console.log("server is listining :)");
});